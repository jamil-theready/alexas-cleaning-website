import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------- Simple RFC-4180 CSV parser ----------
function parseCSV(text) {
  const rows = [];
  let i = 0;

  function parseField() {
    if (i >= text.length) return "";

    if (text[i] === '"') {
      // Quoted field
      i++; // skip opening quote
      let field = "";
      while (i < text.length) {
        if (text[i] === '"') {
          if (i + 1 < text.length && text[i + 1] === '"') {
            // Escaped quote
            field += '"';
            i += 2;
          } else {
            // End of quoted field
            i++; // skip closing quote
            break;
          }
        } else {
          field += text[i];
          i++;
        }
      }
      return field;
    } else {
      // Unquoted field
      let field = "";
      while (i < text.length && text[i] !== "," && text[i] !== "\n" && text[i] !== "\r") {
        field += text[i];
        i++;
      }
      return field;
    }
  }

  while (i < text.length) {
    const row = [];
    while (true) {
      row.push(parseField());
      if (i < text.length && text[i] === ",") {
        i++; // skip comma
        continue;
      }
      // End of row
      if (i < text.length && text[i] === "\r") i++;
      if (i < text.length && text[i] === "\n") i++;
      break;
    }
    // Skip completely empty rows (single empty string)
    if (row.length === 1 && row[0] === "" && i >= text.length) break;
    rows.push(row);
  }

  return rows;
}

function csvToObjects(text) {
  const rows = parseCSV(text);
  if (rows.length === 0) return [];
  const headers = rows[0];
  const objects = [];
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    // Skip rows that are clearly empty (no slug)
    if (!row[0] || row[0].trim() === "") continue;
    const obj = {};
    for (let c = 0; c < headers.length; c++) {
      obj[headers[c]] = (row[c] || "").trim();
    }
    objects.push(obj);
  }
  return objects;
}

// ---------- Main ----------

const csvDir = "/Users/admin/Desktop/Clients/Alexa's Cleaning Services/Documents";
const csvFiles = [
  "Blog_Batch1_Upload.csv",
  "Blog_Batch2_Upload.csv",
  "Blog_Batch3_Upload.csv",
];

const allPosts = [];

for (const file of csvFiles) {
  const filePath = resolve(csvDir, file);
  const text = readFileSync(filePath, "utf-8");
  const rows = csvToObjects(text);
  console.log(`${file}: ${rows.length} posts`);
  allPosts.push(...rows);
}

console.log(`\nTotal posts parsed: ${allPosts.length}\n`);

// Build typed objects
const blogPosts = allPosts.map((row) => {
  const faqs = [];
  for (let n = 1; n <= 6; n++) {
    const q = row[`Q${n}`];
    const a = row[`A${n}`];
    if (q && q.trim()) {
      faqs.push({ question: q.trim(), answer: (a || "").trim() });
    }
  }

  return {
    slug: row.slug,
    title: row.Title,
    metaTitle: row["Meta Title"],
    metaDescription: row["Meta description"],
    content: row.Content,
    faqs,
  };
});

// Generate TypeScript output
let ts = `export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  faqs: BlogFAQ[];
}

export const blogPosts: BlogPost[] = [\n`;

for (const post of blogPosts) {
  ts += `  {\n`;
  ts += `    slug: ${JSON.stringify(post.slug)},\n`;
  ts += `    title: ${JSON.stringify(post.title)},\n`;
  ts += `    metaTitle: ${JSON.stringify(post.metaTitle)},\n`;
  ts += `    metaDescription: ${JSON.stringify(post.metaDescription)},\n`;
  ts += `    content: ${JSON.stringify(post.content)},\n`;
  ts += `    faqs: [\n`;
  for (const faq of post.faqs) {
    ts += `      { question: ${JSON.stringify(faq.question)}, answer: ${JSON.stringify(faq.answer)} },\n`;
  }
  ts += `    ],\n`;
  ts += `  },\n`;
}

ts += `];\n`;

const outPath = resolve(__dirname, "..", "src", "data", "blog-posts.ts");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ts, "utf-8");
console.log(`Written ${blogPosts.length} posts to ${outPath}`);

// Print slugs for verification
blogPosts.forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.slug} (${p.faqs.length} FAQs)`);
});

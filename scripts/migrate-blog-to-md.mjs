import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcTs = path.join(root, "src/data/blog-posts.ts");
const outDir = path.join(root, "content/blog");

// Strip TS types and re-emit as a temporary ESM module
const raw = fs.readFileSync(srcTs, "utf8");
const js = raw
  .replace(/export interface BlogFAQ[\s\S]*?\}\n/, "")
  .replace(/export interface BlogPost[\s\S]*?\}\n/, "")
  .replace(/:\s*BlogPost\[\]/, "")
  .replace(/export const blogPosts\s*=/, "export const blogPosts =");

const tmp = path.join(root, "scripts/.blog-posts.tmp.mjs");
fs.writeFileSync(tmp, js);

const { blogPosts } = await import(tmp);

fs.mkdirSync(outDir, { recursive: true });

function yamlEscape(s) {
  if (s == null) return '""';
  const str = String(s);
  // Always quote; escape backslashes + double quotes
  return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function yamlArray(arr) {
  if (!arr || arr.length === 0) return "[]";
  return "\n" + arr.map((v) => `  - ${yamlEscape(v)}`).join("\n");
}

function yamlFaqs(faqs) {
  if (!faqs || faqs.length === 0) return "[]";
  return (
    "\n" +
    faqs
      .map(
        (f) =>
          `  - question: ${yamlEscape(f.question)}\n    answer: ${yamlEscape(f.answer)}`
      )
      .join("\n")
  );
}

let written = 0;
for (const p of blogPosts) {
  const fm = [
    "---",
    `slug: ${yamlEscape(p.slug)}`,
    `title: ${yamlEscape(p.title)}`,
    `metaTitle: ${yamlEscape(p.metaTitle)}`,
    `metaDescription: ${yamlEscape(p.metaDescription)}`,
    `date: ${yamlEscape(p.date)}`,
    `image: ${yamlEscape(p.image)}`,
    `imageAlt: ${yamlEscape(p.imageAlt)}`,
    `excerpt: ${yamlEscape(p.excerpt)}`,
    `author: ${yamlEscape(p.author)}`,
    `tags:${yamlArray(p.tags)}`,
    `quickAnswer: ${yamlEscape(p.quickAnswer)}`,
    `keyTakeaways:${yamlArray(p.keyTakeaways)}`,
    `faqs:${yamlFaqs(p.faqs)}`,
    "---",
    "",
    p.content,
    "",
  ].join("\n");

  const outPath = path.join(outDir, `${p.slug}.md`);
  fs.writeFileSync(outPath, fm);
  written++;
}

fs.unlinkSync(tmp);
console.log(`Wrote ${written} markdown files to ${path.relative(root, outDir)}/`);

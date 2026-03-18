/**
 * Simple markdown-to-HTML converter.
 * Handles: h2-h4, bold, italic, links, unordered/ordered lists,
 * paragraphs, hr, tables, blockquotes, and inline code.
 * No external dependencies.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  const htmlLines: string[] = [];
  let inUl = false;
  let inOl = false;
  let inTable = false;
  let isTableBody = false;
  let inBlockquote = false;

  function closeOpenLists() {
    if (inUl) {
      htmlLines.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      htmlLines.push("</ol>");
      inOl = false;
    }
  }

  function closeTable() {
    if (inTable) {
      htmlLines.push("</tbody></table>");
      inTable = false;
      isTableBody = false;
    }
  }

  function closeBlockquote() {
    if (inBlockquote) {
      htmlLines.push("</blockquote>");
      inBlockquote = false;
    }
  }

  function processInline(text: string): string {
    // Inline code (must come before bold/italic to avoid conflicts)
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
    // Bold
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // Italic (single asterisk, but not inside words with asterisks)
    text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    // Links
    text = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2">$1</a>'
    );
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trimEnd();

    // Horizontal rule
    if (/^---+\s*$/.test(trimmed)) {
      closeOpenLists();
      closeTable();
      closeBlockquote();
      htmlLines.push("<hr />");
      continue;
    }

    // Headings
    const h4Match = trimmed.match(/^####\s+(.*)/);
    if (h4Match) {
      closeOpenLists();
      closeTable();
      closeBlockquote();
      htmlLines.push(`<h4>${processInline(h4Match[1])}</h4>`);
      continue;
    }

    const h3Match = trimmed.match(/^###\s+(.*)/);
    if (h3Match) {
      closeOpenLists();
      closeTable();
      closeBlockquote();
      const content = processInline(h3Match[1]);
      const id = slugify(h3Match[1]);
      htmlLines.push(`<h3 id="${id}">${content}</h3>`);
      continue;
    }

    const h2Match = trimmed.match(/^##\s+(.*)/);
    if (h2Match) {
      closeOpenLists();
      closeTable();
      closeBlockquote();
      const content = processInline(h2Match[1]);
      const id = slugify(h2Match[1]);
      htmlLines.push(`<h2 id="${id}">${content}</h2>`);
      continue;
    }

    // Table row
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      closeOpenLists();
      closeBlockquote();
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());

      // Check if this is a separator row (|---|---|)
      if (cells.every((c) => /^-+$/.test(c) || /^:?-+:?$/.test(c))) {
        // Separator row — skip it, header is already written
        isTableBody = true;
        continue;
      }

      if (!inTable) {
        inTable = true;
        isTableBody = false;
        htmlLines.push("<table><thead><tr>");
        cells.forEach((cell) => {
          htmlLines.push(`<th>${processInline(cell)}</th>`);
        });
        htmlLines.push("</tr></thead><tbody>");
        continue;
      }

      const cellTag = isTableBody ? "td" : "th";
      htmlLines.push("<tr>");
      cells.forEach((cell) => {
        htmlLines.push(`<${cellTag}>${processInline(cell)}</${cellTag}>`);
      });
      htmlLines.push("</tr>");
      continue;
    } else if (inTable) {
      closeTable();
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      closeOpenLists();
      closeTable();
      if (!inBlockquote) {
        inBlockquote = true;
        htmlLines.push("<blockquote>");
      }
      htmlLines.push(`<p>${processInline(trimmed.slice(2))}</p>`);
      continue;
    } else if (inBlockquote) {
      closeBlockquote();
    }

    // Unordered list
    if (/^[-*]\s+/.test(trimmed)) {
      closeTable();
      closeBlockquote();
      if (inOl) {
        htmlLines.push("</ol>");
        inOl = false;
      }
      if (!inUl) {
        inUl = true;
        htmlLines.push("<ul>");
      }
      htmlLines.push(`<li>${processInline(trimmed.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = trimmed.match(/^\d+\.\s+(.*)/);
    if (olMatch) {
      closeTable();
      closeBlockquote();
      if (inUl) {
        htmlLines.push("</ul>");
        inUl = false;
      }
      if (!inOl) {
        inOl = true;
        htmlLines.push("<ol>");
      }
      htmlLines.push(`<li>${processInline(olMatch[1])}</li>`);
      continue;
    }

    // Close lists if we hit a non-list line
    closeOpenLists();

    // Empty line
    if (trimmed === "") {
      continue;
    }

    // Paragraph (default)
    htmlLines.push(`<p>${processInline(trimmed)}</p>`);
  }

  // Close any remaining open tags
  closeOpenLists();
  closeTable();
  closeBlockquote();

  return htmlLines.join("\n");
}

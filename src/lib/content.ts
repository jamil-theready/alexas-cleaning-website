import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogFrontmatter {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  author: string;
  tags: string[];
  quickAnswer: string;
  keyTakeaways: string[];
  faqs: BlogFAQ[];
}

export type BlogPost = BlogFrontmatter & { content: string };

function getBlogFiles(): string[] {
  const dir = path.join(contentDirectory, "blog");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogFiles()
    .map((filename) => {
      const filePath = path.join(contentDirectory, "blog", filename);
      const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
      return { ...(data as BlogFrontmatter), content };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return getAllBlogPosts().find((p) => p.slug === slug) || null;
}

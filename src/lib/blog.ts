import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  thumbnail?: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const source = getPostSource(slug);
      if (!source) return null;
      const { data } = matter(source);
      return { slug, ...(data as BlogFrontmatter) };
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSource(slug: string): string | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

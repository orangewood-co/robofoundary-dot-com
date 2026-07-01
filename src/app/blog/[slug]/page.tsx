import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock } from "lucide-react";
import { getPostSlugs, getPostSource, type BlogFrontmatter } from "@/lib/blog";
import { components } from "../mdx-components";
import FadeIn from "./FadeIn";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getPostSource(slug);

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Back to blog */}
      <FadeIn className="max-w-3xl mx-auto w-full mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Blog</span>
        </Link>
      </FadeIn>

      <article className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <FadeIn delay={0.1}>
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#F3B07C] text-black border-2 border-black mb-5">
            {frontmatter.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
            {frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-8 mb-8 border-b-2 border-black">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F3B07C] border-2 border-black text-sm font-bold text-black">
                {frontmatter.authorInitials}
              </span>
              <span className="font-medium text-black">
                {frontmatter.author}
              </span>
            </div>
            <span className="hidden sm:block text-gray-400">|</span>
            <span className="text-sm text-gray-600">{frontmatter.date}</span>
            <span className="hidden sm:block text-gray-400">|</span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {frontmatter.readTime}
            </span>
          </div>
        </FadeIn>

        {/* Body */}
        <FadeIn delay={0.2}>
          <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black prose-a:text-[#F3B07C] prose-strong:text-black prose-li:marker:text-[#F3B07C]">
            {content}
          </div>
        </FadeIn>

        {/* Footer CTA */}
        <FadeIn delay={0.3} className="border-t-2 border-black pt-8 mt-10 text-center">
          <p className="text-lg font-medium text-black mb-4">
            Want to learn this hands-on?
          </p>
          <Link
            href="/#offerings"
            className="inline-block px-6 py-3 text-base font-bold rounded-full bg-[#F3B07C] text-black border-2 border-black transition-all hover:shadow-md"
          >
            Explore our Programs
          </Link>
        </FadeIn>
      </article>
    </div>
  );
}

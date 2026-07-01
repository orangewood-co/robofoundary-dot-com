"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getPost } from "../posts";

const BlogPostPage = () => {
  const params = useParams<{ slug: string }>();
  const post = getPost(params.slug);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!post) {
    notFound();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Back to blog */}
      <motion.div
        className="max-w-3xl mx-auto w-full mb-8"
        variants={fadeInUp}
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      <article className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <motion.div variants={fadeInUp}>
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#F3B07C] text-black border-2 border-black mb-5">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-8 mb-8 border-b-2 border-black">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F3B07C] border-2 border-black text-sm font-bold text-black">
                {post.authorInitials}
              </span>
              <span className="font-medium text-black">{post.author}</span>
            </div>
            <span className="hidden sm:block text-gray-400">|</span>
            <span className="text-sm text-gray-600">{post.date}</span>
            <span className="hidden sm:block text-gray-400">|</span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </motion.div>

        {/* Body */}
        {post.body.map((section, index) => (
          <motion.section key={index} className="mb-8" variants={fadeInUp}>
            {section.heading && (
              <h2 className="text-2xl font-bold text-black tracking-tight mb-4">
                {section.heading}
              </h2>
            )}

            {section.paragraphs?.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="space-y-2 mb-4">
                {section.bullets.map((bullet, bIndex) => (
                  <li
                    key={bIndex}
                    className="flex items-start gap-3 text-base sm:text-lg text-gray-700"
                  >
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-[#F3B07C] border border-black flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.callout && (
              <div className="border-2 border-black rounded-lg bg-[#272828] text-white p-5 sm:p-6 my-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  {section.callout}
                </p>
              </div>
            )}
          </motion.section>
        ))}

        {/* Footer CTA */}
        <motion.div
          className="border-t-2 border-black pt-8 mt-4 text-center"
          variants={fadeInUp}
        >
          <p className="text-lg font-medium text-black mb-4">
            Want to learn this hands-on?
          </p>
          <Link
            href="/#offerings"
            className="inline-block px-6 py-3 text-base font-bold rounded-full bg-[#F3B07C] text-black border-2 border-black transition-all hover:shadow-md"
          >
            Explore our Programs
          </Link>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default BlogPostPage;

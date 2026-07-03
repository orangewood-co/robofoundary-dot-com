"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

const BlogList = ({ posts }: { posts: BlogPostMeta[] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
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
      {/* Back to home */}
      <motion.div
        className="max-w-7xl mx-auto w-full mb-6"
        variants={headerVariants}
      >
        <Link
          href="/"
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div className="text-center mb-12" variants={headerVariants}>
        <p className="text-sm sm:text-base font-medium text-[#F3B07C] mb-2">
          The RoboFoundary Blog
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-4">
          Notes from the Lab
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Practical robotics writing from the engineers who teach our programs —
          ROS2, computer vision, autonomy, and lessons learned on real hardware.
        </p>
      </motion.div>

      {/* Posts grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full"
        variants={containerVariants}
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={cardVariants} whileHover="hover">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col h-full border-2 border-black rounded-lg overflow-hidden bg-[#F1F1F1] cursor-pointer"
            >
              {/* Cover */}
              <div className="relative h-44 w-full border-b-2 border-black bg-[#F3B07C] flex items-center justify-center">
                <span className="text-5xl font-bold text-black">
                  {post.authorInitials}
                </span>
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-white text-black border-2 border-black">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h2 className="text-xl font-bold mb-2 text-black">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>

                <div className="mt-auto flex items-center justify-between text-xs text-gray-600">
                  <span className="font-medium text-black">{post.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-black">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BlogList;

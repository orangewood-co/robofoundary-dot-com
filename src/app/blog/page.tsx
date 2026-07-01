import { getAllPostsMeta } from "@/lib/blog";
import BlogList from "./BlogList";

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return <BlogList posts={posts} />;
}

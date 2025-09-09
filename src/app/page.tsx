import Image from "next/image";
import Hero from "./components/hero";
import Community from "./components/community";
import Testimonials from "./components/testimonials";
import Offerings from "./components/offerings";
import Footer from "./components/footer";
import PageLayout from "./components/pageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Community />
      <Testimonials />
      <Offerings />
      <Footer />
    </PageLayout>
  );
}

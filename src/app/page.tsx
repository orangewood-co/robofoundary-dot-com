import Image from "next/image";
import Hero from "./components/hero";
import Community from "./components/community";
import Testimonials from "./components/testimonials";
import Offerings from "./components/offerings";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Hero />
    <Community />
    <Testimonials />
    <Offerings />
    <Footer />
    </>
  );
}

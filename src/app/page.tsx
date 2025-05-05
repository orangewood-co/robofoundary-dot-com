import Image from "next/image";
import Hero from "./components/hero";
import Community from "./components/community";
import Testimonials from "./components/testimonials";
import Offerings from "./components/offerings";

export default function Home() {
  return (
    <>
    <Hero />
    <Community />
    <Testimonials />
    <Offerings />
    </>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("community");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Community", href: "#community" },
    { name: "Offerings", href: "#offerings" },
  ];

  return (
    <div id="top" className="min-h-[70vh] bg-[#A29FFF] text-white">
      <div className="flex justify-center w-full py-8">
        <div className="flex items-center justify-between max-w-5xl w-full mx-auto px-5 border-2 border-black rounded-full shadow-sm h-15 bg-white backdrop-blur-sm">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/vega.png"
                alt="vega Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={
                  link.name === "Home"
                    ? "#top"
                    : `#${link.name.toLowerCase().replace(" ", "-")}`
                }
                onClick={(e) => {
                  e.preventDefault();

                  const targetId =
                    link.name === "Home"
                      ? "top"
                      : link.name.toLowerCase().replace(" ", "-");
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-3 py-2 text-lg font-medium rounded-md transition-colors cursor-pointer
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}

            {/* Special styling for Contact button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById("contact");
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-4 py-2 text-lg font-medium rounded-full transition-colors cursor-pointer
                bg-black text-white hover:bg-gray-800"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>

      {/* Hero content */}
      <div className="flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center px-4 py-16">
          <h1 className="text-8xl font-bold mb-6 text-black tracking-tighter">
            Welcome to Vega
          </h1>

          <p className="text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 text-2xl text-black border-3 font-semibold 
            bg-[#BEE813] rounded-full hover:bg-opacity-90 transition-colors 
            shadow-md hover:shadow-lg mb-10"
          >
            Contact Us
          </a>

          {/* Image container with exact same width specifications as navbar */}
        </div>
      </div>
      <div className="flex justify-center w-full bg-[#A29FFF] py-8">
        <div className="max-w-5xl w-full mx-auto px-5 rounded-lg bg-white overflow-hidden shadow-lg">
          <Image
            src="/hero-image.jpg"
            alt="Vega Hero Image"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToNextSection}
            className="rounded-full p-2 border border-black text-black shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
    </div>
  );
};

export default Hero;

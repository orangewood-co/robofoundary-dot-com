"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div id="top" className="bg-white text-black">
      {/* Navbar */}
      <div className="sticky top-0 z-40 flex justify-center w-full py-3 sm:py-4 px-3">
        <div className="flex items-center justify-between max-w-5xl w-full mx-auto px-3 sm:px-5 border-2 border-black rounded-full  h-14 md:h-15 bg-white backdrop-blur-sm">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/vega.png"
                alt="vega Logo"
                width={120}
                height={40}
                className="w-20 sm:w-24 md:w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-black rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-black" />
            ) : (
              <Menu size={22} className="text-black" />
            )}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={
                  link.name === "Home"
                    ? "#top"
                    : `#${link.name.toLowerCase().replace(" ", "-")}`
                }
                onClick={(e) => {
                  const targetId =
                    link.name === "Home"
                      ? "top"
                      : link.name.toLowerCase().replace(" ", "-");
                  handleNavClick(e, targetId);
                }}
                className="px-2 md:px-3 py-1.5 md:py-2 text-base md:text-lg font-medium rounded-md transition-colors cursor-pointer
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}

            {/* Special styling for Contact button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-3 md:px-4 py-1.5 md:py-2 text-base md:text-lg font-medium rounded-full transition-colors cursor-pointer
                bg-black text-white hover:bg-gray-800"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white bg-opacity-98">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 focus:outline-none text-black"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={
                  link.name === "Home"
                    ? "#top"
                    : `#${link.name.toLowerCase().replace(" ", "-")}`
                }
                onClick={(e) => {
                  const targetId =
                    link.name === "Home"
                      ? "top"
                      : link.name.toLowerCase().replace(" ", "-");
                  handleNavClick(e, targetId);
                }}
                className="px-4 py-2 text-xl font-medium w-full text-center rounded-md transition-colors
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="w-full text-center px-4 py-3 text-xl font-medium rounded-full transition-colors
                bg-black text-white hover:bg-gray-800 mt-4"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}

      {/* Hero content */}
      <div className="flex items-center justify-center pt-4 sm:pt-8 md:pt-12">
        <div className="max-w-5xl mx-auto text-center px-4 py-6 sm:py-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-black tracking-tighter">
            Welcome to Vega
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-lg sm:text-xl md:text-2xl text-black border-2 font-semibold 
            bg-[#F3B07C] rounded-full hover:bg-opacity-90 transition-colors 
             mb-6 sm:mb-8"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Image container */}
      <div className="flex justify-center w-full bg-white py-4 sm:py-6">
        <div className="max-w-5xl w-full border-2 border-black mx-auto px-3 sm:px-4 rounded-lg bg-[#F1F1F1] overflow-hidden">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/hero-image.jpg"
              alt="Vega Hero Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Down arrow */}
      <div className="flex justify-center py-6">
        <button
          onClick={scrollToNextSection}
          className="rounded-full p-2 border border-black text-black  hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { useContactModal } from "@/app/hooks/use-contact-modal";
import ContactModal from "./contact";
import HeroVideoCarousel from "./videoCarousel";
// import ImageCarousel from "./imageCarousel";
// import IIT_Jammu from "../../../public/IIT.png";
// import IIT_Gandhinagar from "../../../public/IIT_gandhinagar.png";
// import Workshop from "../../../public/workshop.png";
// import Stanford from "../../../public/stanford.png";
// import Abes from "../../../public/abes.png";
import Vega1 from "../../../public/vega-1.jpg";
import Vega2 from "../../../public/vega-2.jpg";
import Vega3 from "../../../public/vega-3.jpg";
import Vega4 from "../../../public/vega-4.jpg";
import Vega5 from "../../../public/vega-5.jpg";
import ImageCarousel from "./imageCarousel";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, openModal, closeModal } = useContactModal();

  const heroImages = [
    { src: Vega1, alt: "IIT Jammu" },
    { src: Vega2, alt: "IIT Gandhi Nagar" },
    { src: Vega3, alt: "Workshop" },
    { src: Vega4, alt: "Stanford University" },
    { src: Vega5, alt: "Abes Engineering College" },
  ];

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("teach");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Kits", href: "/kits" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (targetId === "contact") {
      openModal(); // Open the contact modal
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  const headingVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.7,
        type: "spring",
        stiffness: 200,
      },
    },
  } satisfies Variants;

  const imageContainerVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  const arrowVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.2,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.5,
      },
    },
  } satisfies Variants;

  return (
    <div id="top" className="bg-white text-black overflow-x-hidden">
      <ContactModal isOpen={isOpen} onClose={closeModal} />
      {/* Navbar */}
      <motion.div
        className="sticky top-0 z-40 flex justify-center w-full py-3 sm:py-4 px-3"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={navbarVariants}
      >
        <div className="flex items-center justify-between max-w-5xl w-full mx-auto px-3 sm:px-4 border-2 border-black rounded-full h-14 md:h-16 bg-white backdrop-blur-sm">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-black">
                Robo<span className="text-[#F3B07C]">Foundary</span>
              </span>
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
            {pageLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + index * 0.1,
                }}
              >
                <Link
                  href={link.href}
                  className="px-2 md:px-3 py-1.5 md:py-2 text-base md:text-lg font-medium rounded-md transition-colors cursor-pointer
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Special styling for Contact button */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-3 md:px-4 py-1.5 md:py-2 text-base md:text-lg font-medium rounded-full transition-colors cursor-pointer
                bg-black text-white hover:bg-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              Contact Us
            </motion.a>
          </nav>
        </div>
      </motion.div>

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
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xl font-medium w-full text-center rounded-md transition-colors
                text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-lg sm:text-xl md:text-2xl text-black  font-semibold 
   rounded-full hover:bg-opacity-90 transition-all duration-300
  hover:scale-105 hover:shadow-md mb-6 sm:mb-8"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}

      {/* Hero content */}
      <div className="flex items-center justify-center pt-4 sm:pt-8 md:pt-12">
        <div className="max-w-5xl mx-auto text-center px-4 py-6 sm:py-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 sm:mb-7 rounded-full border-2 border-black bg-[#F3B07C]/30 text-xs sm:text-sm font-medium text-black"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textVariants}
          >
            Powered by Orangewood Labs · YC W18
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-black tracking-tighter"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={headingVariants}
          >
            Forging Future Roboticists
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textVariants}
          >
            Learn Robotics, AI, ROS2, Computer Vision, and Autonomous Systems
            through real hardware, industry mentors, and hands-on projects — not
            just slides.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            <motion.a
              href="#offerings"
              onClick={(e) => handleNavClick(e, "offerings")}
              className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-xl text-black border-2 border-black font-semibold 
              bg-[#F3B07C] rounded-full transition-all duration-300 hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Programs
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-xl text-black border-2 border-black font-semibold 
              bg-white rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Workshop
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={imageContainerVariants}
          >
            {[
              { value: "500+", label: "Students Trained" },
              { value: "20+", label: "University Partners" },
              { value: "12", label: "Expert Mentors" },
              { value: "100%", label: "Hands-on Learning" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-2 border-black rounded-xl sm:rounded-2xl bg-[#F1F1F1] py-4 sm:py-5 px-2"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-gray-700 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image container */}
      {/* <motion.div
        className="flex justify-center w-full bg-white py-4 sm:py-6"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={imageContainerVariants}
      >
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
      </motion.div> */}

      {/* <HeroVideoCarousel /> */}
      <ImageCarousel images={heroImages} />

      {/* Down arrow */}
      <motion.div
        className="flex justify-center py-6"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <button
          onClick={scrollToNextSection}
          className="rounded-full p-2 border-2 border-black text-black hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;

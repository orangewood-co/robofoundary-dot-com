"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const headingVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.7,
        delay: 0.5,
        ease: "easeOut" 
      }
    }
  };

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
      }
    }
  };

  const imageContainerVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.9,
        delay: 0.6,
        ease: "easeOut" 
      }
    }
  };

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
        repeatDelay: 1.5
      }
    }
  };

  return (
    <div id="top" className="bg-white text-black overflow-x-hidden">
      {/* Navbar */}
      <motion.div 
        className="sticky top-0 z-40 flex justify-center w-full py-3 sm:py-4 px-3"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={navbarVariants}
      >
        <div className="flex items-center justify-between max-w-5xl w-full mx-auto px-3 sm:px-4 border-2 border-black rounded-full h-14 md:h-16 bg-white backdrop-blur-sm">
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
            {navLinks.map((link, index) => (
              <motion.a
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                {link.name}
              </motion.a>
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
                 bg-black text-white mt-4"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}

      {/* Hero content */}
      <div className="flex items-center justify-center pt-4 sm:pt-8 md:pt-12">
        <div className="max-w-5xl mx-auto text-center px-4 py-6 sm:py-12">
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-black tracking-tighter"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={headingVariants}
          >
            Welcome to Vega
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textVariants}
          >
            Vega-Edu is at the forefront of robotics and AI innovation, dedicated to bridging theoretical learning with practical industry applications. We specialize in intelligent robotic systems, machine vision integration, and industrial automation solutions.
          </motion.p>

          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-lg sm:text-xl md:text-2xl text-black border-2 font-semibold 
            bg-[#F3B07C] rounded-full hover:bg-opacity-90 transition-all duration-300
            hover:scale-105 hover:shadow-md mb-6 sm:mb-8"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      {/* Image container */}
      <motion.div 
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
      </motion.div>

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
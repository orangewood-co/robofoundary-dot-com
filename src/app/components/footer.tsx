"use client";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import ContactModal from "./contact";
import { useContactModal } from "../hooks/use-contact-modal";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const { isOpen, openModal, closeModal } = useContactModal();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  const fadeInDelay = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  } satisfies Variants;

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } satisfies Variants;

  const starAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: [0.5, 1.2, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  return (
    <motion.footer
      id="footer"
      className="relative bg-[#F1F1F1] overflow-hidden"
      ref={footerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <ContactModal isOpen={isOpen} onClose={closeModal} />

      {/* Ready to Build Robots CTA */}
      <motion.div
        className="px-4 max-w-6xl mx-auto pt-16 sm:pt-20 text-center"
        variants={fadeIn}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black tracking-tighter mb-4">
          Ready to Build Robots?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Whether you're a student curious about robotics, a professional looking
          to upskill, or a university wanting to bring industry-grade training to
          your campus — there's a track built for you. Real hardware. Real
          engineers. A certificate that means something.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <motion.a
            href="#offerings"
            className="px-6 py-3 text-base sm:text-lg font-bold rounded-full bg-[#F3B07C] text-black border-2 border-black transition-all hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Programs
          </motion.a>
          <motion.button
            onClick={openModal}
            className="px-6 py-3 text-base sm:text-lg font-bold rounded-full bg-black text-white border-2 border-black transition-all hover:bg-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Talk to Us
          </motion.button>
        </div>
      </motion.div>

      {/* Contact bar */}
      <div className="mt-12 sm:mt-16 px-4 max-w-6xl mx-auto">
        {/* Desktop version - horizontal with reversed order */}
        <motion.div
          className="hidden sm:flex items-center justify-between bg-white rounded-full w-full border-2 border-black px-5 py-4 md:h-16"
          variants={scaleIn}
          whileHover={{
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            y: -3,
            transition: { duration: 0.2 },
          }}
        >
          <div className="flex-1 px-4 sm:px-6 py-1 text-left text-base sm:text-lg font-medium text-black">
            Get in touch for inquiries, workshops, or collaborations :)
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openModal(); // Open modal instead of scrolling
            }}
            className="px-4 sm:px-6 py-2 text-base sm:text-lg font-bold rounded-full transition-colors cursor-pointer
      bg-black text-white hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT US NOW!
          </motion.a>
        </motion.div>

        {/* Mobile version - floating button */}
        <motion.div
          className="sm:hidden flex justify-center"
          variants={scaleIn}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-[#F3B07C] blur-sm opacity-70 rounded-xl"
              animate={
                isInView
                  ? {
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 0.75, 0.6],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }
                  : {}
              }
            ></motion.div>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                openModal(); // Open modal instead of scrolling
              }}
              className="relative block px-8 py-3 text-base font-bold rounded-xl bg-black text-white text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile message */}
        <motion.div
          className="sm:hidden text-center mt-4 px-2 text-base font-medium text-black"
          variants={fadeInDelay(0.2)}
        >
          Get in touch for inquiries or collaborations :)
        </motion.div>
      </div>

      {/* Contact information */}
      <motion.div
        className="mt-6 px-4 max-w-6xl mx-auto mb-50"
        variants={staggerContainer}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between gap-4 sm:gap-6 py-4">
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            whileHover={{
              x: [0, -2, 2, -2, 0],
              transition: { duration: 0.5 },
            }}
          >
            <motion.div
              className="w-6 h-6 mr-2 flex items-center justify-center"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <MapPin size={20} className="text-[#F3B07C]" />
            </motion.div>
            <span className="text-black font-medium text-sm sm:text-base">
              Orangewood Labs, A-48 Sector-67, Noida, UP
            </span>
          </motion.div>

          <div className="hidden md:block text-gray-500">|</div>

          <motion.div
            className="flex items-center"
            variants={fadeIn}
            whileHover={{
              x: [0, -2, 2, -2, 0],
              transition: { duration: 0.5 },
            }}
          >
            <motion.div
              className="w-6 h-6 mr-2 flex items-center justify-center"
              whileHover={{
                y: [-2, 2, -2],
                transition: { repeat: 2, duration: 0.3 },
              }}
            >
              <Mail size={20} className="text-[#F3B07C]" />
            </motion.div>
            <span className="text-black font-medium text-sm sm:text-base">
              debdatta.s@orangewood.co
            </span>
          </motion.div>

          <div className="hidden md:block text-gray-500">|</div>

          <motion.div
            className="flex items-center"
            variants={fadeIn}
            whileHover={{
              x: [0, -2, 2, -2, 0],
              transition: { duration: 0.5 },
            }}
          >
            <motion.div
              className="w-6 h-6 mr-2 flex items-center justify-center"
              whileHover={{
                rotate: [-5, 5, -5, 5, 0],
                transition: { duration: 0.4 },
              }}
            >
              <Phone size={20} className="text-[#F3B07C]" />
            </motion.div>
            <span className="text-black font-medium text-sm sm:text-base">
              +91-6295-7059-27
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider with stars */}
      <motion.div
        className="max-w-6xl mx-auto px-4 my-6 sm:my-8"
        variants={fadeInDelay(0.4)}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 flex justify-center -top-14"
            variants={staggerContainer}
          >
            <div className="text-black text-2xl sm:text-4xl flex space-x-2">
              <motion.span variants={starAnimation} custom={0}>
                *
              </motion.span>
              <motion.span variants={starAnimation} custom={1}>
                *
              </motion.span>
              <motion.span variants={starAnimation} custom={2}>
                *
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            className="border-t border-black font-bold mt-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: "center" }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Main footer content */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-6 sm:py-8 mt-10"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Logo */}
          <motion.div
            className="md:col-span-5 flex justify-center sm:justify-start"
            variants={scaleIn}
            whileHover={{
              y: [-3, 3, -3],
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              },
            }}
          >
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-black">
                Robo<span className="text-[#F3B07C]">Foundary</span>
              </span>
              <span className="text-xs sm:text-sm text-gray-600 mt-1">
                Powered by Orangewood Labs · YC W18
              </span>
            </div>
          </motion.div>

          {/* Footer links */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center sm:items-start"
            variants={staggerContainer}
          >
            <p className="font-medium mb-3 sm:mb-4 text-black">Explore:</p>
            <div className="flex flex-col space-y-3">
              <motion.div
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Link
                  href="/blog"
                  className="text-black text-base sm:text-lg hover:text-[#F3B07C] transition-colors"
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Link
                  href="/kits"
                  className="text-black text-base sm:text-lg hover:text-[#F3B07C] transition-colors"
                >
                  Kits
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="md:col-span-3 text-black font-bold flex flex-col items-center sm:items-start"
            variants={fadeInDelay(0.6)}
          >
            <p className="font-medium mb-3 sm:mb-4">Follow Us:</p>
            <div className="flex flex-col space-y-3 sm:items-center sm:space-y-0 sm:flex-row sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.instagram.com/vegaedu_/?g=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-gray-400 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit hover:bg-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Instagram className="mr-2" size={16} />
                  </motion.div>
                  <span className="text-sm sm:text-base">Instagram</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.linkedin.com/company/vega-edu/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-gray-400 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit hover:bg-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Linkedin className="mr-2" size={16} />
                  </motion.div>
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright bar */}
      <motion.div
        className="bg-white py-6 text-black font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 flex items-center justify-center">
              <span className="text-base sm:text-lg">©</span>
            </div>
            <span className="text-sm sm:text-base">
              {new Date().getFullYear()} all rights reserved
            </span>
          </motion.div>

          <div className="flex space-x-3 sm:space-x-6 text-sm sm:text-base">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

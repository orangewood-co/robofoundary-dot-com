"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const partners = [
    "IIT Jammu",
    "NIT Jalandhar",
    "Orangewood Labs",
    "Y Combinator (W18)",
    "Volvo Cars",
    "AstroRobotics",
    "MDU",
    "NID",
  ];

  return (
    <div
      id="partners"
      className="relative py-14 sm:py-16 bg-white overflow-hidden border-y-2 border-black/10"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.p
          className="text-sm sm:text-base font-medium text-gray-600 mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Trusted by universities and built with industry
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {partners.map((partner) => (
            <motion.span
              key={partner}
              className="text-sm sm:text-base font-semibold text-black px-4 py-2 rounded-full border-2 border-black bg-[#F1F1F1]"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, backgroundColor: "#F3B07C" }}
            >
              {partner}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mt-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          We've delivered programs and workshops at leading institutions across
          India, with curricula co-designed by engineers from YC-backed robotics
          companies and global automotive leaders.
        </motion.p>
      </div>
    </div>
  );
};

export default Partners;

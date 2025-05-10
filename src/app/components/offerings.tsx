"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Offerings = () => {
  // Track if the section is in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("footer");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const imageReveal = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    }
  };

  const floatingAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const headingReveal = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      id="offerings" 
      className="relative py-20 bg-[#F1F1F1] overflow-hidden"
      ref={sectionRef}
    >
      {/* Blue accent shape in top-left - positioned behind elements */}
      <motion.div 
        className="absolute inset-0 flex items-start justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* White glow layer */}
        <motion.div
          className="
            absolute
            top-8 left-1/3
            -translate-x-1/2
            md:top-9
            lg:top-18
            flex flex-col items-center
          "
          style={{ pointerEvents: "none" }}
          animate={isInView ? "visible" : "hidden"}
          variants={floatingAnimation}
        >
          <div className="rounded-full w-[350px] h-[350px] bg-white/30 blur-2xl"></div>
          <motion.div
            initial={{ rotate: -5 }}
            animate={isInView ? { rotate: [0, 5, 0, -5, 0] } : { rotate: 0 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/offerings-vector.png"
              alt="Star Background"
              width={200}
              height={180}
              className="object-contain relative z-10 -mt-[300px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        {/* Heading - with adjusted positioning for blue accent visibility */}
        <motion.h1 
          className="text-6xl md:text-9xl font-bold mb-12 text-black tracking-tight relative z-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingReveal}
        >
          OFFERINGS
        </motion.h1>

        {/* Top row - two cards side by side */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* First Card */}
          <motion.div 
            className="flex-1 lg:max-w-[340px]"
            variants={fadeInUp}
          >
            <div className="bg-white rounded-lg p-6 border-2 border-black relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
                Year-Long Semester Courses
              </h2>
              <p className="text-gray-700 font-semibold text-sm mt-auto">
                Credit-based programs with hands-on robotics, AI, and automation
                training, aligned to university curricula for job-ready
                graduates.
              </p>
            </div>
          </motion.div>
          
          {/* Second Card */}
          <motion.div 
            className="flex-[2] bg-[#B7B7B7] rounded-lg p-6 text-black flex flex-col md:flex-row relative overflow-visible"
            variants={fadeInUp}
          >
            <div className="md:w-2/3 pr-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Comprehensive Workshops & In-Depth Training Programs
              </h2>
              <p className="text-black text-sm mt-18">
                We conduct hands-on robotics workshops, bringing academia and
                industry by equipping students with real-world skills over 2 to
                3 months.
              </p>
            </div>
            <motion.div 
              className="md:w-1/3 flex items-end justify-center mt-6 md:mt-0 absolute md:relative right-0 md:right-[-60px] bottom-[-25px] z-10 hidden md:flex"
              variants={imageReveal}
            >
              <motion.div
               
              >
                <Image
                  src="/owl-6.5.png"
                  alt="Robotic Arm"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delayChildren: 0.4 }}
        >
          <motion.div 
            className="relative md:col-span-8 bg-[#272828] text-white rounded-lg p-0 sm:p-0 flex flex-col md:flex-row h-auto overflow-hidden"
            variants={fadeInUp}
          >
            {/* Image container - absolutely positioned to touch the left edge */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-2/5 h-full z-0"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src="/ai.svg"
                alt="Circuit Pattern"
                fill
                className="object-cover object-left h-full w-full"
                priority
              />
            </motion.div>

            {/* Text content - right side with proper spacing and alignment */}
            <div className="relative z-10 md:ml-[40%] w-full p-4 sm:p-6 flex flex-col justify-center">
              <motion.h2 
                className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Value-Added Courses, Placement and Training Programs
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Specialized courses available for university credit, focusing on
                building advanced skills and enhancing employability. These
                programs provide students with valuable experience that
                contributes to job readiness and career development.
              </motion.p>
            </div>
          </motion.div>

          {/* Vega Logo */}
          <motion.div 
            className="md:col-span-4 bg-white rounded-lg p-8 flex items-center justify-center"
            variants={fadeInUp}
          >
            <motion.div 
              className="relative"
              initial={{ rotate: 0 }}
             
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/vega-black.png"
                  alt="Vega Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom down arrow with click functionality */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2
          }}
        >
          <motion.button
            onClick={scrollToNextSection}
            className="rounded-full p-2 border-2 border-black text-black hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Scroll to next section"
            whileHover={{ y: 3 }}
            animate={isInView ? {
              y: [0, 3, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }
            } : {}}
          >
            <ArrowDown className="w-5 h-5 cursor-pointer" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Offerings;
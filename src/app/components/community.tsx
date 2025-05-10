"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Community = () => {
  const controls = useAnimation();
  const backgroundControls = useAnimation();
  const countControlRef = useRef<HTMLHeadingElement>(null);
  const countInView = useInView(countControlRef, { once: true, amount: 1 });
  
  // Use a more precise ref with higher threshold to control animations only when truly visible
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  
  // Counter animation state
  const [count, setCount] = useState(0);
  const targetCount = 999999;

  useEffect(() => {
    if (isInView) {
      // Start main animations
      controls.start("visible");
      backgroundControls.start({
        opacity: 0.7,
        transition: { duration: 1.8 }
      });
      
      // Add a cool floating effect to the background elements
      const floatInterval = setInterval(() => {
        backgroundControls.start({
          y: [0, -15, 0],
          x: [0, 10, 0],
          transition: { duration: 8, ease: "easeInOut", repeat: Infinity }
        });
      }, 200);
      
      return () => {
        clearInterval(floatInterval);
      };
    }
  }, [isInView, controls, backgroundControls]);

  // Counter animation - starts only when counter is in view
  useEffect(() => {
    if (countInView) {
      const duration = 1500; // 1.5 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      // Use nonlinear easing for more dramatic effect
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuart(frame / totalFrames);
        setCount(Math.floor(progress * targetCount));
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
      
      return () => {
        clearInterval(counter);
      };
    }
  }, [countInView, targetCount]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("testimonials");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = [
    { title: "Community Events", icon: "/star_1.png" },
    { title: "Learning Resources", icon: "/black_white-star.png" },
    { title: "Expert Mentoring", icon: "/star_1.png" },
    { title: "Industry Connect", icon: "/black_white-star.png" },
  ];

  // Enhanced animation variants
  const headingVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12, 
        duration: 0.8 
      }
    }
  };

  const countVariants = {
    hidden: { opacity: 0, scale: 0.5, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier
        delay: 0.3
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6
      }
    }
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.7,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: -5, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: [0, 1, 1],
      y: [0, 5, 0, 5, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          delay: 1.6,
        }
      }
    }
  };

  const zigzagVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Format counter with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-amber-50">
      <div
        id="community"
        className="relative pt-12 sm:pt-16 md:pt-20 bg-white overflow-hidden"
        ref={sectionRef}
      >
        {/* Animated floating background elements */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={backgroundControls}
        >
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 opacity-20 blur-[80px] bg-[#F3B07C] rounded-full"
            animate={isInView ? {
              scale: [1, 1.2, 1],
              transition: { 
                duration: 8, 
                repeat: Infinity, 
                repeatType: "reverse"
              }
            } : {}}
          />
          <motion.div 
            className="absolute bottom-40 left-10 w-48 h-48 opacity-20 blur-[60px] bg-purple-300 rounded-full"
            animate={isInView ? {
              scale: [1, 1.3, 1],
              transition: { 
                duration: 7, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: 2
              }
            } : {}}
          />
          <motion.div 
            className="absolute top-1/3 left-1/4 w-32 h-32 opacity-10 blur-[50px] bg-blue-300 rounded-full"
            animate={isInView ? {
              scale: [1, 1.4, 1],
              transition: { 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: 1
              }
            } : {}}
          />
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 z-10">
          {/* Heading Section with staggered animation */}
          <div className="space-y-2 text-left overflow-hidden">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black font-extrabold tracking-tighter"
              initial="hidden"
              animate={controls}
              variants={headingVariants}
            >
              Our Community Members,
            </motion.h1>
            <div className="flex flex-col items-start overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                <motion.h2 
                  ref={countControlRef}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-black leading-none"
                  initial="hidden"
                  animate={controls}
                  variants={countVariants}
                >
                  {formatNumber(count)}
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl font-normal text-black sm:mt-12 md:mt-16"
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.9, duration: 0.5 }
                    }
                  }}
                >
                  and counting...
                </motion.p>
              </div>
            </div>
          </div>

          {/* CTA Button Section with enhanced animation */}
          <motion.div 
            className="mt-6 sm:mt-12"
            initial="hidden"
            animate={controls}
            variants={ctaVariants}
          >
            {/* Desktop version - horizontal pill with gradient animation */}
            <div className="hidden sm:flex sm:flex-row border-2 border-black items-center rounded-full w-full max-w-5xl mx-auto overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#F3B07C] via-[#F3B07C]/80 to-[#F3B07C]"
                animate={isInView ? {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                } : {}}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear",
                }}
              />
              <div className="sm:flex-1 px-6 py-3 text-left text-base md:text-lg font-medium text-black relative z-10">
                Join Now to avail the perks of Vega Education community &gt;&gt;
              </div>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactElement = document.getElementById("contact");
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative z-10 m-2 px-6 py-2 text-lg font-bold rounded-full transition-all cursor-pointer
                bg-black text-white hover:bg-gray-800 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                JOIN NOW!
              </motion.a>
            </div>

            {/* Mobile version - enhanced glow effect */}
            <div className="sm:hidden flex justify-center">
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-[#F3B07C] blur-md rounded-xl"
                  animate={isInView ? {
                    opacity: [0.6, 0.8, 0.6],
                    scale: [1, 1.1, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.5,
                    }
                  } : {}}
                />
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative block px-8 py-3 text-base font-bold rounded-xl
                  bg-black text-white hover:bg-gray-800 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN THE COMMUNITY
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards with 3D hover effect */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12"
            initial="hidden"
            animate={controls}
            variants={cardContainerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#F1F1F1] text-black p-3 sm:p-4 md:p-6 border-2 rounded-xl sm:rounded-2xl flex flex-col items-center transform-gpu"
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 } 
                }}
                style={{ perspective: "1000px" }}
              >
                <p className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base font-medium">
                  {feature.title}
                </p>
                <motion.div 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative border-2 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-7 bg-white"
                  variants={imageVariants}
                  whileHover={{ 
                    rotateY: [0, 10, -10, 0],
                    rotateX: [0, -10, 5, 0],
                    transition: { duration: 1 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={120}
                    height={100}
                    className="object-contain"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white/20 rounded-xl sm:rounded-2xl"
                    animate={isInView ? { 
                      opacity: [0, 0.05, 0.1, 0.05, 0]
                    } : {}}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Down arrow with enhanced animation */}
          <motion.div 
            className="flex justify-center mt-6 sm:mt-8 pb-6"
            initial="hidden"
            animate={controls}
            variants={arrowVariants}
          >
            <button
              onClick={scrollToNextSection}
              className="rounded-full p-2 border-2 border-black text-black hover:bg-gray-100 transition-all duration-300 hover:shadow-md group"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced zigzag divider */}
      <motion.div 
        className="w-full h-auto bg-[#F0F0F0] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={zigzagVariants}
      >  
        <div className="relative w-full">
          <Image
            src="/testimonial.svg"
            alt="Zigzag Pattern"
            width={1800}
            height={150}
            className="w-full h-auto max-h-24 sm:max-h-32 object-fill"
            priority
          />
         
        </div>
      </motion.div>
    </div>
  );
};

export default Community;
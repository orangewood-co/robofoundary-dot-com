"use client";
import Image from "next/image";
import { useState, useRef, useEffect, TouchEvent } from "react";
import { ArrowDown, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Track if we've entered view at least once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("community");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const testimonials = [
    {
      content:
        "The instructor was knowledgeable and approachable, answering questions effectively and providing relevant examples. It was helpful to have one-on-one support when working through more complex aspects of ROS and troubleshooting code.",
      author: "Dr. Kumud Tiwari — Researcher · Program graduate",
    },
    {
      content:
        "Working on a real industry project with Orangewood's engineers changed how I think about my career. The internship certificate opened doors I didn't expect.",
      author: "Rohan Gupta — B.Tech Final Year, IIT Delhi",
    },
    {
      content:
        "My daughter came back from the office visit completely lit up about robotics. The team handled everything — we just showed up and she got an incredible experience.",
      author: "Parent of a Grade 10 student — High School Track",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  // The required minimum distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Touch event handlers
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Determine direction and navigate
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get direction for the animation
  const getDirection = (index: number) => {
    if (index > currentIndex) return 100; // Next item comes from the right
    if (index < currentIndex) return -100; // Previous item comes from the left

    // Handle edge cases (wrapping around)
    if (index === 0 && currentIndex === testimonials.length - 1) return -100;
    if (index === testimonials.length - 1 && currentIndex === 0) return 100;

    return 0;
  };

  // Animation effect for down arrow
  const arrowAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
    hover: {
      y: [0, 3, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      id="testimonials"
      className="relative bg-[#F1F1F1] overflow-hidden"
      ref={sectionRef}
    >
      {/* Container that follows the grid */}
      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Testimonials
        </motion.h1>

        {/* Testimonial Content with Navigation */}
        <div className="relative flex items-center mb-8">
          {/* Previous Button - hidden on small screens */}
          <motion.button
            onClick={goToPrevious}
            className="absolute -left-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-all border-black border-2 hidden sm:block"
            aria-label="Previous testimonial"
            initial={{ opacity: 0, x: -10 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="text-black cursor-pointer" size={24} />
          </motion.button>

          {/* Testimonial Text with AnimatePresence for transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              ref={testimonialRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="text-center px-6 sm:px-16 md:px-24 w-full touch-pan-y"
              initial={{
                opacity: 0,
                x: getDirection(currentIndex),
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -getDirection(currentIndex),
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative overflow-hidden">
                <motion.p
                  className="text-lg text-black mb-6 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>
                <motion.p
                  className="font-medium text-[#F3B07C]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  - {testimonials[currentIndex].author}
                </motion.p>
              </div>

              {/* Mobile swipe indicator - only shown on small screens */}
              <div className="flex justify-center mt-6 sm:hidden">
                <div className="flex items-center ml-2">
                  <ArrowLeft size={12} className="mr-1" />
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Button - hidden on small screens */}
          <motion.button
            onClick={goToNext}
            className="absolute -right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-all border-2 border-black hidden sm:block"
            aria-label="Next testimonial"
            initial={{ opacity: 0, x: 10 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="text-black cursor-pointer" size={24} />
          </motion.button>
        </div>

        {/* Dots indicator with staggered reveal */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-black w-4" : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.1,
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Bottom down arrow with bounce animation */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={scrollToNextSection}
            className="rounded-full p-2 border-2 border-black hover:bg-gray-100 transition-all cursor-pointer"
            aria-label="Scroll to next section"
            initial={arrowAnimation.initial}
            animate={hasAnimated ? arrowAnimation.animate : {}}
            whileHover={arrowAnimation.hover}
          >
            <ArrowDown className="text-black" size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

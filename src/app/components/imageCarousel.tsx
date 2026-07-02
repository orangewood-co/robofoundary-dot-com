"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo, type Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";

interface ImageCarouselProps {
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const imageIndex = Math.abs(page % images.length);

  // Enhanced animation variants with smoother transitions
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 24 : -24,
      opacity: 0,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 0.7, ease: "easeInOut" },
      },
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 0.7, ease: "easeInOut" },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 24 : -24,
      opacity: 0,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 0.7, ease: "easeInOut" },
      },
    }),
  } satisfies Variants;

  // Dot indicator animation variants
  const dotVariants = {
    inactive: { scale: 1 },
    active: {
      scale: [1, 1.3, 1.1],
      transition: {
        duration: 0.5,
        times: [0, 0.6, 1],
      },
    },
  } satisfies Variants;

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);

    // Reset the auto-rotation timer when manually changing slides
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    startAutoRotation();
  };

  const startAutoRotation = () => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        paginate(1);
      }, 5000); // Change slide every 5 seconds
    }
  };

  // Handle swipe gestures
  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50; 

    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? -1 : 1;
      paginate(direction);
    }
  };

  // Initialize auto-rotation and clean up on unmount
  useEffect(() => {
    startAutoRotation();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [page, isPaused]);

  return (
    <motion.div
      className="flex justify-center w-full bg-white py-4 sm:py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      <div className="max-w-5xl w-full border-2 border-black mx-auto rounded-lg bg-[#F1F1F1] overflow-hidden relative shadow-sm">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md">
          {/* Perspective container for 3D effect */}
          <div className="w-full h-full perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 preserve-3d"
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
              >
                {/* Image with overlay for depth */}
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={images[imageIndex].src}
                    alt={images[imageIndex].alt}
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                    priority={imageIndex === 0}
                    quality={90}
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows with enhanced styling */}
          {!isMobile && (
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <motion.button
                onClick={() => paginate(-1)}
                className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-all z-10
                           backdrop-blur-sm border border-white/20 shadow-lg"
                whileHover={{ scale: 1.15, x: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                onClick={() => paginate(1)}
                className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-all z-10
                           backdrop-blur-sm border border-white/20 shadow-lg"
                whileHover={{ scale: 1.15, x: 3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          )}

          {/* Enhanced indicator dots with animations */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
              {images.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    const newDirection = i > imageIndex ? 1 : -1;
                    setPage([i, newDirection]);
                  }}
                  className={`w-2.5 h-2.5 rounded-full border border-white/50 shadow-md ${
                    i === imageIndex
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/70"
                  }`}
                  variants={dotVariants}
                  animate={i === imageIndex ? "active" : "inactive"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Progress bar */}
          {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300/10">
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: isPaused ? 0 : Infinity,
                repeatType: "loop",
              }}
            />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCarousel;

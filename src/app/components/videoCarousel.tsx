import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Add animation variants
const imageContainerVariants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

// Video carousel animation variants
const videoCarouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

// Replace the image container section with this video carousel
const HeroVideoCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Sample video sources - replace with your actual videos
  const videos = [
    "/videos/hero-video-1.mp4",
    "/videos/hero-video-2.mp4",
    "/videos/hero-video-3.mp4"
  ];

  const videoIndex = Math.abs(page % videos.length);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
      }, 8000); // Change slide every 8 seconds
    }
  };

  // Handle swipe gestures
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50; // Minimum distance required for a swipe
    
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
      initial="hidden"
      animate="visible"
      variants={imageContainerVariants}
    >
      <div className="max-w-5xl w-full border-2 border-black mx-auto px-3 sm:px-4 rounded-lg bg-[#F1F1F1] overflow-hidden relative">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {/* Video carousel with swipe gestures */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={videoCarouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videos[videoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Swipe indicator overlay for mobile */}
              {isMobile && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows - only on desktop */}
          {!isMobile && (
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <motion.button
                onClick={() => paginate(-1)}
                className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                onClick={() => paginate(1)}
                className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          )}

          {/* Indicator dots - for both mobile and desktop */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {videos.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  const newDirection = i > videoIndex ? 1 : -1;
                  setPage([i, newDirection]);
                }}
                className={`w-2 h-2 rounded-full ${
                  i === videoIndex ? "bg-white" : "bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroVideoCarousel;
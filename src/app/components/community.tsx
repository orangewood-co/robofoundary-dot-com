"use client";
import { ArrowDown, MessageSquare, Users, Trophy, Target, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useContactModal } from "@/app/hooks/use-contact-modal";
import ContactModal from "./contact";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

const Community = () => {
  const controls = useAnimation();
  const backgroundControls = useAnimation();

  const { isOpen, openModal, closeModal } = useContactModal();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      backgroundControls.start({
        opacity: 0.7,
        transition: { duration: 1.8 },
      });

      const floatInterval = setInterval(() => {
        backgroundControls.start({
          y: [0, -15, 0],
          x: [0, 10, 0],
          transition: { duration: 8, ease: "easeInOut", repeat: Infinity },
        });
      }, 200);

      return () => {
        clearInterval(floatInterval);
      };
    }
  }, [isInView, controls, backgroundControls]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("footer");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = [
    {
      title: "Discord",
      icon: MessageSquare,
      description:
        "Our 24/7 home base. Ask questions, get code help, showcase projects, find teammates, and stay connected with mentors and alumni. Channels for ROS2, computer vision, hardware, and careers.",
    },
    {
      title: "Meetups",
      icon: Users,
      description:
        "In-person and hybrid meetups in Noida, Delhi NCR, and partner university cities. Live robot demos, lightning talks from working engineers, and genuine networking.",
    },
    {
      title: "Hackathons",
      icon: Trophy,
      description:
        "48-hour robotics hackathons with real hardware access, problem statements from industry, prize money, and direct visibility to hiring companies for the top teams.",
    },
    {
      title: "Challenges",
      icon: Target,
      description:
        "Monthly open-ended challenges: vision tasks, control problems, simulation puzzles, and creative builds. The best solutions get featured by our mentors.",
    },
    {
      title: "Open Source",
      icon: Github,
      description:
        "Contribute to community-maintained ROS2 packages, kinematics libraries, and Gazebo environments under the RoboFoundary GitHub organization. Maintainership for active contributors.",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  } satisfies Variants;

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  } satisfies Variants;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  } satisfies Variants;

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
        },
      },
    },
  } satisfies Variants;

  const zigzagVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  return (
    <div className="bg-amber-50">
      <ContactModal isOpen={isOpen} onClose={closeModal} />
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
            animate={
              isInView
                ? {
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }
                : {}
            }
          />
          <motion.div
            className="absolute bottom-40 left-10 w-48 h-48 opacity-20 blur-[60px] bg-purple-300 rounded-full"
            animate={
              isInView
                ? {
                    scale: [1, 1.3, 1],
                    transition: {
                      duration: 7,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 2,
                    },
                  }
                : {}
            }
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-32 h-32 opacity-10 blur-[50px] bg-blue-300 rounded-full"
            animate={
              isInView
                ? {
                    scale: [1, 1.4, 1],
                    transition: {
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1,
                    },
                  }
                : {}
            }
          />
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 z-10">
          {/* Heading Section */}
          <div className="space-y-3 text-left overflow-hidden mb-8 sm:mb-10">
            <motion.p
              className="text-sm sm:text-base font-medium text-[#F3B07C]"
              initial="hidden"
              animate={controls}
              variants={headingVariants}
            >
              Community
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-extrabold tracking-tighter"
              initial="hidden"
              animate={controls}
              variants={headingVariants}
            >
              More than a course
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-gray-700 max-w-2xl"
              initial="hidden"
              animate={controls}
              variants={headingVariants}
            >
              RoboFoundary is a growing community of engineers, students, and
              robotics enthusiasts building together.
            </motion.p>

            {/* Desktop CTA pill */}
            <div className="hidden sm:flex sm:flex-row border-2 border-black items-center rounded-full w-full max-w-5xl mx-auto overflow-hidden relative mt-6">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F3B07C] via-[#F3B07C]/80 to-[#F3B07C]"
                animate={
                  isInView
                    ? {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                    : {}
                }
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="sm:flex-1 px-6 py-3 text-left text-base md:text-lg font-medium text-black relative z-10">
                Join the RoboFoundary community — free for all participants and
                alumni &gt;&gt;
              </div>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                className="relative z-10 m-2 px-6 py-2 text-lg font-bold rounded-full transition-all cursor-pointer
                bg-black text-white hover:bg-gray-800 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                JOIN NOW!
              </motion.a>
            </div>

            {/* Mobile CTA */}
            <div className="sm:hidden flex justify-center mt-4">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-[#F3B07C] blur-md rounded-xl"
                  animate={
                    isInView
                      ? {
                          opacity: [0.6, 0.8, 0.6],
                          scale: [1, 1.1, 1],
                          transition: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2.5,
                          },
                        }
                      : {}
                  }
                />
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
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
          </div>

          {/* Community Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            animate={controls}
            variants={cardContainerVariants}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#F1F1F1] text-black p-5 sm:p-6 border-2 border-black rounded-xl sm:rounded-2xl flex flex-col transform-gpu"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl border-2 border-black bg-white flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Down arrow */}
          <motion.div
            className="flex justify-center mt-8 sm:mt-10 pb-6"
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

      {/* Zigzag divider */}
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

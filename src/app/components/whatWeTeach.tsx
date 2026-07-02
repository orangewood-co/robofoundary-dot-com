"use client";
import { ArrowDown, Cpu, Brain, Eye, Navigation } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const WhatWeTeach = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const scrollToNextSection = () => {
    document
      .getElementById("path")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } satisfies Variants;

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  } satisfies Variants;

  const pillars = [
    {
      icon: Cpu,
      title: "Robotics",
      description:
        "Master the physical foundation of intelligent machines — robotic arm anatomy, actuators, end-effectors, sensors, kinematics, Jacobians, and trajectory planning — applied on Orangewood's 6-DOF collaborative robotic arms.",
    },
    {
      icon: Brain,
      title: "AI & Agents",
      description:
        "Go beyond chatbots. Learn how LLMs control physical robots through platforms like Orangewood's RoboGPT — AI agent frameworks, tool use, multi-agent orchestration, and LLM-driven motion planning on real hardware.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Teach machines to see. Master OpenCV and MediaPipe, real-time object detection, pose estimation, SLAM, depth sensing, and visual servoing — perception pipelines that run on edge devices and feed live data into robots.",
    },
    {
      icon: Navigation,
      title: "Autonomous Systems",
      description:
        "Bring it all together. Learn ROS2 from the ground up — nodes, topics, services, transforms, URDF. Simulate in Gazebo, plan motion with MoveIt, fuse sensor data, and deploy full-stack autonomous systems.",
    },
  ];

  return (
    <div
      id="teach"
      className="relative py-16 sm:py-20 bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.p
          className="text-sm sm:text-base font-medium text-[#F3B07C] mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          What We Teach
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Four pillars, fundamentals to deployment
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Four pillars that take you from fundamentals to deploying intelligent
          machines in real industry environments.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="bg-[#F1F1F1] border-2 border-black rounded-2xl p-6 sm:p-8 flex flex-col"
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl border-2 border-black bg-[#F3B07C] flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-black">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={scrollToNextSection}
            className="rounded-full p-2 border-2 border-black text-black hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeTeach;

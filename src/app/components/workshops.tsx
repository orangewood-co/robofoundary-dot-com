"use client";
import { ArrowDown, GraduationCap, Building2 } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Workshops = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const scrollToNextSection = () => {
    document
      .getElementById("mentors")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const university = {
    icon: GraduationCap,
    label: "University",
    items: [
      {
        title: "AI for Engineers",
        description:
          "Bridge academic AI theory and real-world application — ML fundamentals, neural networks, computer vision basics, and how AI integrates with robotic systems, with live robot demos.",
        meta: "1 day–3 months · Engineering students, all branches",
      },
      {
        title: "Introduction to Robotics",
        description:
          "The perfect first exposure. What is a robot, types of robots, how robots move, sensors and actuators, robotic arm anatomy, and basic Python control — capped with a live demo on Orangewood's arms.",
        meta: "1–2 days · Freshers, beginners",
      },
      {
        title: "ROS2 Workshop",
        description:
          "The industry-standard framework, hands-on. ROS2 fundamentals plus TF2 transforms, URDF modeling, Gazebo simulation, RViz, and MoveIt motion planning. Leave with a working ROS2 project.",
        meta: "2 days intensive · Basic Python · Prereq: Level 1",
      },
      {
        title: "Computer Vision Workshop",
        description:
          "From pixels to perception. OpenCV fundamentals, MediaPipe, real-time object detection, SLAM concepts, depth sensing, and visual servoing demonstrated on a live robotic arm.",
        meta: "1 day · Students with Python basics",
      },
    ],
  };

  const corporate = {
    icon: Building2,
    label: "Corporate",
    items: [
      {
        title: "AI Agents",
        description:
          "LLMs meet the real world. Train your team on AI agent frameworks, tool use and function calling, multi-agent orchestration, LLM-driven control (including RoboGPT), and pipeline integration.",
        meta: "1–3 days · On-site available · Software & automation teams",
      },
      {
        title: "Industrial AI",
        description:
          "AI applied to the factory floor — quality inspection, predictive maintenance, anomaly detection, and sensor fusion. Custom curriculum built around your actual production data and equipment.",
        meta: "3–5 days · Custom scoping · Manufacturing & ops engineering",
      },
      {
        title: "Robotics Automation",
        description:
          "From cobot safety standards to full ROS2-based automation pipelines. Your engineers program pick-and-place routines, integrate robots into production line logic, and learn deployment best practices.",
        meta: "2–4 days · Industrial engineering & automation teams",
      },
    ],
  };

  const renderGroup = (group: typeof university) => {
    const Icon = group.icon;
    return (
      <motion.div variants={fadeInUp}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl border-2 border-black bg-[#F3B07C] flex items-center justify-center">
            <Icon className="w-5 h-5 text-black" />
          </div>
          <h2 className="text-2xl font-bold text-black">{group.label}</h2>
        </div>
        <div className="space-y-4">
          {group.items.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white border-2 border-black rounded-2xl p-5 sm:p-6"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="text-xs font-medium text-gray-500">{item.meta}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div
      id="workshops"
      className="relative py-16 sm:py-20 bg-[#F1F1F1] overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.p
          className="text-sm sm:text-base font-medium text-[#F3B07C] mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Workshops
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Standalone, bookable, flexible
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Bookable as one-day intensives or multi-week programs. Delivered
          on-campus, at your office, or hybrid.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {renderGroup(university)}
          {renderGroup(corporate)}
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

export default Workshops;

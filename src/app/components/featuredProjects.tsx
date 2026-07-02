"use client";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const scrollToNextSection = () => {
    document
      .getElementById("offerings")
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  } satisfies Variants;

  const projects = [
    {
      title: "Pick & Place Robot",
      description:
        "A fully autonomous pick-and-place system on an Orangewood arm — OpenCV object detection, custom MoveIt trajectory planning, and grip control, tested on a simulated warehouse conveyor line.",
      tags: ["ROS2", "OpenCV", "MoveIt", "Python"],
    },
    {
      title: "AI Vision System",
      description:
        "A real-time object classification and 6D pose estimation pipeline using MediaPipe and a custom-trained YOLO model. Runs on-edge with sub-50ms latency on a Jetson Nano.",
      tags: ["YOLO", "MediaPipe", "Jetson", "ROS2"],
    },
    {
      title: "Warehouse Robot",
      description:
        "A complete warehouse navigation and retrieval agent — SLAM-based mapping, autonomous path planning with Nav2, obstacle avoidance, and a collaborative arm for item pick-up.",
      tags: ["Nav2", "SLAM", "ROS2", "Gazebo"],
    },
    {
      title: "RoboGPT Demo",
      description:
        "Natural-language robot control on Orangewood's RoboGPT platform. Describe a task in plain English and the LLM agent interprets intent, generates a motion sequence, and executes it on a real arm.",
      tags: ["RoboGPT", "LLM", "Python", "API"],
    },
    {
      title: "Physical AI Projects",
      description:
        "Student capstones deploying trained AI models on physical systems — quality inspection arms, autonomous delivery bots, gesture-controlled manipulators, and vision-guided sorting systems.",
      tags: ["Physical AI", "Capstone", "Industry deployment"],
    },
    {
      title: "Open-Source Contributions",
      description:
        "Students contribute back: Python libraries for forward kinematics, Jacobian computation, and inverse kinematics for n-DOF robots, plus Gazebo environments and ROS2 packages — all on GitHub.",
      tags: ["Open Source", "GitHub", "Kinematics"],
    },
  ];

  return (
    <div
      id="projects"
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
          Featured Projects
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Building is the curriculum
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Every program ends with a real project. Here's a sample of what our
          students and teams have shipped.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white border-2 border-black rounded-2xl p-6 flex flex-col"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F3B07C]/30 text-black border border-black/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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

export default FeaturedProjects;

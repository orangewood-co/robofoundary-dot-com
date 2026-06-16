"use client";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LearningPath = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const scrollToNextSection = () => {
    document
      .getElementById("why")
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
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const levels = [
    {
      level: "Level 1",
      title: "Foundations: Programming & Tools",
      tags: ["Python", "Linux", "Git"],
      description:
        "Every roboticist starts here. Master Python for robotics — control loops, data handling, and hardware interfacing. Get comfortable in Linux, learn Git and version control. No prior experience needed.",
    },
    {
      level: "Level 2",
      title: "Robotics Core: ROS2 & Simulation",
      tags: ["ROS2", "Simulation", "Robot Control"],
      description:
        "Enter the industry-standard framework. Learn ROS2 fundamentals — nodes, topics, services, TF2. Model robots with URDF, simulate in Gazebo, visualize in RViz, and command real robot joints with MoveIt.",
    },
    {
      level: "Level 3",
      title: "AI Systems: Vision & Intelligence",
      tags: ["Computer Vision", "AI Models", "AI Agents"],
      description:
        "Give your robot a brain. Implement computer vision with OpenCV and MediaPipe, deploy object detection, and implement SLAM. Then layer on AI motion planning, LLM-driven control, and Orangewood's RoboGPT platform.",
    },
    {
      level: "Level 4",
      title: "Deployment: Industry-Ready",
      tags: ["Physical AI", "Capstone Projects", "Industry Deployment"],
      description:
        "The final forge. Apply everything to a real industry problem on real hardware in Orangewood's lab. Build and deploy a Physical AI system end-to-end and present your capstone to professional engineers.",
    },
  ];

  return (
    <div
      id="path"
      className="relative py-16 sm:py-20 bg-[#F1F1F1] overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.p
          className="text-sm sm:text-base font-medium text-[#F3B07C] mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Learning Path
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          A structured four-level journey
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          From programming fundamentals to deploying Physical AI in real industry
          environments. Each level builds on the last — no gaps, no guesswork.
        </motion.p>

        <motion.div
          className="space-y-5 sm:space-y-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {levels.map((level, index) => (
            <motion.div
              key={level.level}
              className="bg-white border-2 border-black rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-black bg-[#F3B07C] flex items-center justify-center text-2xl sm:text-3xl font-bold text-black">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  {level.level}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  {level.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {level.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#F1F1F1] text-black border border-black/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {level.description}
                </p>
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

export default LearningPath;

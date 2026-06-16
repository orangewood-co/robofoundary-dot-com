"use client";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyRobofoundry = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const scrollToNextSection = () => {
    document
      .getElementById("projects")
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

  const reasons = [
    {
      title: "Hands-on Learning",
      description:
        "Theory without practice is trivia. Every concept is immediately applied on real hardware — Orangewood's industrial robotic arms, real sensors, real edge computers. If you can't demo it, you haven't learned it.",
    },
    {
      title: "Industry Mentors",
      description:
        "Our mentors aren't career academics. They're engineers actively building robots today — at Orangewood Labs (YC W18), Volvo Cars, AstroRobotics, and beyond. One-on-one doubt sessions, code reviews, and career guidance.",
    },
    {
      title: "Real Robots",
      description:
        "Most courses end at simulation. Ours goes further — you work directly with Orangewood's 6-DOF collaborative arms, industry-grade sensors, vision systems, and the RoboGPT AI platform deployed in actual factories.",
    },
    {
      title: "Open Source Projects",
      description:
        "Everything you build lives on GitHub. Our students have published kinematics libraries, Gazebo simulation environments, and ROS2 packages used by the wider community. Your portfolio is working code recruiters can run.",
    },
    {
      title: "Career Focused",
      description:
        "Every program is designed backwards from employability. Earn an internship certificate from a YC-backed company, get engineer recommendations, direct referrals, and a demo day in front of hiring companies.",
    },
  ];

  return (
    <div
      id="why"
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
          Why RoboFoundry
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Not another video course
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          We put real robots in your hands and active industry engineers at your
          side. Here's what makes us different.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-[#F1F1F1] border-2 border-black rounded-2xl p-6 flex flex-col"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <span className="text-3xl sm:text-4xl font-bold text-[#F3B07C] mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                {reason.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {reason.description}
              </p>
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

export default WhyRobofoundry;

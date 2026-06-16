"use client";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Mentors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const scrollToNextSection = () => {
    document
      .getElementById("testimonials")
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

  const mentors = [
    {
      initials: "AB",
      name: "Aditya Bhatia",
      role: "Co-Founder & CPO, Orangewood Labs (YC W18)",
      bio: "M.Des Industrial Design from NID · B.Tech Mechanical from MDU. Co-built Orangewood from a basement startup into a YC-backed AI robotics company. Leads product and RoboGPT development.",
    },
    {
      initials: "VD",
      name: "Vishisht Dhingra",
      role: "AD & ADAS System Design Engineer, Volvo Cars",
      bio: "Ex-Bosch USA · Ex-FCA. M.S. Automotive Systems Engineering, University of Michigan. Expert in advanced driver-assistance systems, vehicle dynamics, and autonomous system architecture.",
    },
    {
      initials: "YM",
      name: "Yuvraj Mehta",
      role: "Robotics Software Engineer, Orangewood Labs",
      bio: "B.Tech from NIT Jalandhar. Specializes in ROS, SLAM, computer vision (OpenCV, MediaPipe), and robot simulation in Gazebo.",
    },
    {
      initials: "RB",
      name: "Rudranil Bose",
      role: "Robotics Software Engineer, Orangewood Labs",
      bio: "Full-stack robotics software engineer working on the core platform powering AI-driven collaborative robotic arms and the RoboGPT platform.",
    },
    {
      initials: "JN",
      name: "Jiya Nagpal",
      role: "Robotics Engineer, Orangewood Labs",
      bio: "Works on robotics automation and deployment. Passionate about making robotics accessible through hands-on teaching and real-world project exposure.",
    },
    {
      initials: "PS",
      name: "Pushkar Shinde",
      role: "Robotics Software Engineer, AstroRobotics.io",
      bio: "Built Python libraries for forward kinematics, Jacobian, and IK for n-DOF robots. Experience with Kuka iiwa arm control, trajectory planning, and gravity compensation via the Recursive Newton-Euler Algorithm.",
    },
  ];

  return (
    <div
      id="mentors"
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
          Our Mentors
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Engineers building robots today
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Not career academics — active engineers from Orangewood Labs, Volvo
          Cars, and AstroRobotics who do the exact job you're training for.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.name}
              className="bg-[#F1F1F1] border-2 border-black rounded-2xl p-6 flex flex-col"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full border-2 border-black bg-[#F3B07C] flex items-center justify-center text-lg font-bold text-black flex-shrink-0">
                  {mentor.initials}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black leading-tight">
                    {mentor.name}
                  </h2>
                  <p className="text-xs text-gray-600 mt-0.5">{mentor.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {mentor.bio}
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

export default Mentors;

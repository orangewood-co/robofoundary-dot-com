"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Linkedin, Twitter, Github, Instagram } from "lucide-react";

interface Educator {
  id: number;
  name: string;
  role: string;
  initials: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    [key: string]: string | undefined;
  };
}

const educators: Educator[] = [
  {
    id: 1,
    name: "Aditya Bhatia",
    role: "Co-Founder & CPO, Orangewood Labs (YC W18)",
    initials: "AB",
    bio: "M.Des Industrial Design from NID · B.Tech Mechanical from MDU. Co-built Orangewood from a basement startup into a YC-backed AI robotics company. Leads product and RoboGPT development.",
    expertise: ["Product", "Industrial Design", "RoboGPT"],
    social: {},
  },
  {
    id: 2,
    name: "Vishisht Dhingra",
    role: "AD & ADAS System Design Engineer, Volvo Cars",
    initials: "VD",
    bio: "Ex-Bosch USA · Ex-FCA. M.S. Automotive Systems Engineering, University of Michigan. Expert in advanced driver-assistance systems, vehicle dynamics, and autonomous system architecture.",
    expertise: ["ADAS", "Vehicle Dynamics", "Autonomous Systems"],
    social: {},
  },
  {
    id: 3,
    name: "Yuvraj Mehta",
    role: "Robotics Software Engineer, Orangewood Labs",
    initials: "YM",
    bio: "B.Tech from NIT Jalandhar. Specializes in ROS, SLAM, computer vision (OpenCV, MediaPipe), and robot simulation in Gazebo.",
    expertise: ["ROS", "SLAM", "Computer Vision"],
    social: {},
  },
  {
    id: 4,
    name: "Rudranil Bose",
    role: "Robotics Software Engineer, Orangewood Labs",
    initials: "RB",
    bio: "Full-stack robotics software engineer working on the core platform powering AI-driven collaborative robotic arms and the RoboGPT platform.",
    expertise: ["Full-stack Robotics", "Collaborative Arms", "RoboGPT"],
    social: {},
  },
  {
    id: 5,
    name: "Jiya Nagpal",
    role: "Robotics Engineer, Orangewood Labs",
    initials: "JN",
    bio: "Works on robotics automation and deployment. Passionate about making robotics accessible through hands-on teaching and real-world project exposure.",
    expertise: ["Automation", "Deployment", "Teaching"],
    social: {},
  },
  {
    id: 6,
    name: "Pushkar Shinde",
    role: "Robotics Software Engineer, AstroRobotics.io",
    initials: "PS",
    bio: "Built Python libraries for forward kinematics, Jacobian, and IK for n-DOF robots. Experience with Kuka iiwa arm control, trajectory planning, and gravity compensation via the Recursive Newton-Euler Algorithm.",
    expertise: ["Kinematics", "Trajectory Planning", "Kuka iiwa"],
    social: {},
  },
];

const SocialIcon = ({
  platform,
  url,
}: {
  platform: string;
  url: string | undefined;
}) => {
  if (!url) return null;

  switch (platform) {
    case "linkedin":
      return <Linkedin className="w-5 h-5" />;
    case "twitter":
      return <Twitter className="w-5 h-5" />;
    case "github":
      return <Github className="w-5 h-5" />;
    case "instagram":
      return <Instagram className="w-5 h-5" />;
    default:
      return null;
  }
};

const OurEducators = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedEducator, setSelectedEducator] = useState<Educator | null>(
    null
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const educatorCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const expertiseTagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Back to home */}
      <motion.div
        className="max-w-7xl mx-auto w-full mb-6"
        variants={headerVariants}
      >
        <Link
          href="/"
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div className="text-center mb-12" variants={headerVariants}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-4">
          Our Mentors
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Meet the engineers behind RoboFoundry's programs — active builders from
          Orangewood Labs, Volvo Cars, and AstroRobotics who do the exact job
          you're training for.
        </p>
      </motion.div>

      {selectedEducator ? (
        // Educator Details View
        <motion.div
          className="max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col md:flex-row gap-8 border-2 border-black rounded-lg p-6 bg-[#F1F1F1]">
            <button
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
              onClick={() => setSelectedEducator(null)}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="w-full md:w-1/3">
              <div className="relative h-72 w-full md:h-96 border-2 border-black rounded-md overflow-hidden bg-[#F3B07C] flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold text-black">
                  {selectedEducator.initials}
                </span>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold">{selectedEducator.name}</h2>
              <p className="text-xl text-gray-700 mb-4">
                {selectedEducator.role}
              </p>

              <p className="text-gray-800 mb-6">{selectedEducator.bio}</p>

              <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedEducator.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F3B07C] text-black rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {Object.entries(selectedEducator.social).map(
                  ([platform, url]) => {
                    if (!url) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 hover:text-black border border-gray-300 rounded-full hover:border-black transition-colors"
                      >
                        <SocialIcon platform={platform} url={url} />
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        // Educators Grid
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {educators.map((educator) => (
            <motion.div
              key={educator.id}
              className="border-2 border-black rounded-lg overflow-hidden bg-[#F1F1F1] cursor-pointer hover:shadow-lg transition-all duration-300"
              variants={educatorCardVariants}
              whileHover="hover"
              onClick={() => setSelectedEducator(educator)}
            >
              <div className="relative h-64 w-full border-b-2 border-black bg-[#F3B07C] flex items-center justify-center">
                <span className="text-6xl font-bold text-black">
                  {educator.initials}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold mb-1">{educator.name}</h2>
                <p className="text-gray-700 mb-3 text-sm">{educator.role}</p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {educator.expertise.slice(0, 2).map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-2 py-1 bg-[#F3B07C] text-black rounded-full text-xs"
                      variants={expertiseTagVariants}
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {educator.expertise.length > 2 && (
                    <motion.span
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                      variants={expertiseTagVariants}
                    >
                      +{educator.expertise.length - 2}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default OurEducators;

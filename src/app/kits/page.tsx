"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { useContactModal } from "@/app/hooks/use-contact-modal";
import ContactModal from "../components/contact";

interface Kit {
  id: number;
  name: string;
  tagline: string;
  price: string;
  level: string;
  initials: string;
  features: string[];
  options?: string[];
  note?: string;
  cta?: string;
  dark?: boolean;
}

const kits: Kit[] = [
  {
    id: 1,
    name: "LeRobot Research Kit",
    tagline:
      "An affordable open-source robotic arm for learning manipulation, AI data collection, and reinforcement learning.",
    price: "Starting from ₹XX,XXX",
    level: "Beginner",
    initials: "LR",
    features: [
      "2× LeRobot robotic arms",
      "Camera for vision-based manipulation",
      "Open-source Hugging Face LeRobot support",
      "Pick-and-place & imitation learning projects",
    ],
  },
  {
    id: 2,
    name: "Biped Humanoid Kit",
    tagline:
      "Explore humanoid walking, balance, inverse kinematics, and gait planning using a 17-DOF biped robot.",
    price: "Starting from ₹XX,XXX",
    level: "Intermediate",
    initials: "BH",
    dark: true,
    features: [
      "17-DOF programmable humanoid",
      "Servo-based motion control",
      "Walking & balance algorithms",
      "Kinematics learning resources",
    ],
    options: ["With servos", "Without servos"],
  },
  {
    id: 3,
    name: "JetBot AI Vision Kit",
    tagline:
      "Build autonomous AI robots using NVIDIA Jetson for computer vision and edge AI applications.",
    price: "Starting from ₹XX,XXX",
    level: "Intermediate",
    initials: "JB",
    features: [
      "NVIDIA Jetson Nano platform",
      "HD AI camera",
      "Autonomous navigation",
      "Object detection & AI inference projects",
    ],
    options: ["Without Jetson", "With Jetson (2GB / 4GB)"],
  },
  {
    id: 4,
    name: "Quadruped Robotics Kit",
    tagline:
      "Learn legged locomotion, gait generation, and autonomous movement using a 12-DOF robotic dog.",
    price: "Starting from ₹XX,XXX",
    level: "Intermediate",
    initials: "WG",
    features: [
      "12-DOF quadruped robot",
      "ESP32 / Raspberry Pi compatible",
      "Multiple gait modes",
      "Motion planning tutorials",
    ],
  },
  {
    id: 5,
    name: "Reachy Mini AI Kit",
    tagline:
      "A desktop humanoid platform for AI interaction, vision, speech, and robotics research.",
    price: "Starting from ₹XX,XXX",
    level: "Advanced",
    initials: "RM",
    dark: true,
    features: [
      "Expressive humanoid head",
      "AI vision & speech integration",
      "Python SDK",
      "Human-robot interaction projects",
    ],
    options: [
      "Reachy Mini Lite — $299 + shipping",
      "Reachy Mini Wireless — $449 + shipping",
    ],
  },
  {
    id: 6,
    name: "NOVA EDU Humanoid Kit",
    tagline:
      "A full-featured educational humanoid robot designed for AI, robotics, and autonomous behavior programming.",
    price: "Starting from ₹XX,XXX",
    level: "Advanced",
    initials: "NE",
    features: [
      "Multi-DOF humanoid platform",
      "AI-enabled vision system",
      "Motion programming interface",
      "Classroom-ready curriculum",
    ],
  },
  {
    id: 7,
    name: "Robotic Hand AI Kit",
    tagline:
      "Program a dexterous robotic hand for grasping, gesture recognition, and manipulation experiments.",
    price: "Starting from ₹XX,XXX",
    level: "Advanced",
    initials: "RH",
    features: [
      "Programmable robotic hand",
      "micro:bit controller",
      "Multiple grasp patterns",
      "AI & control programming exercises",
    ],
    options: ["With micro:bit", "Without micro:bit"],
  },
  {
    id: 8,
    name: "Drone Developer Kit",
    tagline:
      "Develop autonomous drones for aerial robotics, mapping, AI vision, and navigation.",
    price: "Starting from ₹XX,XXX",
    level: "Advanced",
    initials: "DK",
    dark: true,
    features: [
      "Developer-grade UAV platform",
      "Flight controller & SDK",
      "AI vision integration",
      "Autonomous flight development tools",
    ],
  },
  {
    id: 9,
    name: "Small Robot Dataset Starter Kit",
    tagline:
      "A complete multi-robot research bundle designed for AI, robotics, computer vision, locomotion, and manipulation.",
    price: "Starting from ₹XX,XXX",
    level: "Research",
    initials: "SR",
    cta: "Request Quote",
    features: [
      "2× LeRobot Research Arms",
      "17-DOF Biped Humanoid",
      "JetBot AI Vision Robot",
      "WAVEGO 12-DOF Quadruped",
      "Reachy Mini AI Humanoid",
      "NOVA EDU Humanoid",
      "AI Robotic Hand",
      "Drone Developer Kit",
    ],
    note: "Ideal for: Robotics Labs • AI Research • Universities • Centers of Excellence",
  },
];

const Kits = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, openModal, closeModal } = useContactModal();

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
  } satisfies Variants;

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
  } satisfies Variants;

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <ContactModal isOpen={isOpen} onClose={closeModal} />

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
        <p className="text-sm sm:text-base font-medium text-[#F3B07C] mb-2">
          Shop
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-4">
          Robotics Kits
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Hardware kits designed by our engineers to take you from your first
          sensor to a fully autonomous robot. Real components, real projects,
          real learning.
        </p>
      </motion.div>

      {/* Kits grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full"
        variants={containerVariants}
      >
        {kits.map((kit) => (
          <motion.div
            key={kit.id}
            className={`flex flex-col h-full border-2 border-black rounded-lg overflow-hidden ${
              kit.dark ? "bg-[#272828] text-white" : "bg-[#F1F1F1] text-black"
            }`}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            {/* Cover */}
            <div className="relative h-40 w-full border-b-2 border-black bg-[#F3B07C] flex items-center justify-center">
              <span className="text-5xl font-bold text-black">
                {kit.initials}
              </span>
              <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-white text-black border-2 border-black">
                {kit.level}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-xl font-bold mb-2">{kit.name}</h2>
              <p
                className={`text-sm mb-4 ${
                  kit.dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {kit.tagline}
              </p>

              <ul className="space-y-2 mb-4">
                {kit.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      kit.dark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    <Check className="w-4 h-4 text-[#F3B07C] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {kit.options && kit.options.length > 0 && (
                <div className="mb-4">
                  <p
                    className={`text-xs font-bold uppercase tracking-wide mb-2 ${
                      kit.dark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Options
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {kit.options.map((option) => (
                      <span
                        key={option}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                          kit.dark
                            ? "border-gray-600 text-gray-200"
                            : "border-gray-400 text-gray-700"
                        }`}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {kit.note && (
                <p
                  className={`text-xs mb-4 ${
                    kit.dark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {kit.note}
                </p>
              )}

              <div className="mt-auto">
                <motion.button
                  onClick={openModal}
                  className="w-full px-5 py-2.5 text-sm font-bold rounded-full bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {kit.cta ?? "Learn More"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bulk / custom CTA */}
      <motion.div
        className="max-w-7xl mx-auto w-full mt-12"
        variants={headerVariants}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-black rounded-lg bg-white px-6 py-6">
          <p className="text-base sm:text-lg font-medium text-black text-center sm:text-left">
            Need kits for an entire cohort or a custom bill of materials?
          </p>
          <motion.button
            onClick={openModal}
            className="px-6 py-3 text-base font-bold rounded-full bg-[#F3B07C] text-black border-2 border-black transition-all hover:shadow-md cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Talk to Us
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Kits;

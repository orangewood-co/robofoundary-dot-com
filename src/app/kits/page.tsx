"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  dark?: boolean;
}

const kits: Kit[] = [
  {
    id: 1,
    name: "RoboStarter Kit",
    tagline: "The perfect first step into robotics — no experience needed.",
    price: "₹2,499",
    level: "Beginner",
    initials: "RS",
    features: [
      "Microcontroller board + USB cable",
      "Assorted sensors (ultrasonic, IR, light)",
      "Motors, wheels & chassis",
      "Guided project workbook",
    ],
  },
  {
    id: 2,
    name: "Vision Explorer Kit",
    tagline: "Build camera-powered robots with classic computer vision.",
    price: "₹4,999",
    level: "Intermediate",
    initials: "VE",
    dark: true,
    features: [
      "Single-board computer",
      "USB camera module",
      "Pan-tilt servo mount",
      "OpenCV project guide",
    ],
  },
  {
    id: 3,
    name: "ROS2 Rover Kit",
    tagline: "A mobile robot that runs real ROS2 out of the box.",
    price: "₹8,999",
    level: "Intermediate",
    initials: "RR",
    features: [
      "4-wheel drive rover platform",
      "Lidar sensor for mapping",
      "Pre-flashed ROS2 controller",
      "SLAM & navigation tutorials",
    ],
  },
  {
    id: 4,
    name: "Arm Builder Kit",
    tagline: "Assemble and program your own desktop robotic arm.",
    price: "₹12,499",
    level: "Advanced",
    initials: "AB",
    features: [
      "5-DOF servo robotic arm",
      "Precision gripper attachment",
      "Inverse kinematics library",
      "Pick-and-place project series",
    ],
  },
  {
    id: 5,
    name: "Autonomy Pro Kit",
    tagline: "Everything you need to build a self-navigating robot.",
    price: "₹18,999",
    level: "Advanced",
    initials: "AP",
    dark: true,
    features: [
      "High-torque motor drivetrain",
      "Depth camera + IMU",
      "Onboard compute module",
      "Autonomous navigation stack",
    ],
  },
  {
    id: 6,
    name: "Classroom Bundle",
    tagline: "Ten starter kits plus a facilitator guide for institutions.",
    price: "₹22,999",
    level: "Institutions",
    initials: "CB",
    features: [
      "10× RoboStarter Kits",
      "Facilitator teaching guide",
      "Lesson plans & assessments",
      "Priority support from our team",
    ],
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
  };

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

              <ul className="space-y-2 mb-6">
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

              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="text-2xl font-bold">{kit.price}</span>
                <motion.button
                  onClick={openModal}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Buy Now
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

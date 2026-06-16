"use client";
import { ArrowDown, Check } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContactModal } from "@/app/hooks/use-contact-modal";
import ContactModal from "./contact";

const Offerings = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { isOpen, openModal, closeModal } = useContactModal();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("workshops");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headingReveal = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const institutional = [
    {
      tag: "Program A",
      title: "Year-Long Semester Courses",
      audience: "For Universities",
      description:
        "Credit-based programs with hands-on robotics, AI, and automation training, fully aligned to university curricula. Includes faculty coordination, lab setup guidance, assessments, and outcome reports.",
      meta: ["Universities & colleges", "On-campus + hybrid", "1–2 semesters"],
      dark: false,
    },
    {
      tag: "Program B",
      title: "Comprehensive Workshops & In-Depth Training",
      audience: "1–10 Days",
      description:
        "Intensive training programs bringing academia and industry together. Students move from fundamentals to building complete robotic systems — weekly hands-on labs, real hardware access, mentor check-ins, and a final project.",
      meta: ["Universities, student groups", "Hybrid", "2–3 months"],
      dark: true,
    },
    {
      tag: "Program C",
      title: "Value-Added Courses, Placement & Faculty Training",
      audience: "For Universities",
      description:
        "Specialized courses available for university credit, focused on employability. Includes placement-oriented training, resume and portfolio building, mock technical interviews, and dedicated faculty training programs.",
      meta: ["Students + faculty", "Flexible", "Custom"],
      dark: false,
    },
  ];

  const summerTracks = [
    {
      tag: "Program D · Summer 2026",
      label: "Advanced Track",
      title: "Summer Robotics Program",
      description:
        "India's most hands-on robotics summer program — powered by Orangewood Labs (YC W18). 3 weeks. Real hardware. Real engineers. A certificate that means something.",
      audience:
        "For undergraduate (B.Tech, B.E., B.Sc.), postgraduate (M.Tech, M.Sc., MBA), and working professionals in any field.",
      perks: [
        "Internship certificate from Orangewood Labs (YC-backed)",
        "Real industry project on your portfolio — built on actual hardware",
        "Engineer recommendations for internship and job applications",
        "Direct referrals to hardware companies in Orangewood's network",
        "Lifetime access to the alumni community",
      ],
      footer:
        "₹5,000 all-inclusive · 3 weeks · Hybrid (online + Noida office hardware days) · Starts June 1, 2026",
    },
    {
      tag: "Program E · Summer 2026",
      label: "High School Track",
      title: "Summer Robotics Program",
      description:
        "Beginner-friendly, expert-managed. No prior coding or robotics experience needed — just curiosity. For Grades 8–12, any stream.",
      audience:
        "For high school students in Grades 8–12, any stream. No prior coding or robotics experience needed.",
      perks: [
        "Fully managed by experts — parents just sign up",
        "Real company visit to Orangewood Labs, not a school lab",
        "Work alongside professional engineers, not just teachers",
        "Certificate from a YC-backed, internationally recognized company",
        "The spark that turns curiosity into a future career",
      ],
      footer:
        "₹5,000 all-inclusive · 3 weeks · Grades 8–12, any stream · Hybrid (online + one office visit day) · Starts June 1, 2026",
    },
  ];

  return (
    <div
      id="offerings"
      className="relative py-16 sm:py-20 bg-[#F1F1F1] overflow-hidden"
      ref={sectionRef}
    >
      <ContactModal isOpen={isOpen} onClose={closeModal} />
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <motion.p
          className="text-sm sm:text-base font-medium text-[#F3B07C] mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingReveal}
        >
          Programs
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-black tracking-tight"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingReveal}
        >
          PROGRAMS
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingReveal}
        >
          From semester-long credit courses to intensive 3-week sprints. Two
          audiences, one mission: get you doing real robotics with real
          engineers.
        </motion.p>

        {/* Institutional programs */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {institutional.map((program) => (
            <motion.div
              key={program.tag}
              className={`rounded-lg p-6 border-2 border-black flex flex-col h-full ${
                program.dark ? "bg-[#272828] text-white" : "bg-white text-black"
              }`}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    program.dark ? "text-[#F3B07C]" : "text-gray-500"
                  }`}
                >
                  {program.tag}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full border ${
                    program.dark
                      ? "border-white/40 text-white"
                      : "border-black/30 text-gray-700"
                  }`}
                >
                  {program.audience}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                {program.title}
              </h2>
              <p
                className={`text-sm mb-5 ${
                  program.dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {program.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {program.meta.map((m) => (
                  <span
                    key={m}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      program.dark
                        ? "bg-white/10 text-white"
                        : "bg-[#F1F1F1] text-gray-700 border border-black/10"
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summer tracks */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {summerTracks.map((track) => (
            <motion.div
              key={track.tag}
              className="bg-white rounded-lg p-6 sm:p-8 border-2 border-black flex flex-col"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {track.tag}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F3B07C] text-black border-2 border-black">
                  {track.label}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
                {track.title}
              </h2>
              <p className="text-sm text-gray-700 mb-3">{track.description}</p>
              <p className="text-sm font-medium text-black mb-5">
                {track.audience}
              </p>

              <p className="text-sm font-semibold text-black mb-3">
                What you walk away with
              </p>
              <ul className="space-y-2 mb-6">
                {track.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#F3B07C] flex-shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-600 mb-5 mt-auto">{track.footer}</p>
              <motion.button
                onClick={openModal}
                className="self-start px-6 py-2.5 text-base font-bold rounded-full bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply for {track.label}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Down arrow */}
        <motion.div
          className="flex justify-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            onClick={scrollToNextSection}
            className="rounded-full p-2 border-2 border-black text-black hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Scroll to next section"
            whileHover={{ y: 3 }}
          >
            <ArrowDown className="w-5 h-5 cursor-pointer" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Offerings;

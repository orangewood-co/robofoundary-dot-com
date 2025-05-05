"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Offerings = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("testimonials");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="offerings" className="relative py-20 bg-white overflow-hidden">
      {/* Blue accent shape in top-left - positioned behind elements */}
      <div className="absolute top-30 left-20 w-52 md:w-72 h-auto z-0">
        <Image
          src="/offerings-vector.png"
          alt="Blue Accent"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        {/* Heading - with adjusted positioning for blue accent visibility */}
        <h1 className="text-6xl md:text-9xl font-bold mb-12 text-black tracking-tight relative z-10">
          OFFERINGS
        </h1>

        {/* Top row - two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Card - Year-Long Semester Courses - with relative positioning */}
          <div className="bg-white rounded-lg p-6 border-2 border-black shadow-md relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">
              Year-Long Semester Courses
            </h2>
            <p className="text-gray-700 font-semibold text-sm">
              Credit-based programs with hands-on robotics, AI, and automation
              training, aligned to university curricula for job-ready graduates.
            </p>
          </div>

          {/* Second Card - Workshops & Training Programs */}
          <div className="bg-[#A29FFF] rounded-lg p-6 text-black shadow-md flex flex-col md:flex-row relative overflow-visible">
            <div className="md:w-2/3 pr-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Comprehensive Workshops & In-Depth Training Programs
              </h2>
              <p className="text-white font-semibold text-sm">
                We conduct hands-on robotics workshops, bringing academia and
                industry by equipping students with real-world skills over 2 to
                3 months.
              </p>
            </div>
            <div className="md:w-1/3 flex items-end justify-center mt-6 md:mt-0 absolute md:relative right-0 md:right-[-60px] bottom-[-25px] z-10">
              <Image
                src="/owl-6.5.png"
                alt="Robotic Arm"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom row - full width card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-8 bg-gray-900 text-white rounded-lg p-8 shadow-md flex flex-col md:flex-row h-full">
            <div className="md:w-2/3 pr-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                Value-Added Courses, Placement and Training Programs
              </h2>
              <p>
                Specialized courses available for university credit, focusing on
                building advanced skills and enhancing employability. These
                programs provide students with valuable experience that
                contributes to job readiness and career development.
              </p>
            </div>
            <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
              <Image
                src="/circuit-pattern.png"
                alt="Circuit Pattern"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </div>

          {/* Vega Logo - Lime Green */}
          <div className="md:col-span-4 bg-[#BEE813] rounded-lg p-8 flex items-center justify-center">
            <div className="relative">
              <Image
                src="/vega-black.png"
                alt="Vega Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom down arrow with click functionality */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToNextSection}
            className="rounded-full p-2 border border-black text-black shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;

"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Offerings = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("footer");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="offerings" className="relative py-20 bg-[#F1F1F1] overflow-hidden">
      {/* Blue accent shape in top-left - positioned behind elements */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        {/* White glow layer */}
        <div
          className="
      absolute
      top-8 left-1/3
      -translate-x-1/2
      md:top-9
      lg:top-18
      flex flex-col items-center
    "
          style={{ pointerEvents: "none" }}
        >
          <div className="rounded-full w-[350px] h-[350px] bg-white/30 blur-2xl"></div>
          <Image
            src="/offerings-vector.png"
            alt="Star Background"
            width={200}
            height={180}
            className="object-contain relative z-10 -mt-[300px]"
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        {/* Heading - with adjusted positioning for blue accent visibility */}
        <h1 className="text-6xl md:text-9xl font-bold mb-12 text-black tracking-tight relative z-10">
          OFFERINGS
        </h1>

        {/* Top row - two cards side by side */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* First Card */}
          <div className="flex-1 lg:max-w-[340px]">
            <div className="bg-white rounded-lg p-6 border-2 border-black  relative z-10 flex flex-col justify-between h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
                Year-Long Semester Courses
              </h2>
              <p className="text-gray-700 font-semibold text-sm mt-auto">
                Credit-based programs with hands-on robotics, AI, and automation
                training, aligned to university curricula for job-ready
                graduates.
              </p>
            </div>
          </div>
          {/* Second Card */}
            <div className="flex-[2] bg-[#B7B7B7] rounded-lg p-6 text-black  flex flex-col md:flex-row relative overflow-visible">
            <div className="md:w-2/3 pr-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
              Comprehensive Workshops & In-Depth Training Programs
              </h2>
              <p className="text-black text-sm mt-18">
              We conduct hands-on robotics workshops, bringing academia and
              industry by equipping students with real-world skills over 2 to
              3 months.
              </p>
            </div>
            <div className="md:w-1/3 flex items-end justify-center mt-6 md:mt-0 absolute md:relative right-0 md:right-[-60px] bottom-[-25px] z-10 hidden md:flex">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="relative md:col-span-8 bg-[#272828] text-white rounded-lg p-0 sm:p-0 flex flex-col md:flex-row h-auto overflow-hidden">
            {/* Image container - absolutely positioned to touch the left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-2/5 h-full z-0">
              <Image
                src="/ai.svg"
                alt="Circuit Pattern"
                fill
                className="object-cover object-left h-full w-full"
                priority
              />
            </div>

            {/* Text content - right side with proper spacing and alignment */}
            <div className="relative z-10 md:ml-[40%] w-full p-4 sm:p-6 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center md:text-left">
                Value-Added Courses, Placement and Training Programs
              </h2>
              <p className="text-sm sm:text-base text-center md:text-left">
                Specialized courses available for university credit, focusing on
                building advanced skills and enhancing employability. These
                programs provide students with valuable experience that
                contributes to job readiness and career development.
              </p>
            </div>
          </div>

          {/* Vega Logo - Lime Green */}
          <div className="md:col-span-4 bg-white rounded-lg p-8 flex items-center justify-center">
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
            className="rounded-full p-2 border-2 border-black text-black  hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;

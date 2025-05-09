"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Community = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("testimonials");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = [
    { title: "Lorem Ipsum", icon: "/star_1.png" },
    { title: "Lorem Ipsum", icon: "/black_white-star.png" },
    { title: "Lorem Ipsum", icon: "/star_1.png" },
    { title: "Lorem Ipsum", icon: "/black_white-star.png" },
  ];

  return (
    <div className="bg-amber-50">
      <div
        id="community"
        className="relative pt-12 sm:pt-16 md:pt-20 bg-white overflow-hidden"
      >
        {/* Background Star Image */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          {/* White glow layer - uncomment if needed */}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 z-10">
          {/* Heading Section - left-aligned with responsive text sizes */}
          <div className="space-y-2 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black font-extrabold tracking-tighter">
              Our Community Members,
            </h1>
            <div className="flex flex-col items-start">
              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-black leading-none">
                  999,999
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-normal text-black sm:mt-12 md:mt-16">
                  and counting...
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button Section - completely different design on mobile */}
          <div className="mt-6 sm:mt-12">
            {/* Desktop version - horizontal pill with text and button */}
            <div className="hidden sm:flex sm:flex-row border-2 border-black items-center rounded-full w-full max-w-5xl mx-auto bg-[#F3B07C] overflow-hidden ">
              <div className="sm:flex-1 px-6 py-3 text-left text-base md:text-lg font-medium text-black">
                Join Now to avail the perks of Vega Education community &gt;&gt;
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactElement = document.getElementById("contact");
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 m-2 py-2 text-lg font-bold rounded-full transition-colors cursor-pointer
        bg-black text-white hover:bg-gray-800  text-center"
              >
                JOIN NOW!
              </a>
            </div>

            {/* Mobile version - compact centered button with floating effect */}
            <div className="sm:hidden flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F3B07C] blur-sm opacity-70 rounded-xl transform scale-105"></div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative block px-8 py-3 text-base font-bold rounded-xl transition-transform transform hover:scale-105 active:scale-95
          bg-black text-white hover:bg-gray-800 text-center "
                >
                  JOIN THE COMMUNITY
                </a>
              </div>
            </div>
          </div>

          {/* Feature Cards - in a grid with smaller cards on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F1F1F1] text-black p-3 sm:p-4 md:p-6 border-2 rounded-xl sm:rounded-2xl  flex flex-col items-center"
              >
                <p className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                  {feature.title}
                </p>
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative border-2 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-7">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={120}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 pb-6">
            <button
              onClick={scrollToNextSection}
              className="rounded-full p-2 border border-black text-black  hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src="/testimonial.png"
          alt="Zigzag Pattern"
          width={140}
          height={140}
          className="w-full xl:max-h-96 object-bottom "
          priority
        />
      </div>
    </div>
  );
};

export default Community;

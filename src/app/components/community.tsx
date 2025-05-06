"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Community = () => {
  const scrollToNextSection = () => {
       
    const nextSection = document.getElementById('testimonials');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const features = [
    { title: "Lorem Ipsum", icon: "/star_1.png" },
    { title: "Lorem Ipsum", icon: "/purple-star.png" },
    { title: "Lorem Ipsum", icon: "/star_1.png" },
    { title: "Lorem Ipsum", icon: "/purple-star.png" },
  ];

  return (
    <div
      id="community"
      className="relative py-20 bg-[#BEE813] overflow-hidden min-h-screen"
    >
      {/* Background Star Image */}

      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        {/* White glow layer */}
        <div className="relative top-1/10 right-1/9 transform -translate-y-1/3 translate-x-1/6">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-white opacity-20 rounded-full w-[350px] h-[350px]"></div>
            <Image
              src="/star.png"
              alt="Star Background"
              width={450}
              height={450}
              className="object-contain relative z-10 opacity-20"
            />
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto  z-10">
        {/* Heading Section - left-aligned */}
        <div className="space-y-2 text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Our Community Members,
          </h1>
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <h2 className="text-7xl md:text-9xl font-bold text-black">
                999,999
              </h2>
              <p className="text-xl font-normal text-black mt-16">
                and counting...
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button Section - matching navbar width */}
        <div className="mt-16">
          <div className="flex items-center justify-between bg-[#A29FFF] rounded-full w-full max-w-5xl mx-auto px-5 h-15">
            <div className="flex-1 px-6 py-3 text-left text-lg font-medium text-black">
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
              className="px-6 py-2 text-lg font-bold rounded-full transition-colors cursor-pointer
                bg-black text-white hover:bg-gray-800"
            >
              JOIN NOW!
            </a>
          </div>
        </div>

        {/* Feature Cards - in a grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 border-2  rounded-2xl shadow-md flex flex-col items-center"
            >
              <p className="mb-4">{feature.title}</p>
              <div className="w-40 h-40 relative border-2 rounded-2xl p-7">
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

export default Community;

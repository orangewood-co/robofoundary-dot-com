"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";


const Testimonials = () => {
  const scrollToNextSection = () => {
       
    const nextSection = document.getElementById('offerings');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const testimonials = [
    {
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      author: "LOREM IPSUM"
    },
    {
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "JOHN DOE"
    },
    {
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      author: "JANE SMITH"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="testimonials" className="relative bg-white overflow-hidden">
      {/* Zigzag pattern using image instead of SVG */}
      <div className="w-full relative">
        <div className="w-full">
          
        </div>
        
        {/* Vega logo */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <Image
            src="/vega-white.png"
            alt="Vega Logo"
            width={110}
            height={110}
            className="object-contain opacity-30"
          />
        </div>
      </div>

      {/* Container that follows the grid */}
      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black tracking-tighter">
          Testimonials
        </h1>

        {/* Testimonial Content with Navigation */}
        <div className="relative flex items-center mb-8">
          {/* Previous Button */}
          <button 
            onClick={goToPrevious}
            className="absolute -left-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all border border-black text-black"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Text */}
          <div className="text-center px-16 md:px-24">
            <p className="text-lg text-[#6366F1] mb-6 max-w-3xl mx-auto">
              "{testimonials[currentIndex].content}"
            </p>
            <p className="font-medium text-black">
              - {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Next Button */}
          <button 
            onClick={goToNext}
            className="absolute -right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all border border-black text-black"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom down arrow */}
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

export default Testimonials;
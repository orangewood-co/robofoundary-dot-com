"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowLeft } from "lucide-react";
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
    <div id="testimonials" className="relative bg-[#F1F1F1] overflow-hidden">
    
      <div className="w-full relative">
      
        
     
      </div>

      {/* Container that follows the grid */}
      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
          Testimonials
        </h1>

        {/* Testimonial Content with Navigation */}
        <div className="relative flex items-center mb-8">
          {/* Previous Button */}
          <button 
            onClick={goToPrevious}
            className="absolute -left-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all  border-black border-2"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="text-black cursor-pointer" size={24} />
          </button>

          {/* Testimonial Text */}
          <div className="text-center px-16 md:px-24">
            <p className="text-lg text-black mb-6 max-w-3xl mx-auto">
              "{testimonials[currentIndex].content}"
            </p>
            <p className="font-medium text-[#F3B07C]">
              - {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Next Button */}
          <button 
            onClick={goToNext}
            className="absolute -right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all border-2 border-black"
            aria-label="Next testimonial"
          >
            <ArrowRight className="text-black cursor-pointer" size={24} />
          </button>
        </div>

        {/* Bottom down arrow */}
        <div className="flex justify-center mt-8">
          <div className="rounded-full p-2 border-2 border-black  shadow-sm">
           <ArrowDown  className="text-black cursor-pointer" size={24} onClick={scrollToNextSection}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
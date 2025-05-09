"use client";
import React from "react";

interface Section {
  id: string;
  name: string;
}

interface DotNavigationProps {
  sections: Section[];
  activeSectionId: string;
  className?: string;
  side?: "left" | "right";
}

export default function DotNavigation({
  sections = [],
  activeSectionId,
  className = "",
  side = "left",
}: DotNavigationProps) {
  
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed ${
        side === "left" ? "left-5 sm:left-8 md:left-12" : "right-5 sm:right-8 md:right-12"
      } top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 ${className} z-30`}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border border-black flex items-center justify-center transition-all duration-300 
            ${activeSectionId === section.id ? "bg-black" : "bg-white hover:bg-gray-200"}
          `}
          aria-label={`Go to ${section.name} section`}
        />
      ))}
    </div>
  );
}
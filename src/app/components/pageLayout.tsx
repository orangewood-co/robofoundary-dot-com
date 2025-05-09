"use client";
import { useState, useEffect, ReactNode } from "react";
import DotNavigation from "./dotNavigation";

interface Section {
  id: string;
  name: string;
}

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>("top");

  const sections: Section[] = [
    { id: "top", name: "Home" },
    { id: "community", name: "Community" },
    { id: "offerings", name: "Offerings" },
    { id: "footer", name: "Footer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = 50; 
      if (window.innerHeight + window.scrollY >= documentHeight - scrollThreshold) {
        setActiveSectionId("footer");
        return;
      }
      
     
      for (let i = sections.length - 2; i >= 0; i--) { 
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            setActiveSectionId(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="relative">
      {children}
      
      {/* Left side navigation dots */}
      <DotNavigation
        sections={sections}
        activeSectionId={activeSectionId}
        side="left"
      />
      
      {/* Right side navigation dots */}
      <DotNavigation
        sections={sections}
        activeSectionId={activeSectionId}
        side="right"
      />
    </div>
  );
}
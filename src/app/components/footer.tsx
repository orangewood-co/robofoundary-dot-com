"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-[#F1F1F1] overflow-hidden">
      {/* Contact bar */}
      <div className="mt-10 sm:mt-16 px-4 max-w-6xl mx-auto">
        {/* Desktop version - horizontal with reversed order */}
        <div className="hidden sm:flex items-center justify-between bg-white rounded-full w-full px-5 py-4 md:h-16">
          <div className="flex-1 px-4 sm:px-6 py-1 text-left text-base sm:text-lg font-medium text-black">
            Get in touch for inquiries, workshops, or collaborations :)
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
            className="px-4 sm:px-6 py-2 text-base sm:text-lg font-bold rounded-full transition-colors cursor-pointer
                bg-black text-white hover:bg-gray-800"
          >
            CONTACT US NOW!
          </a>
        </div>
        
        {/* Mobile version - floating button */}
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
              CONTACT US
            </a>
          </div>
        </div>
        
        {/* Mobile message */}
        <div className="sm:hidden text-center mt-4 px-2 text-base font-medium text-black">
          Get in touch for inquiries or collaborations :)
        </div>
      </div>

      {/* Contact information */}
      <div className="mt-6 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between gap-4 sm:gap-6 py-4">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <Linkedin size={20} className="text-[#F3B07C]" />
            </div>
            <span className="text-black font-medium text-sm sm:text-base">Debdatta Singha</span>
          </div>
          
          <div className="hidden md:block text-gray-500">|</div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <Mail size={20} className="text-[#F3B07C]" />
            </div>
            <span className="text-black font-medium text-sm sm:text-base">debdatta.s@orangewood.co</span>
          </div>
          
          <div className="hidden md:block text-gray-500">|</div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <Phone size={20} className="text-[#F3B07C]" />
            </div>
            <span className="text-black font-medium text-sm sm:text-base">+91-6295-7059-27</span>
          </div>
        </div>
      </div>

      {/* Divider with stars */}
      <div className="max-w-6xl mx-auto px-4 my-6 sm:my-8">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center -top-8">
            <div className="text-black text-3xl sm:text-4xl flex space-x-2">
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
          <div className="border-t border-black font-bold mt-4"></div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Logo */}
          <div className="md:col-span-5 flex justify-center sm:justify-start">
            <Image
              src="/vega-main.png"
              alt="Vega Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Footer links */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-black text-base sm:text-lg">Lorem Ipsum</p>
              <p className="text-black text-base sm:text-lg">Lorem Ipsum</p>
              <p className="text-black text-base sm:text-lg">Lorem Ipsum</p>
            </div>
          </div>

          {/* Social links */}
          <div className="md:col-span-3 text-black font-bold flex flex-col items-center sm:items-start">
            <p className="font-medium mb-3 sm:mb-4">Follow Us:</p>
            <div className="flex flex-col space-y-3">
              <Link 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center border border-gray-400 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit hover:bg-gray-100"
              >
                <Instagram className="mr-2" size={16} />
                <span className="text-sm sm:text-base">Instagram</span>
              </Link>
              
              <Link 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-gray-400 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit hover:bg-gray-100"
              >
                <Linkedin className="mr-2" size={16} />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-white py-4 text-black font-bold">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="flex items-center">
            <div className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 flex items-center justify-center">
              <span className="text-base sm:text-lg">©</span>
            </div>
            <span className="text-sm sm:text-base">{new Date().getFullYear()} all rights reserved</span>
          </div>
          
          <div className="flex space-x-3 sm:space-x-6 text-sm sm:text-base">
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/cookies" className="hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
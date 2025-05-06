"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-white overflow-hidden">
      {/* Contact bar */}
      <div className="mt-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#A29FFF] rounded-full w-full px-5 py-4 md:h-16">
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
                bg-black text-white hover:bg-gray-800 mb-2 md:mb-0"
          >
            CONTACT US NOW!
          </a>
          <div className="flex-1 px-6 py-1 text-center md:text-right text-lg font-medium text-black">
            Get in touch for inquiries, workshops, or collaborations :)
          </div>
        </div>
      </div>

    {/* Contact information */}
    <div className="mt-6 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12 py-4">
            <div className="flex items-center">
                <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <Linkedin size={24} className="text-[#BEE813]" />
                </div>
                <span className="text-black font-medium">Debdatta Singha</span>
            </div>
            
            <div className="hidden md:block text-gray-500">|</div>
            
            <div className="flex items-center">
                <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <Mail size={24} className="text-[#BEE813]" />
                </div>
                <span className="text-black font-medium">debdatta.s@orangewood.co</span>
            </div>
            
            <div className="hidden md:block text-gray-500">|</div>
            
            <div className="flex items-center">
                <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <Phone size={24} className="text-[#BEE813]" />
                </div>
                <span className="text-black font-medium">+91-6295-7059-27</span>
            </div>
        </div>
    </div>

      {/* Divider with stars */}
    <div className="max-w-6xl mx-auto px-4 my-8">
      <div className="relative">
        <div className="absolute inset-0 flex justify-center -top-6">
          <div className="text-[#BEE813] flex space-x-2">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <div className="border-t border-black font-bold mt-4"></div>
      </div>
    </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo */}
          <div className="md:col-span-5">
            <Image
              src="/vega-main.png"
              alt="Vega Logo"
              width={220}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Footer links */}
          <div className="md:col-span-4">
            <div className="space-y-2">
              <p className="text-black">Lorem Ipsum</p>
              <p className="text-black">Lorem Ipsum</p>
              <p className="text-black">Lorem Ipsum</p>
            </div>
          </div>

          {/* Social links */}
          <div className="md:col-span-3 text-black font-bold">
            <p className="font-medium mb-4">Follow Us:</p>
            <div className="flex flex-col space-y-3">
              <Link 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-fit hover:bg-gray-100"
              >
                <Instagram className="mr-2" size={18} />
                <span>Instagram</span>
              </Link>
              
              <Link 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-fit hover:bg-gray-100"
              >
                <Linkedin className="mr-2" size={18} />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#BEE813] py-4 text-black font-bold">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="w-5 h-5 mr-2 flex items-center justify-center">
              <span>©</span>
            </div>
            <span className="text-sm">2025 all rights reserved</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/cookies" className="hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
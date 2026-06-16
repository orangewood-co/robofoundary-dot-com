'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Community', href: '/community' },
    { name: 'Offering', href: '/offering' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="flex justify-center w-full py-4">
      <div className="flex items-center justify-between max-w-5xl w-full mx-auto px-4 border-2 border-gray-200 rounded-lg ">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <span className="text-xl font-bold tracking-tighter text-black">
              Robo<span className="text-[#F3B07C]">Foundry</span>
            </span>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
                ${activeLink === link.name 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
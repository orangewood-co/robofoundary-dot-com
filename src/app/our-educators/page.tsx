"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Linkedin, Twitter, Github, Instagram } from "lucide-react";

interface Educator {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    [key: string]: string | undefined; 
  };
}

// Sample educator data - replace with your actual educators
const educators: Educator[] = [
  {
    id: 1,
    name: "Dr. Aisha Johnson",
    role: "Robotics Specialist",
    image: "/images/educators/educator1.jpg",
    bio: "Ph.D in Robotics from MIT with over 10 years of experience in designing intelligent robotic systems.",
    expertise: ["Robotics", "AI", "Machine Learning"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Programming Instructor",
    image: "/images/educators/educator2.jpg",
    bio: "Former senior engineer at Google, specializing in Python and C++ programming for robotics applications.",
    expertise: ["Programming", "Algorithms", "Computer Vision"],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Dr. Sarah Patel",
    role: "Electronics Expert",
    image: "/images/educators/educator3.jpg",
    bio: "Electronics engineer with specialty in designing circuitry for educational robotics platforms.",
    expertise: ["Electronics", "Circuit Design", "Microcontrollers"],
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Mechanical Design Teacher",
    image: "/images/educators/educator4.jpg",
    bio: "Mechanical engineer with background in aerospace. Passionate about teaching design principles to students.",
    expertise: ["CAD", "3D Printing", "Mechanical Design"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 5,
    name: "Dr. Olivia Martinez",
    role: "AI and ML Specialist",
    image: "/images/educators/educator5.jpg",
    bio: "Researcher in artificial intelligence with focus on applications in educational robotics.",
    expertise: ["Artificial Intelligence", "Neural Networks", "Cognitive Robotics"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 6,
    name: "Prof. David Kim",
    role: "Computer Science Educator",
    image: "/images/educators/educator6.jpg",
    bio: "Computer scientist specializing in teaching computational thinking through robotics.",
    expertise: ["Computational Thinking", "Data Structures", "Algorithms"],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 7,
    name: "Emily Zhang",
    role: "Educational Technology Expert",
    image: "/images/educators/educator7.jpg",
    bio: "Specializes in integrating technology into educational environments to enhance learning outcomes.",
    expertise: ["EdTech", "Curriculum Design", "Workshop Facilitation"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 8,
    name: "Dr. Marcus Johnson",
    role: "Robotics Competition Coach",
    image: "/images/educators/educator8.jpg",
    bio: "Former competitor and now coach for international robotics competitions. Helps students excel in competitive environments.",
    expertise: ["Competition Strategy", "Team Management", "Project Planning"],
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 9,
    name: "Sophia Rodriguez",
    role: "STEM Education Specialist",
    image: "/images/educators/educator9.jpg",
    bio: "STEM advocate who creates inclusive educational experiences to attract diverse students to robotics.",
    expertise: ["Inclusive Education", "Curriculum Development", "Mentoring"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
];

const SocialIcon = ({ platform, url }: { platform: string, url: string | undefined }) => {
  if (!url) return null;
  
  switch (platform) {
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />;
    case 'twitter':
      return <Twitter className="w-5 h-5" />;
    case 'github':
      return <Github className="w-5 h-5" />;
    case 'instagram':
      return <Instagram className="w-5 h-5" />;
    default:
      return null;
  }
};

const OurEducators = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedEducator, setSelectedEducator] = useState<Educator | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const educatorCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const expertiseTagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Back to home */}
      <motion.div 
        className="max-w-7xl mx-auto w-full mb-6"
        variants={headerVariants}
      >
        <Link href="/" className="inline-flex items-center text-gray-700 hover:text-black transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        variants={headerVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-4">
          Our Educators
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Meet the brilliant minds behind Vega's educational programs. Our educators bring expertise from various fields to provide a comprehensive learning experience.
        </p>
      </motion.div>

      {selectedEducator ? (
        // Educator Details View
        <motion.div 
          className="max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col md:flex-row gap-8 border-2 border-black rounded-lg p-6 bg-[#F1F1F1]">
            <button 
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
              onClick={() => setSelectedEducator(null)}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            
            <div className="w-full md:w-1/3">
              <div className="relative h-72 w-full md:h-96 border-2 border-black rounded-md overflow-hidden">
                <Image
                  src={selectedEducator.image}
                  alt={selectedEducator.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold">{selectedEducator.name}</h2>
              <p className="text-xl text-gray-700 mb-4">{selectedEducator.role}</p>
              
              <p className="text-gray-800 mb-6">{selectedEducator.bio}</p>
              
              <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedEducator.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#F3B07C] text-black rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {Object.entries(selectedEducator.social).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <a 
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-700 hover:text-black border border-gray-300 rounded-full hover:border-black transition-colors"
                    >
                      <SocialIcon platform={platform} url={url} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        // Educators Grid - Simple Card Style
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {educators.map((educator) => (
            <motion.div
              key={educator.id}
              className="border-2 border-black rounded-lg overflow-hidden bg-[#F1F1F1] cursor-pointer hover:shadow-lg transition-all duration-300"
              variants={educatorCardVariants}
              whileHover="hover"
              onClick={() => setSelectedEducator(educator)}
            >
              <div className="relative h-64 w-full border-b-2 border-black">
                <Image
                  src={educator.image}
                  alt={educator.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold mb-1">{educator.name}</h2>
                <p className="text-gray-700 mb-3">{educator.role}</p>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {educator.expertise.slice(0, 2).map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="px-2 py-1 bg-[#F3B07C] text-black rounded-full text-xs"
                      variants={expertiseTagVariants}
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {educator.expertise.length > 2 && (
                    <motion.span 
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                      variants={expertiseTagVariants}
                    >
                      +{educator.expertise.length - 2}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default OurEducators;
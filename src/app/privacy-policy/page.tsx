"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    
    return (
        <div className="bg-[#F1F1F1] min-h-screen">
            {/* Background decoration elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div 
                    className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#F3B07C]/10 blur-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
                <motion.div 
                    className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-black/5 blur-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                />
            </div>
            
            {/* Back Button */}
            <div className="max-w-5xl mx-auto px-4 pt-6 md:pt-10">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="inline-flex items-center text-black hover:text-[#F3B07C] transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </motion.div>
            </div>
            
            {/* Main Content */}
            <motion.div 
                ref={sectionRef}
                className="max-w-5xl mx-auto px-4 py-10 md:py-16 relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <motion.div 
                    className="relative mb-12 text-center"
                    variants={fadeIn}
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Privacy Policy
                    </motion.h1>
                    <motion.div
                        className="w-20 h-1 bg-[#F3B07C] mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    />
                </motion.div>
                
                <div className="bg-white rounded-2xl border-2 border-black shadow-md overflow-hidden">
                    <motion.div 
                        className="p-6 md:p-12"
                        variants={staggerContainer}
                    >
                        <motion.p 
                            className="text-lg text-gray-800 mb-10"
                            variants={fadeIn}
                        >
                            Welcome to our Privacy Policy page. Your privacy is critically important to us. This page
                            outlines the types of personal information we collect and how we use it.
                        </motion.p>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">01.</span> Information We Collect
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    We may collect personal information such as your name, email address, and other details
                                    when you interact with our website. This may include:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                                    <li>Contact information (name, email, phone number)</li>
                                    <li>Academic background for educational purposes</li>
                                    <li>Technical data about your device and browsing activity</li>
                                    <li>Feedback and survey responses you provide</li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">02.</span> How We Use Your Information
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    The information we collect is used to improve our services, respond to inquiries, and
                                    provide a better user experience. We may use your information to:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                                    <li>Deliver courses and educational content</li>
                                    <li>Communicate with you about our services</li>
                                    <li>Improve our website and offerings</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">03.</span> Data Security
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    We implement a variety of security measures to maintain the safety of your personal information. 
                                    We use industry-standard encryption and security protocols to protect your data.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">04.</span> Your Rights
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    You have certain rights regarding your personal data, including:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                                    <li>The right to access your personal data</li>
                                    <li>The right to request correction of inaccurate data</li>
                                    <li>The right to request deletion of your data</li>
                                    <li>The right to object to processing of your data</li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-4"
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">05.</span> Contact Us
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg inline-block">
                                    <p className="font-medium text-[#F3B07C]">support@example.com</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                
                {/* Last updated */}
                <motion.div 
                    className="text-center mt-8 text-gray-500 text-sm"
                    variants={fadeIn}
                >
                    Last updated: May 2025
                </motion.div>
            </motion.div>
            
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
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
                    className="absolute top-40 left-20 w-64 h-64 rounded-full bg-[#F3B07C]/10 blur-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
                <motion.div 
                    className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-black/5 blur-3xl"
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
                        Terms & Conditions
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
                            Welcome to Vega Education! These Terms and Conditions outline the rules and regulations for using our website and services. By accessing this website, we assume you accept these terms and conditions in full.
                        </motion.p>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">01.</span> Acceptance of Terms
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    By accessing and using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">02.</span> Intellectual Property
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    The content on our website, including text, graphics, logos, images, and software, is the property of Vega Education and is protected by copyright and other intellectual property laws.
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                                    <li>You may not reproduce, distribute, or use our content without permission</li>
                                    <li>Course materials are provided for personal, non-commercial use only</li>
                                    <li>Any unauthorized use may violate copyright and other laws</li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">03.</span> User Accounts
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    When you create an account with us, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                                    <li>You must provide accurate and complete information</li>
                                    <li>You are responsible for safeguarding your password</li>
                                    <li>You must notify us immediately of any security breaches</li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">04.</span> Educational Services
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    Our courses and workshops are provided on an "as is" basis. While we strive to deliver high-quality education, we make no guarantees about specific outcomes or results.
                                </p>
                                <p className="text-gray-700 mt-4">
                                    Course materials, schedules, and instructors are subject to change. We reserve the right to modify curriculum content as needed to maintain quality and relevance.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-10" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">05.</span> Limitation of Liability
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    To the fullest extent permitted by law, Vega Education shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="mb-4" 
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                                <span className="text-[#F3B07C] mr-2">06.</span> Changes to Terms
                            </h2>
                            <div className="ml-8 border-l-2 border-gray-200 pl-6">
                                <p className="text-gray-700">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.
                                </p>
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                    <p className="font-medium text-black">For any questions regarding these terms, please contact us at:</p>
                                    <p className="font-medium text-[#F3B07C] mt-2">legal@example.com</p>
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

export default TermsPage;
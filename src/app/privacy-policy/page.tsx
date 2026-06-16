"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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
          <Link
            href="/"
            className="inline-flex items-center text-black hover:text-[#F3B07C] transition-colors"
          >
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
        <motion.div className="relative mb-12 text-center" variants={fadeIn}>
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
          <motion.div className="p-6 md:p-12" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-800 mb-10" variants={fadeIn}>
              This Privacy Policy document contains types of information that is
              collected and recorded by RoboFoundry and how we use it. If you
              have additional questions or require more information about our
              Privacy Policy, do not hesitate to contact us. This Privacy Policy
              applies only to our online activities and is valid for visitors to
              our website with regards to the information that they shared
              and/or collect in RoboFoundry. This policy is not applicable to any
              information collected offline or via channels other than this
              website.
            </motion.p>
            <motion.p className="text-lg text-gray-800 mb-10" variants={fadeIn}>
              We will collect and use personal information solely with the
              objective of fulfilling those purposes specified by us and for
              other compatible purposes, unless we obtain the consent of the
              individual concerned or as required by law. We will only retain
              personal information as long as necessary for the fulfillment of
              those purposes. We will collect personal information by lawful and
              fair means and, where appropriate, with the knowledge or consent
              of the individual concerned. Personal data should be relevant to
              the purposes for which it is to be used, and, to the extent
              necessary for those purposes, should be accurate, complete, and
              up-to-date. We will protect personal information by reasonable
              security safeguards against loss or theft, as well as unauthorized
              access, disclosure, copying, use or modification. We will make
              readily available to customers information about our policies and
              practices relating to the management of personal information. We
              are committed to conducting our business in accordance with these
              principles in order to ensure that the confidentiality of personal
              information is protected and maintained.
            </motion.p>
            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">01.</span> How We Use the
                Information We Collect
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners, including for customer service, to provide you
                    with updates and other information relating to the website,
                    and for marketing and promotional purposes
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </div>
            </motion.div>
            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">02.</span> CCPA Privacy
                Rights (Do Not Sell My Personal Information)
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700 mb-2">
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>
                    Request that a business that collects a consumer's personal
                    data disclose the categories and specific pieces of personal
                    data that a business has collected about consumers.
                  </li>
                  <li>
                    Request that a business delete any personal data about the
                    consumer that a business has collected.
                  </li>
                  <li>
                    Request that a business that sells a consumer's personal
                    data, not sell the consumer's personal data.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
              </div>
            </motion.div>
            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">03.</span> Refund Policy
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  We don’t offer any refund, only exceptions will be entertained
                  after consideration. Once we approve the refund, we will
                  credit the amount in customer bank account within 5 working
                  days.
                </p>
              </div>
            </motion.div>
            {/* <motion.div className="mb-4" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">04.</span> Contact Us
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg inline-block">
                  <p className="font-medium text-[#F3B07C]">
                    support@example.com
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Last updated */}
        <motion.div
          className="text-center mt-8 text-gray-500 text-sm"
          variants={fadeIn}
        >
          Last updated: July 2025
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

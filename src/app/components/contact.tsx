"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, Send, CheckCircle, AlertTriangle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Formspree integration
  const [state, handleSubmit] = useForm("mjkwpvnl");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Close modal when clicked outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }, 300);
    }
  }, [isOpen]);

  // Handle successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormSubmitted(true);
    }
  }, [state.succeeded]);

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  } satisfies Variants;

  const modalVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  } satisfies Variants;

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  } satisfies Variants;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-white rounded-2xl border-2 border-black shadow-xl w-full max-w-md overflow-hidden relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} className="text-black cursor-pointer" />
            </button>

            {/* Modal header */}
            <div className="bg-[#F1F1F1] p-6 border-b-2 border-black">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Get in Touch
              </h2>
              <p className="text-gray-700 mt-1">We'd love to hear from you!</p>
            </div>

            {/* Success state */}
            {formSubmitted ? (
              <motion.div
                className="p-8 flex flex-col items-center text-center"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="w-16 h-16 bg-[#F3B07C]/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-[#F3B07C]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <motion.button
                  onClick={onClose}
                  className="px-6 py-2 bg-black text-white font-medium rounded-full text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3B07C]/50 transition-all bg-white text-black"
                    />
                  </div>

                  {/* Phone Field */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder=""
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3B07C]/50 transition-all bg-white text-black"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3B07C]/50 transition-all bg-white text-black"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3B07C]/50 transition-all bg-white resize-none text-black"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Error message display */}
                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="flex items-start space-x-2 text-red-600 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle
                        size={18}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="font-medium">
                          Please correct the following:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-1">
                          {Object.entries(state.errors).map(
                            ([field, fieldErrors]) => (
                              <li key={field}>
                                {field}:{" "}
                                {Array.isArray(fieldErrors)
                                  ? fieldErrors.join(", ")
                                  : typeof fieldErrors === "string"
                                  ? fieldErrors
                                  : "Invalid input"}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Submit button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className={`w-full px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 cursor-pointer
                        ${
                          state.submitting
                            ? "bg-gray-300 text-gray-700"
                            : "bg-[#F3B07C] text-black hover:bg-[#F3B07C]/90"
                        } transition-colors border-2 border-black`}
                      whileHover={state.submitting ? {} : { scale: 1.02 }}
                      whileTap={state.submitting ? {} : { scale: 0.98 }}
                    >
                      {state.submitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-gray-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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
          <motion.div className="p-6 md:p-12" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-800 mb-10" variants={fadeIn}>
              By accessing this web site, you are agreeing to be bound by these
              web site Terms and Conditions of Use, all applicable laws and
              regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of
              these terms, you are prohibited from using or accessing this site.
              The materials contained in this web site are protected by
              applicable copyright and trade mark law.
            </motion.p>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">01.</span> Use License
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700 mb-2">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Vegaskool’s web site
                  for personal, non-commercial transitory viewing only. This is
                  the grant of a license, not a transfer of title, and under
                  this license you may not:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose, or for any
                    public display (commercial or non-commercial)
                  </li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on Vegaskool’s web site
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or “mirror” the
                    materials on any other server
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by Vegaskool at
                  any time. Upon terminating your viewing of these materials or
                  upon the termination of this license, you must destroy any
                  downloaded materials in your possession whether in electronic
                  or printed format.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">02.</span> Intellectual
                Property & Support
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700 mb-2">
                  You agree that Company will have no obligation to provide you
                  with any support in connection with the Site. Excluding any
                  User Content that you may provide, you are aware that all the
                  intellectual property rights, including copyrights, patents,
                  trademarks, and trade secrets, in the Site and its content are
                  owned by Company or Company’s suppliers. Note that these Terms
                  and access to the Site do not give you any rights, title or
                  interest in or to any intellectual property rights. Company
                  and its suppliers reserve all rights not granted in these
                  Terms.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">03.</span> Disclaimer
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  The materials on Vegaskool’s web site are provided “as is”.
                  Vegaskool makes no warranties, expressed or implied, and
                  hereby disclaims and negates all other warranties, including
                  without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights. Further, Vegaskool does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its Internet web
                  site or otherwise relating to such materials or on any sites
                  linked to this site.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">04.</span> Limitations
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  In no event shall Vegaskool or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption,) arising out
                  of the use or inability to use the materials on Vegaskool’s
                  Internet site, even if Vegaskool or a Vegaskool authorized
                  representative has been notified orally or in writing of the
                  possibility of such damage. Because some jurisdictions do not
                  allow limitations on implied warranties, or limitations of
                  liability for consequential or incidental damages, these
                  limitations may not apply to you.
                </p>
                <p className="text-gray-700 mt-4">
                  Some jurisdictions do not allow the exclusion of implied
                  warranties, so the above exclusion may not apply to you. Some
                  jurisdictions do not allow limitations on how long an implied
                  warranty lasts, so the above limitation may not apply to you.
                  To the maximum extent permitted by law, notwithstanding
                  anything to the contrary contained herein, our liability to
                  you for any damages arising from or related to this agreement,
                  will at all times be limited to a maximum of fifty U.S.
                  dollars (u.s. $50). The existence of more than one claim will
                  not enlarge this limit.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">05.</span> Revisions and
                Errata
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  The materials appearing on Vegaskool’s web site could include
                  technical, typographical, or photographic errors. Vegaskool
                  does not warrant that any of the materials on its web site are
                  accurate, complete, or current. Vegaskool may make changes to
                  the materials contained on its web site at any time without
                  notice. Vegaskool does not, however, make any commitment to
                  update the materials.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">06.</span> Links
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  Vegaskool has not reviewed all of the sites linked to its
                  Internet web site and is not responsible for the contents of
                  any such linked site. The inclusion of any link does not imply
                  endorsement by Vegaskool of the site. Use of any such linked
                  web site is at the user’s own risk.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">07.</span> Site Terms of
                Use Modifications
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  Vegaskool may revise these terms of use for its web site at
                  any time without notice. By using this web site you are
                  agreeing to be bound by the then current version of these
                  Terms and Conditions of Use.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">08.</span> Governing Law
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  Any claim relating to Vegaskool’s web site shall be governed
                  by the laws of India without regard to its conflict of law
                  provisions. General Terms and Conditions applicable to Use of
                  a Web Site.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">09.</span> Terms and
                Terminations
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  Subject to this Section, these Terms will remain in full force
                  and effect while you use the Site. We may suspend or terminate
                  your rights to use the Site at any time for any reason at our
                  sole discretion, including for any use of the Site in
                  violation of these Terms. Upon termination of your rights
                  under these Terms, your Account and right to access and use
                  the Site will terminate immediately. You understand that any
                  termination of your Account may involve deletion of your User
                  Content associated with your Account from our live databases.
                  Company will not have any liability whatsoever to you for any
                  termination of your rights under these Terms.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">10.</span> Copyright
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  Company respects the intellectual property of others and asks
                  that users of our Site do the same. In connection with our
                  Site, we have adopted and implemented a policy respecting
                  copyright law that provides for the removal of any infringing
                  materials and for the termination of users of our online Site
                  who are repeated infringers of intellectual property rights,
                  including copyrights. If you believe that one of our users is,
                  through the use of our Site, unlawfully infringing the
                  copyright(s) in a work, and wish to have the allegedly
                  infringing material removed, the following information in the
                  form of a written notification (pursuant to 17 U.S.C. §
                  512(c)) must be provided to our designated Copyright Agent:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Your physical or electronic signature</li>
                  <li>
                    Identification of the copyrighted work(s) that you claim to
                    have been infringed
                  </li>
                  <li>
                    Identification of the material on our services that you
                    claim is infringing and that you request us to remove
                  </li>
                  <li>Your address, telephone number, and e-mail address</li>
                  <li>
                    A statement that you have a good faith belief that use of
                    the objectionable material is not authorized by the
                    copyright owner, its agent, or under the law
                  </li>
                  <li>
                    A statement that the information in the notification is
                    accurate, and under penalty of perjury, that you are either
                    the owner of the copyright that has allegedly been infringed
                    or that you are authorized to act on behalf of the copyright
                    owner
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Please note that, pursuant to 17 U.S.C. § 512(f), any
                  misrepresentation of material fact in a written notification
                  automatically subjects the complaining party to liability for
                  any damages, costs and attorney’s fees incurred by us in
                  connection with the written notification and allegation of
                  copyright infringement.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">11.</span> Electronic
                Communications
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  The communications between you and Company use electronic
                  means, whether you use the Site or send us emails, or whether
                  Company posts notices on the Site or communicates with you via
                  email. For contractual purposes, you (a) consent to receive
                  communications from Company in an electronic form; and (b)
                  agree that all terms and conditions, agreements, notices,
                  disclosures, and other communications that Company provides to
                  you electronically satisfy any legal obligation that such
                  communications would satisfy if it were be in a hard copy
                  writing.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">12.</span> Entire Terms
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  These Terms constitute the entire agreement between you and us
                  regarding the use of the Site. Our failure to exercise or
                  enforce any right or provision of these Terms shall not
                  operate as a waiver of such right or provision. The section
                  titles in these Terms are for convenience only and have no
                  legal or contractual effect. The word "including" means
                  "including without limitation". If any provision of these
                  Terms is held to be invalid or unenforceable, the other
                  provisions of these Terms will be unimpaired and the invalid
                  or unenforceable provision will be deemed modified so that it
                  is valid and enforceable to the maximum extent permitted by
                  law. Your relationship to Company is that of an independent
                  contractor, and neither party is an agent or partner of the
                  other. These Terms, and your rights and obligations herein,
                  may not be assigned, subcontracted, delegated, or otherwise
                  transferred by you without Company’s prior written consent,
                  and any attempted assignment, subcontract, delegation, or
                  transfer in violation of the foregoing will be null and void.
                  Company may freely assign these Terms. The terms and
                  conditions set forth in these Terms shall be binding upon
                  assignees.
                </p>
              </div>
            </motion.div>

            <motion.div className="mb-10" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">13.</span> Your Privacy
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">Please read our Privacy Policy.</p>
              </div>
            </motion.div>

            <motion.div className="mb-4" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black flex items-center">
                <span className="text-[#F3B07C] mr-2">14.</span>{" "}
                Copyright/Trademark Information
              </h2>
              <div className="ml-8 border-l-2 border-gray-200 pl-6">
                <p className="text-gray-700">
                  Copyright ©. Vegaskool (Managed by AADHUNIK HEALTHCARE
                  RESEARCH AND ADVISORY PRIVATE LIMITED) All rights reserved.
                  All trademarks, logos and service marks displayed on the Site
                  are our property or the property of other third-parties. You
                  are not permitted to use these Marks without our prior written
                  consent or the consent of such third party which may own the
                  Marks.
                </p>
              </div>
            </motion.div>
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

export default TermsPage;

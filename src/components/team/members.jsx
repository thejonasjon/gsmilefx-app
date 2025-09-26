import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import profilePhotoPlacholder from "../../assets/images/testimonials-profile-photo-placeholder.jpg";

export default function TeamMembers() {
  const teamMembers = {
    leadership: [
      {
        name: "Godspower Ogaga S.",
        role: "Founder & CEO",
        bio: "Godspower Ogaga is the visionary Founder and CEO of GsmileFX, an innovative Forex trading education brand committed to “Turning Skill into Profit.” With a dynamic blend of experience in education, healthcare administration, and financial markets, he brings a multidimensional perspective to leadership and mentorship. Holding certifications in Education and Healthcare Administration Godspower’s approach is rooted in structured learning, human empowerment, and professional excellence. His journey into Forex trading was born from a desire for personal freedom and has evolved into a mission to build globally competent traders through GsmileFX. His unique ability to demystify complex concepts like Smart Money Concepts (SMC), market structure, and price action has empowered hundreds of traders across various levels. Under his guidance, the GsmileFX Team is rapidly expanding—becoming a global movement dedicated to ethical, skill-based trading. Godspower is not only a skilled trader and educator; he’s a community builder, mentor, and advocate for financial independence. Through tailored mentorships, structured learning, and accessible digital platforms, he is pioneering a new vision of financial literacy and sustainable profit in Africa and beyond.",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Godwin Ochigbo",
        role: "CTO",
        bio: "Godwin Ochigbo is the forward-thinking Chief Technology Officer of GsmileFX, where he leverages 6 years of institutional trading experience and a strong technology background to drive innovation in financial education. With a career that bridges finance, data-driven insights, and cutting-edge technology, he plays a crucial role in designing systems that make learning and trading seamless, scalable, and impactful. His expertise lies in building robust digital infrastructures, optimizing trading strategies, and ensuring that learners have access to tools that match global standards. At GsmileFX, Godwin leads the technology team with a vision of creating sustainable platforms that empower traders with both knowledge and practical application. Beyond his technical skillset, he is a mentor and problem-solver, dedicated to helping traders embrace data, discipline, and innovation in their journey to profitability. Godwin’s leadership continues to position GsmileFX at the forefront of fintech-driven trading education across Africa and beyond.",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Jonas John",
        role: "Head of IT",
        bio: "Jonas John is the Head of IT at GsmileFX, bringing a wealth of expertise in technology, systems management, and digital innovation. With a strong background in software development and IT infrastructure, Jonas plays a vital role in ensuring that the platforms supporting GsmileFX’s traders are secure, scalable, and efficient. He has a unique talent for breaking down complex trading and technical concepts into clear, practical solutions that empower learners at every level. Passionate about leveraging technology to simplify financial education, Jonas is dedicated to building tools and systems that make trading accessible, reliable, and impactful across Africa and beyond.",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Kayode Joseph",
        role: "Lead Brand | Digital Designer | Business Strategist",
        bio: "Kayode is a creative designer with 4+ years of experience, specializing in crafting visually compelling designs that attract users and elevate digital experiences. His expertise spans websites, apps, and branding, where he transforms ideas into engaging, user-friendly journeys that captivate from the very first glance. Passionate about design that blends aesthetics with functionality, Kayode plays a key role in shaping the visual identity and user experience at GsmileFX.",
        image: "",
        social: { twitter: "https://x.com/0x_khayy", facebook: "#", linkedin: "https://www.linkedin.com/in/kayode-akinlade/" },
      },
    ],
    // traders: [
    //   {
    //     name: "David Rodriguez",
    //     role: "Senior Forex Trader",
    //     bio: "David specializes in swing trading major currency pairs...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    //   {
    //     name: "Emma Wilson",
    //     role: "Technical Analysis Specialist",
    //     bio: "Emma's expertise in chart patterns and technical indicators...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    //   {
    //     name: "James Taylor",
    //     role: "Algorithmic Trading Expert",
    //     bio: "James bridges the gap between manual and automated trading strategies...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    // ],
    // educators: [
    //   {
    //     name: "Sophia Martinez",
    //     role: "Senior Trading Coach",
    //     bio: "Sophia has mentored over 500 traders to profitability...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    //   {
    //     name: "Robert Kim",
    //     role: "Risk Management Specialist",
    //     bio: "Robert's background in financial risk management...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    //   {
    //     name: "Lisa Thompson",
    //     role: "Psychology Coach",
    //     bio: "Lisa focuses on the critical psychological aspects of trading...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    // ],
    // support: [
    //   {
    //     name: "Thomas Wright",
    //     role: "Customer Success Manager",
    //     bio: "Thomas ensures that every student receives support...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    //   {
    //     name: "Olivia Garcia",
    //     role: "Community Manager",
    //     bio: "Olivia cultivates our vibrant trading community...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    //   {
    //     name: "Daniel Lee",
    //     role: "Technical Support Lead",
    //     bio: "Daniel ensures that our learning platform operates flawlessly...",
    //     image: "",
    //     social: { twitter: "#", facebook: "#", linkedin: "#" },
    //   },
    // ],
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.05),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 space-x-2 text-sm bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-full backdrop-blur-sm border border-green-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Our People</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Meet The <span className="text-green-500">Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Our diverse team of trading professionals brings decades of experience to help you succeed.
          </motion.p>
        </div>

        {/* Render team groups */}
        {Object.entries(teamMembers).map(([group, members]) => (
          <div key={group} className="mb-20">
            <h3 className="text-2xl font-semibold text-green-400 capitalize mb-6">
              {group}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute rounded-lg"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-md overflow-hidden">
                    <div className="h-[1px] w-full bg-gradient-to-r from-green-500 to-green-700"></div>
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-6">
                        <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border border-green-500">
                          <img src={member.image || profilePhotoPlacholder} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-center text-green-500">{member.role}</p>
                        <div className="flex space-x-3 mt-3">
                          <a href={member.social.twitter} className="text-gray-400 hover:text-green-500 transition-colors">
                            <Twitter />
                          </a>
                          <a href={member.social.facebook} className="text-gray-400 hover:text-green-500 transition-colors">
                            <Facebook />
                          </a>
                          <a href={member.social.linkedin} className="text-gray-400 hover:text-green-500 transition-colors">
                            <Linkedin />
                          </a>
                        </div>
                      </div>
                      <p className="text-gray-400 text-center">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
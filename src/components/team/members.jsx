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
        bio: "With over 5 years of forex trading experience...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Godwin Ochigbo",
        role: "CTO",
        bio: "Godwin brings 6 years of institutional trading experience...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Jonas John",
        role: "Head of IT",
        bio: "Jonas has a unique talent for breaking down complex trading concepts...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Kayode John",
        role: "Lead Brand | Digital Designer | Business Strategist",
        bio: "Kayode has a unique talent for breaking down complex trading concepts...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
    ],
    traders: [
      {
        name: "David Rodriguez",
        role: "Senior Forex Trader",
        bio: "David specializes in swing trading major currency pairs...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Emma Wilson",
        role: "Technical Analysis Specialist",
        bio: "Emma's expertise in chart patterns and technical indicators...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "James Taylor",
        role: "Algorithmic Trading Expert",
        bio: "James bridges the gap between manual and automated trading strategies...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
    ],
    educators: [
      {
        name: "Sophia Martinez",
        role: "Senior Trading Coach",
        bio: "Sophia has mentored over 500 traders to profitability...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Robert Kim",
        role: "Risk Management Specialist",
        bio: "Robert's background in financial risk management...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Lisa Thompson",
        role: "Psychology Coach",
        bio: "Lisa focuses on the critical psychological aspects of trading...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
    ],
    support: [
      {
        name: "Thomas Wright",
        role: "Customer Success Manager",
        bio: "Thomas ensures that every student receives support...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Olivia Garcia",
        role: "Community Manager",
        bio: "Olivia cultivates our vibrant trading community...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
      {
        name: "Daniel Lee",
        role: "Technical Support Lead",
        bio: "Daniel ensures that our learning platform operates flawlessly...",
        image: "",
        social: { twitter: "#", facebook: "#", linkedin: "#" },
      },
    ],
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
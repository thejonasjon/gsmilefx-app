import React, { useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Shield, BarChart3, Briefcase, ChevronRight } from "lucide-react";

export default function AccountManagement() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Initials",
      icon: Shield,
      description:
        "Before proceeding, we ensure a comprehensive understanding of your risk appetite, investment amount and specific goals. This ensures alignment with your investment objectives and preferences.",
    },
    {
      title: "Profit-Sharing Model",
      icon: PieChart,
      description:
        "We operate on a clear profit sharing model to ensure transparency. GsmileFX Fee: 30% of the net profits. Client's Share: 70% of the net profits. Clients are provided with detailed terms and conditions or agreement documents for clarity and agreement.",
    },
    {
      title: "Account Setup and Trading",
      icon: Briefcase,
      description:
        "Once aligned, we proceed to set up your account with the most suitable broker. Accessibility is then granted for seamless trading operations. We handle broker selection based on your needs, account configuration and setup, and secure access management.",
    },
    {
      title: "Support & Communication",
      icon: BarChart3,
      description:
        "Upon commencement of trading, we provide ongoing support including regular account reports and performance reviews, collaborative decision-making on future strategies, and 24/7 access to trading performance data.",
    },
  ];

  return (
    <section id="accountManagement" className="relative w-full py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500 rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-500 rounded-full filter blur-[150px]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,83,0.1),transparent_70%)]"></div>
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
            <span>Professional Service</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Account <span className="text-green-500">Management</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Entrusting your funds with our Account Management service means leveraging the expertise of seasoned traders
            who are dedicated to maximizing your returns while maintaining your risk parameters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeCard === index ? "lg:col-span-2" : ""
              }`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10 h-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      {card.title}
                      <ChevronRight
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                          activeCard === index ? "rotate-90" : ""
                        }`}
                      />
                    </h3>
                    <p
                      className={`text-gray-400 transition-all duration-500 overflow-hidden ${
                        activeCard === index ? "max-h-96" : "max-h-16 text-ellipsis overflow-hidden"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-full backdrop-blur-sm border border-green-500/20 text-gray-300">
            <span className="text-green-500 font-semibold">70/30</span>
            <span className="mx-2">|</span>
            <span>Profit-sharing model with transparent reporting and no hidden fees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
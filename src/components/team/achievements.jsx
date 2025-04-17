import React from "react";
import { motion } from "framer-motion";
import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      items: [
        "Best Forex Education Provider 2023",
        "Top 10 Trading Mentors 2022",
        "Excellence in Trading Education 2021",
        "Most Innovative Trading Curriculum 2020",
      ],
    },
    {
      icon: Users,
      title: "Student Success",
      items: [
        "Over 85% of our students achieve consistent profitability",
        "Average student ROI increases by 40% after completing our programs",
        "More than 500 students have transitioned to full-time trading",
        "Students from 50+ countries worldwide",
      ],
    },
    {
      icon: BookOpen,
      title: "Educational Impact",
      items: [
        "Published 3 best-selling books on forex trading",
        "Developed 20+ proprietary trading strategies",
        "Created 500+ hours of educational content",
        "Hosted 100+ live trading webinars annually",
      ],
    },
    {
      icon: TrendingUp,
      title: "Trading Performance",
      items: [
        "Consistent 30%+ annual returns on our demonstration accounts",
        "Successfully navigated major market events with positive returns",
        "Developed risk management systems used by institutional traders",
        "Accurately predicted major market movements in 2022-2023",
      ],
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.1),transparent_70%)]"></div>
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
            <span>Our Accomplishments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Team <span className="text-green-500">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Our track record of success in trading education, mentorship, and market performance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                    <ul className="space-y-3">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="rounded-full bg-green-500/20 p-1 text-green-500 flex-shrink-0 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

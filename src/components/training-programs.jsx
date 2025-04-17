import React, { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, TrendingUp, LineChart, ChevronRight } from "lucide-react"
// import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function TrainingPrograms() {
  const [activeTab, setActiveTab] = useState(0)

  const programs = [
    {
      title: "Basic",
      subtitle: "Begin your trading career",
      icon: BookOpen,
      color: "from-blue-500 to-blue-700",
      description: "Foundation Building",
      goal: "Break-even trading",
      features: [
        "Learning the basics of Forex trading",
        "Understand market analysis and trading strategies",
        "Developing a trading plan",
        "Starting with small trades and low risk",
      ],
    },
    {
      title: "Intermediate",
      subtitle: "Supply and Demand",
      icon: TrendingUp,
      color: "from-green-500 to-green-700",
      description: "Skill Refinement",
      goal: "Consistent profitability (20-50% per month)",
      features: [
        "Refining trading skills and Knowledge",
        "Mastering multiple trading strategies",
        "Managing risk and emotions",
        "Increasing trade size and risk",
      ],
    },
    {
      title: "Advanced",
      subtitle: "Trade with Confluence strategy",
      icon: LineChart,
      color: "from-purple-500 to-purple-700",
      description: "Mastery Development",
      goal: "High profitability (50-100% per month)",
      features: [
        "Developing advanced trading techniques",
        "Using quantitative analysis and programming",
        "Refining market analysis and prediction skills",
        "Maximizing profits and minimizing losses",
      ],
    },
  ]

  return (
    <section id="training" className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300c853' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
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
            <span>Structured Learning Path</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Training <span className="text-green-500">Programs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Comprehensive forex training programs tailored to your experience level
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${program.color} text-white shadow-lg shadow-${program.color.split(" ")[0]}/20`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {program.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="border-0 bg-gradient-to-br from-gray-900 to-black overflow-hidden shadow-[0_0_40px_rgba(0,200,83,0.1)] backdrop-blur-sm">
            <div
              className={`h-2 w-full bg-gradient-to-r ${programs[activeTab].color}`}
              style={{ borderRadius: "2px 2px 0 0" }}
            ></div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${programs[activeTab].color}`}
                  >
                    {React.createElement(programs[activeTab].icon, { className: "h-8 w-8 text-white" })}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white">{programs[activeTab].title}</h3>
                      <p className="text-gray-400">{programs[activeTab].subtitle}</p>
                    </div>
                    <div
                      className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${programs[activeTab].color} bg-opacity-10 text-white`}
                    >
                      {programs[activeTab].description}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-white">What You'll Learn</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programs[activeTab].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div
                              className={`rounded-full p-1 flex-shrink-0 mt-0.5 bg-gradient-to-r ${programs[activeTab].color}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 text-white"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-gray-800">
                      <div>
                        <div className="text-sm text-gray-400">Program Goal</div>
                        <div className="text-xl font-bold text-green-500">{programs[activeTab].goal}</div>
                      </div>
                      <Button
                        className={`bg-gradient-to-r ${programs[activeTab].color} hover:brightness-110 text-white border-0 rounded-full px-6 group`}
                      >
                        Enroll Now
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* CardContent */}
          </div> {/* Card */}
        </motion.div>
      </div>
    </section>
  )
}
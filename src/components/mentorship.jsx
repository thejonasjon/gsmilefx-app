import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Target, TrendingUp } from "lucide-react";

export default function Mentorship() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const stages = [
    {
      title: "Foundation and Needs Assessment",
      icon: Users,
      description:
        "During this initial stage, the focus is on understanding your current knowledge, experience level and specific needs.",
      items: [
        "Bi-weekly 1-on-1 mentorship sessions to assess your understanding of basic trading concepts",
        "Access to an exclusive trading community for networking and sharing insights",
        "Receive trade alerts and market analysis to familiarize with market dynamics",
        "Begin development of a personalized trading plan tailored to your risk tolerance and financial goals",
      ],
    },
    {
      title: "Strategy Development and Customization",
      icon: Target,
      description:
        "Building on the foundational knowledge, this stage emphasizes the development of effective trading strategies aligned with your challenges and current skill level.",
      items: [
        "Daily mentorship sessions focusing on advanced trade strategies and techniques",
        "Personalized coaching to address specific challenges and refine trading skills",
        "Detailed feedback on trading performance and decision-making process",
        "Dive deeper into market psychology and risk management strategies tailored to your evolving needs",
        "Continued refinement and customization of the trading plan to optimize performance and adapt to changing market conditions",
      ],
    },
    {
      title: "Monitoring and Continuous Improvement",
      icon: TrendingUp,
      description:
        "In the final stage, the focus shifts to monitoring progress and ensuring sustained growth and improvement.",
      items: [
        "Access to private trading room for ongoing support and collaboration",
        "Mastery of high-performance trading strategies with real-time market applications",
        "Optional quarterly in-person meetings for deeper engagement and personalized guidance",
        "Regular sessions to review and reinforce learning outcomes, assessing your development",
        "Priority access to new trading opportunities and exclusive insights",
        "Discounts for commitment periods (10% off for 3 months, 20% off for 6 months, 30% off for 12 months)",
        "30-day money-back guarantee, reflecting our commitment to mentorship satisfaction",
      ],
    },
  ];

  return (
    <section id="mentorship"
      ref={containerRef}
      className="relative w-full py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="url(#grad1)" opacity="0.2">
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M0,50 Q25,30 50,50 T100,50 V100 H0 Z;
                  M0,50 Q25,70 50,50 T100,50 V100 H0 Z;
                  M0,50 Q25,30 50,50 T100,50 V100 H0 Z
                "
              />
            </path>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00c853" />
                <stop offset="100%" stopColor="#009624" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <motion.div style={{ opacity, scale }} className="container relative z-10 px-4 mx-auto">
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
            <span>Personalized Guidance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            1-on-1 <span className="text-green-500">Mentorship</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Personalized guidance to accelerate your trading success through our proven three-stage mentorship process
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-green-700 via-green-500 to-green-700 md:block hidden"></div>

          <div className="space-y-24">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:grid md:grid-cols-2 md:gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "md:text-right" : "order-2"}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "-right-16" : "-left-16"
                      } transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-400 rounded-full p-4 z-10 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(0,200,83,0.4)]`}
                    >
                      <stage.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="relative z-10">
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                          <stage.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                      </div>

                      <h3 className="hidden md:block text-2xl font-bold mb-4 text-white">{stage.title}</h3>
                      <p className="text-gray-400 mb-6">{stage.description}</p>

                      <ul className="space-y-4">
                        {stage.items.map((item, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-3 ${
                              index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                            }`}
                          >
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
                </div>
                <div className={`mt-8 md:mt-0 hidden md:block ${index % 2 === 0 ? "order-2" : ""}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
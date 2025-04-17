import React from "react";
import { motion } from "framer-motion";
import { LineChart, TrendingUp, BarChart, PieChart, Activity, DollarSign,} from "lucide-react";

export default function TeamExpertise() {
  const expertiseAreas = [
    {
      title: "Technical Analysis",
      icon: LineChart,
      description:
        "Our team excels in identifying high-probability trade setups using advanced chart patterns, indicators, and price action analysis.",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Supply and Demand",
      icon: TrendingUp,
      description:
        "We specialize in institutional supply and demand concepts, teaching traders to identify key market levels where major players operate.",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Risk Management",
      icon: BarChart,
      description:
        "Our experts implement sophisticated risk management techniques that protect capital while maximizing profit potential.",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Market Psychology",
      icon: Activity,
      description:
        "We help traders understand market sentiment and develop the mental discipline needed for consistent trading success.",
      color: "from-amber-500 to-amber-700",
    },
    {
      title: "Portfolio Diversification",
      icon: PieChart,
      description:
        "Our team provides guidance on building diversified trading portfolios across different markets and timeframes.",
      color: "from-red-500 to-red-700",
    },
    {
      title: "Fundamental Analysis",
      icon: DollarSign,
      description:
        "We analyze macroeconomic factors and news events to identify trading opportunities based on fundamental market drivers.",
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Animated background */}
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
            <span>Our Specialties</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Team <span className="text-green-500">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Our team brings specialized knowledge across multiple trading disciplines to provide you with comprehensive
            forex education
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10 h-full bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className={`p-3 rounded-xl bg-gradient-to-br ${area.color} text-white mb-6 w-fit`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-400">{area.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
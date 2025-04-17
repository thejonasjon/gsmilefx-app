import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const milestones = [
    {
      year: "2015",
      title: "GsmileFX Founded",
      description:
        "GsmileFX was established with a vision to transform forex education through personalized mentorship and practical training methods.",
    },
    {
      year: "2017",
      title: "First 100 Students",
      description:
        "Reached our first milestone of 100 successful students, with over 70% reporting consistent profitability in their trading.",
    },
    {
      year: "2019",
      title: "Online Platform Launch",
      description:
        "Expanded our reach globally with the launch of our comprehensive online learning platform and trading community.",
    },
    {
      year: "2021",
      title: "Advanced Strategies Program",
      description:
        "Introduced our advanced trading strategies program, focusing on institutional-level supply and demand concepts.",
    },
    {
      year: "2023",
      title: "10,000+ Traders Community",
      description:
        "Celebrated reaching a community of over 10,000 traders worldwide, with students from more than 50 countries.",
    },
    {
      year: "2025",
      title: "Looking Forward",
      description:
        "Continuing to innovate and expand our offerings to meet the evolving needs of forex traders globally.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.1),transparent_70%)]"></div>
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
            <span>Our Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            The <span className="text-green-500">GsmileFX</span> Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            From humble beginnings to a global trading education platform, our journey has been defined by a commitment
            to trader success.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-green-700 via-green-500 to-green-700 md:block hidden"></div>

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
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
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>

                    <div className="relative z-10">
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                          <span className="font-bold">{milestone.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                      </div>

                      <h3 className="hidden md:block text-2xl font-bold mb-4 text-white">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
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
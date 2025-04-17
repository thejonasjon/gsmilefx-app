import { motion } from "framer-motion"
import { LineChart, BookOpen, Users, Shield } from "lucide-react"
import profilePhotoPlacholder from "../../assets/images/testimonials-profile-photo-placeholder.jpg"

export default function AboutApproach() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
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
            <span>Our Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            The <span className="text-green-500">GsmileFX</span> Approach
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Our unique approach to forex education combines proven trading strategies, personalized mentorship, and
            practical application
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl blur opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden border border-green-500/20">
                <img
                  src={`${profilePhotoPlacholder}?height=600&width=800`}
                  alt="GsmileFX Trading Approach"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                <LineChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data-Driven Strategies</h3>
                <p className="text-gray-400">
                  Our trading strategies are built on rigorous market analysis and backtesting, ensuring they perform
                  consistently across different market conditions. We focus on high-probability setups that give our
                  students a statistical edge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Structured Learning Path</h3>
                <p className="text-gray-400">
                  We've developed a clear progression from foundational concepts to advanced strategies, allowing
                  traders of all levels to build their skills systematically. Each stage builds upon the previous,
                  creating a comprehensive trading education.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Personalized Mentorship</h3>
                <p className="text-gray-400">
                  We believe that one-on-one guidance is essential for trader development. Our mentors work closely with
                  each student to address their specific challenges, refine their strategies, and accelerate their
                  growth as traders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Risk Management Focus</h3>
                <p className="text-gray-400">
                  Capital preservation is at the core of our teaching philosophy. We emphasize robust risk management
                  techniques that protect trading capital while maximizing profit potential, ensuring long-term
                  sustainability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
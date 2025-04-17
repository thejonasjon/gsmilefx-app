import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutStats() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const stats = [
    { value: "10k+", label: "Traders Trained" },
    { value: "85%", label: "Success Rate" },
    { value: "50+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ]

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.15),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>

      <motion.div style={{ opacity, scale }} className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)] text-center group"
            >
              <div className="relative">
                <div className="absolute"></div>
                <h3 className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700 mb-2">
                  {stat.value}
                </h3>
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
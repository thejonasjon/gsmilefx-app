import { motion } from "framer-motion"
import { Target, Lightbulb, Users } from "lucide-react"

export default function AboutMission() {
  const cards = [
    {
      title: "Our Mission",
      icon: Target,
      description:
        "To democratize forex trading education and empower individuals with the knowledge, tools, and mentorship needed to achieve consistent profitability in the financial markets.",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Our Vision",
      icon: Lightbulb,
      description:
        "To become the world's leading forex education platform, known for transforming novice traders into professional market participants through our innovative training methods and personalized mentorship.",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Our Values",
      icon: Users,
      description:
        "Integrity, transparency, excellence, and student success are at the core of everything we do. We believe in providing honest education that delivers real results for our community of traders.",
      color: "from-purple-500 to-purple-700",
    },
  ]

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.05),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-fit flex items-center justify-center px-4 py-2 space-x-2 text-sm bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-full backdrop-blur-sm border border-green-500/20 mb-6 mx-auto"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Our Story</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
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

                <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white mb-6 w-fit`}>
                  <card.icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
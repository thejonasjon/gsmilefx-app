import { motion } from "framer-motion"
import { Target, BarChart2, Layers, Handshake, ShieldCheck, Building2 } from "lucide-react"

export default function OurValues() {

  const values = [
    {
      title: "G – Growth-Mindset",
      description: "We believe that mastery is a process. Our community is built on learning, adapting, and evolving with the markets.",
      icon: BarChart2,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "S – Simplicity with Depth",
      description: "We teach complex ideas with clarity — no jargon, just results-driven strategies.",
      icon: Layers,
      color: "from-sky-500 to-blue-700",
    },
    {
      title: "M – Mentorship Before Money",
      description: "We focus on building skilled traders, not selling dreams. We mentor first, and profits follow.",
      icon: Handshake,
      color: "from-purple-500 to-indigo-700",
    },
    {
      title: "I – Integrity in Every Trade",
      description: "No shortcuts. No gimmicks. We practice and teach honesty, risk control, and accountability.",
      icon: ShieldCheck,
      color: "from-orange-500 to-amber-700",
    },
    {
      title: "L – Legacy Building",
      description: "We’re not just creating traders — we’re creating wealth-minded leaders who will teach, impact, and multiply.",
      icon: Building2,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "E – Execution with Precision",
      description: "We prioritize smart, confident execution. No overtrading, no chasing. We trade only when it’s time.",
      icon: Target,
      color: "from-rose-500 to-rose-700",
    }
  ]

  return (
    <section className="relative w-full pt-15 pb-24 bg-black text-white overflow-hidden">
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
          <span>Core Values - The G.SMILE Code</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
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

                <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6 w-fit`}>
                  <value.icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
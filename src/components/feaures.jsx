import { BarChartIcon as ChartBar, Users, BookOpen, Award, TrendingUp, Headphones } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Training Programs</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive training and mentorship to help you succeed in the financial markets
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <ChartBar className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">Technical Analysis</h3>
            <p className="text-center text-gray-500">
              Master chart patterns, indicators, and technical trading strategies
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Users className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">Group Mentorship</h3>
            <p className="text-center text-gray-500">
              Learn alongside peers with guided instruction from expert traders
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BookOpen className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">Trading Fundamentals</h3>
            <p className="text-center text-gray-500">Build a solid foundation with essential trading knowledge</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Award className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">Advanced Strategies</h3>
            <p className="text-center text-gray-500">Develop sophisticated trading approaches for consistent results</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <TrendingUp className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">Risk Management</h3>
            <p className="text-center text-gray-500">
              Learn essential techniques to protect your capital and maximize returns
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Headphones className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">1-on-1 Coaching</h3>
            <p className="text-center text-gray-500">Personalized guidance tailored to your specific trading goals</p>
          </div>
        </div>
      </div>
    </section>
  )
}
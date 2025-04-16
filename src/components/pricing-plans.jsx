import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, X } from "lucide-react";
import { Button } from "../components/ui/button";

export default function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Basic Mentorship",
      description: "For Beginners",
      price: {
        monthly: 149,
        yearly: 1490,
      },
      discount: "Save $298 yearly",
      features: [
        "1-on-1 mentorship sessions (bi-weekly)",
        "Access to exclusive trading community",
        "Trade alerts and market analysis",
        "Personalized trading plan development",
      ],
      notIncluded: ["Daily mentorship sessions", "Advanced trade strategies", "Private trading room access"],
      cta: "Get Started",
      popular: false,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Premium Mentorship",
      description: "Comprehensive Package",
      price: {
        monthly: 250,
        yearly: 2500,
      },
      discount: "Save $500 yearly",
      features: [
        "All Basic Package features",
        "Daily mentorship sessions",
        "Advanced trade strategies and techniques",
        "Personalized coaching and feedback",
      ],
      notIncluded: ["Private trading room access", "Quarterly in-person meetings"],
      cta: "Get Started",
      popular: false,
      color: "from-green-500 to-green-700",
    },
    {
      name: "Elite Mentorship",
      description: "Advanced Package",
      price: {
        monthly: 500,
        yearly: 5000,
      },
      discount: "Save $1,000 yearly",
      features: [
        "All Premium Package features",
        "Private trading room access",
        "High-performance trading strategies",
        "Quarterly in-person meetings (optional)",
        "Priority access to new trading opportunities",
      ],
      notIncluded: [],
      cta: "Get Started",
      popular: true,
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "VIP Mentorship",
      description: "Premium Experience",
      price: {
        monthly: 1250,
        yearly: 12500,
      },
      discount: "Save $2,500 yearly",
      features: [
        "All Elite Package features",
        "Dedicated account management",
        "Customized trading plan development",
        "Priority access to new trading opportunities",
        "24/7 direct access to your mentor",
        "Exclusive VIP trading signals",
      ],
      notIncluded: [],
      cta: "Get Started",
      popular: false,
      color: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
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
            <span>Investment Options</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Pricing <span className="text-green-500">Plans</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Invest in your trading future with our flexible and transparent trading plans. Our programmed training, 1-1
            Mentorship, and Account Management are each designed to provide you with the essential knowledge and
            advanced skills needed to excel in the forex market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex p-1 mt-8 bg-gray-800 rounded-full"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly <span className="text-green-500 font-bold">-20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:-mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border ${
                  plan.popular ? "border-green-500/50" : "border-gray-700"
                } overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] group hover:shadow-[0_0_30px_rgba(0,200,83,0.2)] transition-all duration-300`}
              >
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold text-white">${plan.price[billingPeriod]}</span>
                    <span className="text-gray-400 ml-2">/{billingPeriod === "monthly" ? "package" : "year"}</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <p className="text-green-500 text-sm font-medium mt-1">{plan.discount}</p>
                  )}
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`rounded-full p-1 flex-shrink-0 mt-0.5 bg-gradient-to-r ${plan.color}`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 opacity-50">
                        <div className="rounded-full p-1 flex-shrink-0 mt-0.5 bg-gray-700">
                          <X className="h-3 w-3 text-gray-400" />
                        </div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} hover:brightness-110 text-white border-0 rounded-full group`}
                  >
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-full backdrop-blur-sm border border-green-500/20 text-gray-300">
            <span className="text-green-500 font-semibold">30-Day</span>
            <span className="mx-2">|</span>
            <span>Money-back guarantee on all packages. Discounts available for longer commitments.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
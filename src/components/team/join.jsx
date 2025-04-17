import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";


const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function TeamJoin() {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.15),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl border border-gray-700 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our <span className="text-green-500">Team</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Are you passionate about forex trading and education? We're always looking for talented traders,
              educators, and support staff to join our growing team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white border-0 rounded-full px-8 h-14 text-lg font-medium group"
              >
                View Open Positions
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                className="border border-green-500/50 text-green-500 hover:bg-green-500/10 rounded-full px-8 h-14 text-lg font-medium"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
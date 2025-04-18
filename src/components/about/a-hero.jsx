import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import profilePhotoPlacholder from "../../assets/images/testimonials-profile-photo-placeholder.jpg"


export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-black text-white pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.15),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>

      {/* Forex symbols background */}
      <div className="absolute inset-0 z-0 opacity-5 flex flex-wrap justify-center items-center">
        <div className="absolute top-[10%] left-[5%] animate-float-slow">EUR/USD</div>
        <div className="absolute top-[30%] left-[80%] animate-float-medium">GBP/JPY</div>
        <div className="absolute top-[70%] left-[20%] animate-float-fast">USD/CHF</div>
        <div className="absolute top-[50%] left-[60%] animate-float-slow">AUD/CAD</div>
        <div className="absolute top-[85%] left-[40%] animate-float-medium">NZD/USD</div>
      </div>

      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center justify-center min-h-[80vh]">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-center max-w-4xl mb-6"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
            Traders
          </span>{" "}
          Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
            Market Masters
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 text-center max-w-2xl mb-10"
        >
          Since 2020, GsmileFX has been on a mission to empower traders with the knowledge, strategies, and mentorship
          needed to succeed in the volatile world of forex trading.
        </motion.p>
      </div>
    </section>
  );
}

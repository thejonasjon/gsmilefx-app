import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import profilePhotoPlacholder from "../assets/images/testimonials-profile-photo-placeholder.jpg"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef(null);

  const testimonials = [
    {
      name: "Adeyomi Daniel",
      role: "Forex Trader, Basic to Elite Package",
      // image: "../assets/images/testimonials-profile-photo-placeholder.jpg?height=100&width=100",
      image: "",
      content:
        "The mentorship program at GsmileFX completely transformed my trading. I went from inconsistent results to a structured approach that delivers steady profits. The personalized guidance was exactly what I needed.",
      rating: 5,
    },
    {
      name: "Michael Okorokwo",
      role: "Crypto Trader, Premium Package",
      image: "",
      content:
        "The technical analysis training helped me identify high-probability setups I was missing before. My win rate has improved dramatically since joining. The supply and demand strategy changed everything for me.",
      rating: 5,
    },
    {
      name: "Blessing Williams",
      role: "Stock Trader, VIP Package",
      image: "",
      content:
        "The 1-on-1 coaching sessions were invaluable. Having an experienced mentor review my trades and provide personalized feedback accelerated my growth tremendously. I'm now consistently profitable.",
      rating: 5,
    },
    {
      name: "Jonas Jon",
      role: "Forex Trader, Elite Package",
      image: "",
      content:
        "After trying multiple trading courses, GsmileFX was the only one that delivered real results. The mentors don't just teach theory - they show you exactly how to apply strategies in real market conditions.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
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
            <span>Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Trader <span className="text-green-500">Testimonials</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[800px] text-gray-400 text-lg"
          >
            Don&apos;t just take our word for it - hear from our satisfied clients who have transformed their trading
            careers with our courses and mentorship
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={testimonialsRef}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg italic mb-8 text-center">"{testimonial.content}"</p>
                    <div className="flex items-center justify-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-green-500">
                        <img
                          src={testimonial.image || profilePhotoPlacholder}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="ml-4 text-left">
                        <h3 className="font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full p-3 text-white shadow-lg hover:brightness-110 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full p-3 text-white shadow-lg hover:brightness-110 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-green-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "../components/ui/use-toast";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl border border-gray-700 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-full filter blur-[100px] opacity-20"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with <span className="text-green-500">GsmileFX</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for trading tips, market insights, and exclusive offers delivered straight to
              your inbox
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                className="flex-1 bg-gray-800/50 border-gray-700 text-white focus:border-green-500 focus:ring-green-500 h-12 rounded-4xl px-6"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-700 hover:brightness-110 text-white border-0 rounded-full px-6 h-12 font-medium group whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
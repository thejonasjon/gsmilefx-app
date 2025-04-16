import { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

// Replace with relative path or adjust based on your project structure
import { Button } from "../components/ui/button";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.random() * 0.5 + 0.1})`,
      });
    }

    const drawCandlestick = (x, y, width, height, isUp) => {
      const color = isUp ? "rgba(0, 200, 83, 0.2)" : "rgba(255, 50, 50, 0.2)";
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x + width / 2, y - 10);
      ctx.lineTo(x + width / 2, y + height + 10);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      if (Math.random() > 0.9) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 10 + 5;
        const height = Math.random() * 30 + 10;
        drawCandlestick(x, y, width, height, Math.random() > 0.5);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ filter: "blur(2px)" }}
      ></canvas>

      <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-10 text-4xl font-bold">
        <div className="absolute top-[10%] left-[5%] animate-float-slow">EUR/USD</div>
        <div className="absolute top-[30%] left-[80%] animate-float-medium">GBP/JPY</div>
        <div className="absolute top-[70%] left-[20%] animate-float-fast">USD/CHF</div>
        <div className="absolute top-[50%] left-[60%] animate-float-slow">AUD/CAD</div>
        <div className="absolute top-[85%] left-[40%] animate-float-medium">NZD/USD</div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 space-x-2 text-sm bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-full backdrop-blur-sm border border-green-500/20 w-fit mx-auto md:mx-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Elite Forex Training</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
                Master the Markets
              </span>
              <span className="block mt-2">Trade Like a Pro</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg">
              Elevate your trading with cutting-edge strategies, personalized mentorship, and proven systems that
              deliver consistent results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white border-0 rounded-full px-8 h-14 text-lg font-medium group"
              >
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-gray-100 to-gray-300 hover:bg-transparent hover:from-transparent hover:to-transparent hover:border hover:border-green-500/50 text-green-500 hover:text-gray-100 rounded-full px-8 h-14 text-lg font-medium"
              >
                Explore Programs
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-8 pt-6">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-green-500">85%</span>
                <span className="text-sm text-gray-400">Success Rate</span>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-green-500">24/7</span>
                <span className="text-sm text-gray-400">Support</span>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-green-500">10k+</span>
                <span className="text-sm text-gray-400">Traders</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl border border-green-500/20 shadow-[0_0_40px_rgba(0,200,83,0.2)] backdrop-blur-sm">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-700 rounded-full p-4 shadow-lg">
                <div className="text-xs font-bold">PROFIT</div>
                <div className="text-2xl font-bold">+573%</div>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gsmile%20logo_greenxblack-xnnULAgBmfC69qyZt3JDCnBZqZzyQb.png"
                alt="GsmileFX Logo"
                width={500}
                height={300}
                className="rounded-3xl object-contain p-4"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronRight className="h-8 w-8 text-green-500 rotate-90" />
        </div>
      </div>
    </section>
  );
}
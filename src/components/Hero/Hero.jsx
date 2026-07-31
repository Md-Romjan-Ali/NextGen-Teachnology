"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay, FiCode, FiLayout, FiZap, FiShield } from "react-icons/fi";

const floatingCards = [
  { icon: <FiCode />, label: "Clean Code", sub: "Best Practices", color: "from-blue-600 to-cyan-500", delay: 0 },
  { icon: <FiLayout />, label: "Modern UI/UX", sub: "Pixel Perfect", color: "from-purple-600 to-pink-500", delay: 0.2 },
  { icon: <FiZap />, label: "Fast Delivery", sub: "On Time", color: "from-teal-500 to-green-500", delay: 0.4 },
  { icon: <FiShield />, label: "Secure & Scalable", sub: "Enterprise Grade", color: "from-orange-500 to-red-500", delay: 0.6 },
];

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-[#0F172A] pt-16"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[120px] dark:bg-blue-700/20"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/20 blur-[120px] dark:bg-teal-600/20"
        />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              🚀 Top-Rated Software Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            >
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500">
                Modern Web
              </span>{" "}
              Applications for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                Businesses Worldwide
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              NextGen Technology specializes in web development, UI/UX design, SaaS products, and scalable digital solutions. We turn your ideas into enterprise-grade applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Started
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button
                onClick={() => scrollTo("#projects")}
                className="group flex items-center gap-2 px-6 py-3.5 bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-800 dark:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <FiPlay size={16} />
                View Projects
              </button>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center justify-center min-h-[350px]">
            {/* Glowing rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-blue-500/10 dark:border-blue-500/5" />
            <div className="absolute w-[280px] h-[280px] rounded-full border border-teal-500/10 dark:border-teal-500/5 animate-pulse" />

            {/* Simulated Code Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-80 h-80 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden p-5"
            >
              {/* Top Window Bar */}
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 h-5 ml-2 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center px-3">
                  <span className="text-[10px] text-slate-400">nextgentech.io/builder</span>
                </div>
              </div>

              {/* Code text */}
              {[
                { color: "text-blue-600 dark:text-blue-400", content: "const project = new DigitalProduct();" },
                { color: "text-teal-600 dark:text-teal-400", content: "project.setAesthetics('Premium');" },
                { color: "text-purple-600 dark:text-purple-400", content: "project.enableScale('Enterprise');" },
                { color: "text-green-600 dark:text-green-400", content: "await project.deploy();" },
                { color: "text-slate-400 dark:text-slate-500", content: "// Ready for global launch!" },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`font-mono text-xs ${line.color} leading-6`}
                >
                  {line.content}
                </motion.div>
              ))}

              <div className="absolute bottom-5 right-5 w-24 h-24 bg-blue-500/10 dark:bg-blue-600/20 blur-2xl rounded-full" />
            </motion.div>

            {/* Floating Badges */}
            {floatingCards.map((card, i) => {
              const positions = [
                { top: "-5%", left: "-5%" },
                { top: "-5%", right: "-5%" },
                { bottom: "5%", left: "-5%" },
                { bottom: "5%", right: "-5%" },
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.6 + i * 0.1 },
                    scale: { duration: 0.5, delay: 0.6 + i * 0.1 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                  }}
                  style={{ position: "absolute", ...positions[i] }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-sm"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-white text-sm`}>
                    {card.icon}
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-[10px] font-black text-slate-800 dark:text-white whitespace-nowrap">{card.label}</div>
                    <div className="text-[8px] text-slate-500 dark:text-slate-400">{card.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

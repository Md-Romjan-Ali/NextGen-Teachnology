"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function CTA() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden text-center">
      {/* Animated gradient container */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-700/30 via-indigo-600/20 to-teal-600/30 blur-[90px] rounded-full"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Start Launching
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
        >
          Ready to Build Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Digital Product?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Transform your digital blueprints into dynamic, responsive software frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 animate-reveal"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Start Your Project
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl text-xs hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <FiMessageCircle size={14} /> Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

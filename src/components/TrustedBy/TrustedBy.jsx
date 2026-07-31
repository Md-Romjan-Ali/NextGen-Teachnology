"use client";
import { motion } from "framer-motion";
import { trustedCompanies } from "@/lib/data";

export default function TrustedBy() {
  const doubled = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="py-12 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="relative">
        {/* Fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-r from-slate-50 dark:from-[#0F172A] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-l from-slate-50 dark:from-[#0F172A] to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 py-2"
          >
            {doubled.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-lg cursor-default transition-colors shrink-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

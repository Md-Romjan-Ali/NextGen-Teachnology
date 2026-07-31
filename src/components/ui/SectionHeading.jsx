"use client";
import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${
          light ? "text-white" : "text-[#0F172A] dark:text-white"
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

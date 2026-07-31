"use client";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiAward, FiCode, FiZap, FiTrendingUp, FiMonitor, FiHeadphones } from "react-icons/fi";

const iconMap = { FiAward, FiCode, FiZap, FiTrendingUp, FiMonitor, FiHeadphones };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Us"
          title={<>Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">NextGen</span></>}
          subtitle="We combine standard architectural patterns, high-fidelity UI/UX design, and round-the-clock support to guarantee delivery success."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.08, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={18} />}
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

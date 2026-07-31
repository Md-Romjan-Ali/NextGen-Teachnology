"use client";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiCheck, FiX } from "react-icons/fi";

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pricing Plans"
          title={<>Flexible & Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Pricing</span></>}
          subtitle="Simple pricing configurations built to scale along with your digital business lifecycle."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-blue-500 shadow-xl shadow-blue-500/10 scale-105"
                  : "border border-slate-200 dark:border-white/10"
              } bg-white dark:bg-[#0F172A] p-8`}
            >
              {plan.highlighted && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-black tracking-widest uppercase">
                  POPULAR
                </span>
              )}

              <h4 className="text-lg font-black text-slate-800 dark:text-white mb-2">{plan.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {plan.description}
              </p>

              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-800 dark:text-white">{plan.price}</span>
                <span className="text-slate-400 text-xs ml-1">{plan.period}</span>
              </div>

              <div className="h-[1px] bg-slate-200 dark:bg-white/10 mb-6" />

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5">
                    <FiCheck size={14} className="text-blue-500 shrink-0" />
                    <span className="text-xs text-slate-600 dark:text-slate-300">{feat}</span>
                  </li>
                ))}
                {plan.notIncluded?.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 opacity-40">
                    <FiX size={14} className="text-slate-400 shrink-0" />
                    <span className="text-xs text-slate-400 line-through">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiChevronDown } from "react-icons/fi";

function FAQCard({ faq, idx }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      className={`rounded-2xl border transition-all ${
        open
          ? "bg-blue-600/5 dark:bg-blue-500/5 border-blue-500/20"
          : "bg-white dark:bg-[#0F172A] border-slate-200 dark:border-white/10"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-slate-800 dark:text-white text-xs md:text-sm">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="text-slate-400 dark:text-slate-500"
        >
          <FiChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title={<>Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Questions</span></>}
          subtitle="Everything you need to know about working with NextGen Technology. Find answers to support and delivery questions."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <FAQCard key={idx} faq={faq} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

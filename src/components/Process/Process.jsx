"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  FiSearch, FiLayout, FiCode, FiCheckCircle, FiUploadCloud, FiTool,
} from "react-icons/fi";

const iconMap = { FiSearch, FiLayout, FiCode, FiCheckCircle, FiUploadCloud, FiTool };

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Flow"
          title={<>Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Process</span></>}
          subtitle="How we take your digital ideas from whiteboard concepts to market-ready global products."
        />

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-600 to-teal-500 rounded-full origin-top"
            />
          </div>

          <div className="space-y-12">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon];
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card content */}
                  <div className="ml-16 md:ml-0 md:w-[calc(50%-32px)]">
                    <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-600/10 px-2 py-0.5 rounded">
                          {step.step}
                        </span>
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-15">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white shadow-lg">
                      {Icon && <Icon size={18} />}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

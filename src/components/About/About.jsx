"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { stats, coreValues } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiZap, FiShield, FiUsers, FiTarget } from "react-icons/fi";

const iconMap = { FiZap, FiShield, FiUsers, FiTarget };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <SectionHeading
              badge="About NextGen"
              title={<>Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Are</span></>}
              subtitle={null}
              centered={false}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            >
              Founded with the vision to drive digital excellence, <strong className="text-slate-900 dark:text-white">NextGen Technology</strong> is a premium software development and design agency. We partner with startups, SaaS platforms, and enterprise businesses to transform bold ideas into robust digital products.
            </motion.p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20"
              >
                <h4 className="font-bold text-[#0F172A] dark:text-white mb-2">🎯 Our Mission</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  To empower businesses by building state-of-the-art web apps and digital products that accelerate growth and performance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/20"
              >
                <h4 className="font-bold text-[#0F172A] dark:text-white mb-2">🔭 Our Vision</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  To be the global benchmark for web engineering, design excellence, and transparent engineering processes.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((val, i) => {
                const Icon = iconMap[val.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      {Icon && <Icon size={16} />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 dark:text-white">{val.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{val.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-slate-800 border border-white/10 aspect-[4/3] flex items-center justify-center p-8 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-600/10 blur-3xl rounded-full" />

              {/* office illustration */}
              <div className="relative text-center max-w-sm w-full">
                <div className="flex justify-center gap-6">
                  {["👨‍💻", "🎨", "🚀"].map((avatar, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                      className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-lg backdrop-blur-sm"
                    >
                      {avatar}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  {["Product Strategy", "High-fidelity Prototyping", "Scalable Coding"].map((label, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs w-32 text-left">{label}</span>
                      <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${[90, 85, 95][idx]}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1, duration: 1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                        />
                      </div>
                      <span className="text-slate-400 text-xs">{[90, 85, 95][idx]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center shadow-sm"
                >
                  <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                    {inView ? <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} /> : `0${stat.suffix}`}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

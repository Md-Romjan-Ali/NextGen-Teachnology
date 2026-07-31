"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  const active = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 blur-[90px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/10 blur-[90px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Reviews"
          title={<>Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Feedback</span></>}
          subtitle="See how our products help teams speed up processes and hit their business KPIs."
          light={true}
        />

        <div className="max-w-3xl mx-auto">
          {/* Card Carousel */}
          <div className="relative min-h-[220px] overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(active.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-sm md:text-base text-white/80 italic leading-relaxed mb-6">
                  &quot;{active.review}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center text-white text-xs font-black`}>
                    {active.initials}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{active.name}</h5>
                    <p className="text-slate-400 text-[11px]">{active.role} · {active.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === current ? "w-6 bg-blue-500" : "w-1.5 bg-white/30"
                  }`}
                  aria-label={`Testimonial ${i}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => slide(-1)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/5 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Previous"
              >
                <FiChevronLeft size={16} />
              </button>
              <button
                onClick={() => slide(1)}
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Next"
              >
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

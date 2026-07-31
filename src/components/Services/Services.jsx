"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  FiCode, FiSmartphone, FiLayout, FiShoppingCart,
  FiCloud, FiGitMerge, FiServer, FiTool, FiArrowRight,
} from "react-icons/fi";

const iconMap = {
  FiCode, FiSmartphone, FiLayout, FiShoppingCart,
  FiCloud, FiGitMerge, FiServer, FiTool,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Expertise"
          title={<>Services We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Provide</span></>}
          subtitle="From early-stage design prototypes to global-scale cloud deployments, we craft robust end-to-end digital solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-default overflow-hidden"
              >
                {/* Gradient Border Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]`} />
                <div className="absolute inset-[1px] rounded-[14px] bg-white dark:bg-[#0F172A] z-0" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {Icon && <Icon size={20} />}
                  </div>

                  <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all">
                    Learn More <FiArrowRight size={13} />
                  </button>
                </div>

                {/* Ambient glow inside */}
                <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.06] blur-xl rounded-full transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

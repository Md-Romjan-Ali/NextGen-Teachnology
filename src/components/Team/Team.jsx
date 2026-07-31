"use client";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Minds"
          title={<>Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Team</span></>}
          subtitle="Experienced developers, creative UI designers, and skilled cloud specialists collaborate to build your product."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image Banner */}
              <div className={`relative h-44 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                <span className="text-white/20 text-6xl font-black">{member.initials}</span>
                <div className="absolute bottom-[-24px] w-16 h-16 rounded-full bg-white dark:bg-[#0F172A] border-4 border-white dark:border-[#0F172A] shadow-md flex items-center justify-center">
                  <span className="text-2xl font-bold">{member.initials}</span>
                </div>
              </div>

              {/* Details */}
              <div className="pt-8 pb-5 px-5 text-center">
                <h4 className="font-bold text-slate-800 dark:text-white text-sm">{member.name}</h4>
                <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.position}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="flex justify-center items-center gap-2.5">
                  <a href={member.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <FiGithub size={15} />
                  </a>
                  <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <FiLinkedin size={15} />
                  </a>
                  <a href={member.facebook} className="text-slate-400 hover:text-blue-500 transition-colors">
                    <FiFacebook size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

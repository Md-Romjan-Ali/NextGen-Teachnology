"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { generateShareContent } from "@/lib/shareUtils";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiExternalLink, FiGithub, FiShare2, FiMail } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import Image from "next/image";

const filters = ["All", "Web", "Mobile", "Dashboard", "E-Commerce"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [openShareId, setOpenShareId] = useState(null);

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Portfolio"
          title={<>Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Projects</span></>}
          subtitle="Discover some of our recently deployed digital products, custom web portals, and mobile projects."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${active === filter
                ? "text-white shadow-md shadow-blue-500/20"
                : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
            >
              {active === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{filter}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const shares = generateShareContent(project);
              const isShareOpen = openShareId === project.id;
              const shareUrl = project.liveUrl;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-2xl"
                >
                  {/* Visual Placeholder for Project Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>

                    <Image
                      width={600}
                      height={400}
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-black">{project.name[0]}</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0F172A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 px-4 py-2 bg-white text-[#0F172A] text-xs font-bold rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        <FiExternalLink size={13} /> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-bold rounded-xl hover:bg-white/20 transition-colors"
                      >
                        <FiGithub size={13} /> GitHub
                      </a>
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-lg text-white text-[10px] font-semibold border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold text-slate-800 dark:text-white">
                        {project.name}
                      </h3>

                      {/* Social Share Menu */}
                      <div className="relative">
                        <button
                          onClick={() => setOpenShareId(isShareOpen ? null : project.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                          title="Share Project"
                        >
                          <FiShare2 size={15} />
                        </button>

                        <AnimatePresence>
                          {isShareOpen && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: 5 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 5 }}
                              className="absolute right-0 mt-2 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-xl flex gap-1.5 z-20"
                            >
                              <WhatsappShareButton
                                url={shareUrl}
                                title={shares.whatsapp}
                              >
                                <span className="w-7 h-7 rounded-lg bg-green-500/10 hover:bg-green-500 flex items-center justify-center text-green-500 hover:text-white transition-colors cursor-pointer" title="Share on WhatsApp">
                                  <FaWhatsapp size={13} />
                                </span>
                              </WhatsappShareButton>

                              <LinkedinShareButton
                                url={shareUrl}
                                title={project.name}
                                summary={shares.linkedin}
                              >
                                <span className="w-7 h-7 rounded-lg bg-blue-700/10 hover:bg-blue-700 flex items-center justify-center text-blue-700 hover:text-white transition-colors cursor-pointer" title="Share on LinkedIn">
                                  <FaLinkedinIn size={12} />
                                </span>
                              </LinkedinShareButton>

                              <FacebookShareButton
                                url={shareUrl}
                                quote={shares.facebook}
                              >
                                <span className="w-7 h-7 rounded-lg bg-blue-600/10 hover:bg-blue-600 flex items-center justify-center text-blue-600 hover:text-white transition-colors cursor-pointer" title="Share on Facebook">
                                  <FaFacebookF size={12} />
                                </span>
                              </FacebookShareButton>

                              <TwitterShareButton
                                url={shareUrl}
                                title={shares.twitter}
                              >
                                <span className="w-7 h-7 rounded-lg bg-slate-800/10 dark:bg-white/5 hover:bg-slate-800 dark:hover:bg-white/10 flex items-center justify-center text-slate-800 dark:text-white transition-colors cursor-pointer" title="Share on Twitter / X">
                                  <FaTwitter size={12} />
                                </span>
                              </TwitterShareButton>

                              <TelegramShareButton
                                url={shareUrl}
                                title={shares.telegram}
                              >
                                <span className="w-7 h-7 rounded-lg bg-sky-500/10 hover:bg-sky-500 flex items-center justify-center text-sky-500 hover:text-white transition-colors cursor-pointer" title="Share on Telegram">
                                  <FaTelegramPlane size={13} />
                                </span>
                              </TelegramShareButton>

                              <EmailShareButton
                                url={shareUrl}
                                subject={shares.emailSubject}
                                body={shares.emailBody}
                              >
                                <span className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500 flex items-center justify-center text-red-500 hover:text-white transition-colors cursor-pointer" title="Share via Email">
                                  <FiMail size={13} />
                                </span>
                              </EmailShareButton>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-blue-600/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-semibold rounded-lg border border-blue-600/10 dark:border-blue-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}



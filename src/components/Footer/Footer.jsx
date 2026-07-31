"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiArrowUp, FiMail } from "react-icons/fi";

const footerLinks = {
  "Services": ["Web Development", "Mobile Apps", "UI/UX Design", "E-Commerce", "SaaS Development", "API Development"],
  "Company": ["About Us", "Our Team", "Projects", "Process", "Pricing", "FAQ"],
  "Resources": ["Blog", "Case Studies", "Documentation", "Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#080e1a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand details */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm">N</span>
              </div>
              <span className="text-base font-extrabold text-white">
                NextGen<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"> Technology</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-6 max-w-xs">
              Transforming Ideas into Digital Solutions. We engineer premium websites, SaaS portals, and custom apps.
            </p>

            {/* Social details */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-white font-bold text-xs mb-4">{heading}</h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-white text-xs transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter bar */}
        <div className="py-8 border-y border-white/5 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h5 className="text-white font-bold text-xs flex items-center gap-2 mb-1">
                <FiMail className="text-blue-400" /> Subscribe to our Newsletter
              </h5>
              <p className="text-slate-500 text-xs">Stay up-to-date with our latest releases, insights, and case studies.</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-1.5 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs font-semibold">
                  ✓ Subscribed successfully!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 md:w-56 px-4 py-2 bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl text-white text-xs placeholder-slate-600 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Copyright bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} NextGen Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-600 text-[10px]">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating scroll up trigger */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

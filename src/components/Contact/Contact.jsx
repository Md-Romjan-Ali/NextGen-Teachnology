"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from "react-icons/fi";

const iconMap = { FiMapPin, FiPhone, FiMail, FiClock };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setSubmitted(true);
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) =>
    `w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border ${
      errors[field]
        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
        : "border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500/20"
    } text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-xs focus:outline-none focus:ring-2 transition-all`;

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title={<>Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Incredible</span></>}
          subtitle="Ready to start your next project? Get in touch with our team of specialists."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = iconMap[info.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    {Icon && <Icon size={16} />}
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </span>
                    <span className="text-xs md:text-sm text-slate-800 dark:text-slate-300 font-semibold leading-relaxed">
                      {info.value}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                  <FiCheck size={30} className="text-green-500" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">Message Received!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mb-6">
                  Thank you for reaching out. A NextGen specialist will email you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Send New Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={inputStyle("name")}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className={inputStyle("email")}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className={inputStyle("company")}
                    />
                  </div>
                  <div>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject *"
                      className={inputStyle("subject")}
                    />
                    {errors.subject && <p className="text-red-500 text-[10px] mt-1">{errors.subject}</p>}
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, target audience, and timeline *"
                    className={`${inputStyle("message")} resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                </div>

                {submitError && (
                  <p className="text-red-500 text-[11px] font-medium bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-75 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={13} /> Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Map Embedded below */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          />
        </div>
      </div>
    </section>
  );
}

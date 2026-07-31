import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Process from "@/components/Process/Process";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Projects />
        <Process />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

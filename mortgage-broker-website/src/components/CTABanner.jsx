import React from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-[#142B56] text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="section-container">
        <div className="relative text-center max-w-4xl mx-auto border border-white/15 rounded-[2rem] px-6 py-12 md:px-12 bg-white/5 backdrop-blur-sm">
          <p className="section-eyebrow !bg-white/10 !text-accent-light !border-white/20 mb-5">
            Let's structure your next move
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Take the first step towards your dream home. Book a free
            consultation with our expert mortgage brokers today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent to-accent-dark hover:brightness-105 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 shadow-brand transform hover:-translate-y-0.5 inline-flex items-center gap-3 text-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1300000000"
              className="bg-transparent border border-white/50 hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 1300 000 000
            </a>
          </div>

          <p className="text-white/70 mt-8 text-sm">
            No obligation • Free service • Expert advice
          </p>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-accent-dark text-white">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-accent-light mb-10 leading-relaxed">
            Take the first step towards your dream home. Book a free consultation 
            with our expert mortgage brokers today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-accent hover:bg-neutral-50 font-semibold px-10 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3 text-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1300000000"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 1300 000 000
            </a>
          </div>

          <p className="text-accent-light mt-8 text-sm">
            No obligation • Free service • Expert advice
          </p>
        </div>
      </div>
    </section>
  );
}

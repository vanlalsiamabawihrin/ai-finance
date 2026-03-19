import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanType: "home-purchase",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quick enquiry:", formData);
  };

  return (
    <section
      id="home"
      className="relative pt-40 md:pt-44 pb-16 md:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 -z-20" />
      <div className="absolute top-20 -left-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow mb-6">
              Trusted by 2,500+ Australian homeowners
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-6 tracking-tight">
              Premium Mortgage
              <span className="block text-accent mt-2">
                Strategy, Personalised
              </span>
            </h1>

            <p className="text-xl text-primary/70 mb-8 leading-relaxed max-w-xl">
              We combine deep lender access with high-touch advisory so your
              loan structure is built for today and for your long-term wealth
              goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#calculators"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Calculate Repayments
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-primary/80">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>No upfront fees - free consultation</span>
              </div>
              <div className="flex items-center gap-3 text-primary/80">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Compare 40+ lenders in minutes</span>
              </div>
              <div className="flex items-center gap-3 text-primary/80">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Expert guidance from application to settlement</span>
              </div>
            </div>
          </div>

          <div className="relative bg-white/90 border border-white rounded-[2rem] shadow-card p-6 sm:p-8 lg:p-10 backdrop-blur">
            <div className="absolute -top-4 right-4 sm:right-8 bg-primary text-white text-[11px] font-semibold px-3 sm:px-4 py-2 rounded-full tracking-wide">
              24h Response Promise
            </div>

            <h3 className="text-2xl font-bold text-primary mb-2">
              Quick Loan Enquiry
            </h3>
            <p className="text-primary/70 mb-6">
              Get a free assessment in 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Type
                </label>
                <select
                  value={formData.loanType}
                  onChange={(e) =>
                    setFormData({ ...formData, loanType: e.target.value })
                  }
                  className="field-input"
                >
                  <option value="home-purchase">Home Purchase</option>
                  <option value="refinance">Refinance</option>
                  <option value="investment">Investment Property</option>
                  <option value="construction">Construction Loan</option>
                  <option value="first-home">First Home Buyer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="text"
                  placeholder="e.g., $500,000"
                  value={formData.loanAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, loanAmount: e.target.value })
                  }
                  className="field-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="field-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="04XX XXX XXX"
                  className="field-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="field-input"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Get My Free Assessment
              </button>

              <p className="text-xs text-primary/60 text-center">
                By submitting, you agree to our privacy policy. We'll never
                share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

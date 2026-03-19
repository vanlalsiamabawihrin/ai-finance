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
      className="pt-40 pb-20 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
              Your Dream Home
              <span className="block text-accent mt-2">Starts Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert mortgage brokers helping Australians secure the best home
              loan deals. Access to 40+ lenders, competitive rates, and
              personalised service.
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
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>No upfront fees - free consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Compare 40+ lenders in minutes</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Expert guidance from application to settlement</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-soft p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Quick Loan Enquiry
            </h3>
            <p className="text-gray-600 mb-6">
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
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="04XX XXX XXX"
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Get My Free Assessment
              </button>

              <p className="text-xs text-gray-500 text-center">
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

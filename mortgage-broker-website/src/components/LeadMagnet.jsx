import React from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead magnet download:", formData);
  };

  const benefits = [
    "Step-by-step home buying checklist",
    "How to improve your borrowing capacity",
    "Understanding interest rates and loan types",
    "First home buyer grants and schemes",
    "Tips to speed up loan approval",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-accent-light font-semibold">
                FREE DOWNLOAD
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Ultimate Australian Home Buyer's Guide
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Download our comprehensive 30-page guide packed with insider tips,
              checklists, and strategies to help you secure your dream home.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-accent-light">
              <Download className="w-6 h-6" />
              <span className="font-semibold">
                Instant PDF Download - No Credit Card Required
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-soft p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Get Your Free Guide
            </h3>
            <p className="text-gray-600 mb-6">
              Enter your details to download instantly
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Free Guide
              </button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

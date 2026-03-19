import React from "react";
import { TrendingDown, Clock, Shield, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingDown,
      title: "Better Rates",
      description:
        "Access exclusive rates and deals not available to the public. We negotiate on your behalf with 40+ lenders.",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "We handle all the paperwork, comparisons, and negotiations. Get approved faster with expert guidance.",
    },
    {
      icon: Shield,
      title: "No Hidden Fees",
      description:
        "Completely free service for borrowers. We are paid by the lender, so you get expert advice at no cost.",
    },
    {
      icon: Award,
      title: "Expert Support",
      description:
        "15+ years of experience helping Australians secure their dream homes. From pre-approval to settlement.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">
            Why clients choose AI Finance
          </span>
          <h2 className="premium-heading mb-4">Why Choose Us?</h2>
          <p className="text-xl text-primary/65 max-w-2xl mx-auto">
            We are not just mortgage brokers - we are your partners in achieving
            homeownership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center mb-6 shadow-brand">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

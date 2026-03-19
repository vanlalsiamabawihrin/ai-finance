import React from "react";
import { Users, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function LoanTypes() {
  const borrowerTypes = [
    {
      icon: Sparkles,
      title: "First Home Buyers",
      features: [
        "First Home Owner Grants",
        "Low deposit options (5%)",
        "Stamp duty concessions",
        "Government schemes",
      ],
    },
    {
      icon: Users,
      title: "Families & Upgraders",
      features: [
        "Larger loan amounts",
        "Equity release options",
        "Flexible repayment terms",
        "Offset account benefits",
      ],
    },
    {
      icon: Briefcase,
      title: "Self-Employed",
      features: [
        "Low-doc loan options",
        "Alternative income verification",
        "Tax-effective structures",
        "Business asset lending",
      ],
    },
    {
      icon: GraduationCap,
      title: "Professionals",
      features: [
        "Higher borrowing capacity",
        "Professional packages",
        "Premium rate discounts",
        "Waived LMI options",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Tailored loan pathways</span>
          <h2 className="premium-heading mb-4">Loans for Every Borrower</h2>
          <p className="text-xl text-primary/65 max-w-2xl mx-auto">
            Tailored solutions for your unique situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {borrowerTypes.map((type, index) => (
            <div key={index} className="card group hover:-translate-y-1">
              <div className="h-1.5 bg-gradient-to-r from-accent/70 to-accent-dark/70 rounded-full mb-6" />
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/5 border border-accent/30 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/10">
                  <type.icon className="w-7 h-7 text-accent-dark" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-6">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-primary/70"
                    >
                      <span className="text-accent mt-[2px]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-20 bg-neutral-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are not just mortgage brokers - we are your partners in achieving
            homeownership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center mb-6">
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

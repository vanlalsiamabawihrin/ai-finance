import { Home, RefreshCw, Building2, Hammer, Heart, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Home Purchase Loans',
      description: 'First home or upgrading? We find the perfect loan for your dream property.',
    },
    {
      icon: RefreshCw,
      title: 'Refinancing',
      description: 'Lower your rate, reduce repayments, or access equity. We compare all options.',
    },
    {
      icon: Building2,
      title: 'Investment Loans',
      description: 'Build your property portfolio with tailored investment loan solutions.',
    },
    {
      icon: Hammer,
      title: 'Construction Loans',
      description: 'Building your dream home? We arrange construction and land loans.',
    },
    {
      icon: Heart,
      title: 'First Home Buyer',
      description: 'Special programs, grants, and guidance for first-time buyers.',
    },
    {
      icon: TrendingUp,
      title: 'Commercial Loans',
      description: 'Business property finance and commercial lending solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive mortgage solutions for every situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card hover:border-2 hover:border-accent cursor-pointer"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="#contact" className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
}

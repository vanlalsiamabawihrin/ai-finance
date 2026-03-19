import { MessageSquare, FileSearch, CheckCircle2, Key } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'Book a no-obligation chat to discuss your goals, budget, and circumstances.',
      step: '01',
    },
    {
      icon: FileSearch,
      title: 'Compare & Recommend',
      description: 'We search 40+ lenders to find the best rates and loan features for you.',
      step: '02',
    },
    {
      icon: CheckCircle2,
      title: 'Application & Approval',
      description: 'We handle all paperwork and liaise with lenders to secure your approval.',
      step: '03',
    },
    {
      icon: Key,
      title: 'Settlement',
      description: 'We guide you through to settlement and beyond. Your success is our success.',
      step: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="text-6xl font-bold text-accent/30 mb-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-accent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

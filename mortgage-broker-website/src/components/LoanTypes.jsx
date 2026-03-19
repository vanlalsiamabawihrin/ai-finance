import { Users, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export default function LoanTypes() {
  const borrowerTypes = [
    {
      icon: Sparkles,
      title: 'First Home Buyers',
      features: [
        'First Home Owner Grants',
        'Low deposit options (5%)',
        'Stamp duty concessions',
        'Government schemes',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Families & Upgraders',
      features: [
        'Larger loan amounts',
        'Equity release options',
        'Flexible repayment terms',
        'Offset account benefits',
      ],
      color: 'from-accent to-accent-dark',
    },
    {
      icon: Briefcase,
      title: 'Self-Employed',
      features: [
        'Low-doc loan options',
        'Alternative income verification',
        'Tax-effective structures',
        'Business asset lending',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      title: 'Professionals',
      features: [
        'Higher borrowing capacity',
        'Professional packages',
        'Premium rate discounts',
        'Waived LMI options',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Loans for Every Borrower
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for your unique situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {borrowerTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-6">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-accent mt-1">✓</span>
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

import { Calculator, PiggyBank, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Calculators() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateRepayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  const calculatorTools = [
    {
      icon: Calculator,
      title: 'Repayment Calculator',
      description: 'Calculate your monthly home loan repayments',
    },
    {
      icon: PiggyBank,
      title: 'Borrowing Power',
      description: 'Find out how much you can borrow',
    },
    {
      icon: TrendingUp,
      title: 'Refinance Savings',
      description: 'See how much you could save by refinancing',
    },
  ];

  return (
    <section id="calculators" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Mortgage Calculators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your finances with our free calculators
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {calculatorTools.map((tool, index) => (
            <div
              key={index}
              className="card text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <tool.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {tool.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {tool.description}
              </p>
              <button className="text-accent font-semibold hover:underline">
                Use Calculator →
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-50 to-white rounded-3xl shadow-soft p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Quick Repayment Calculator
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Loan Amount
              </label>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full mb-2"
              />
              <div className="text-2xl font-bold text-accent">
                ${loanAmount.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Interest Rate (%)
              </label>
              <input
                type="range"
                min="2"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full mb-2"
              />
              <div className="text-2xl font-bold text-accent">
                {interestRate.toFixed(2)}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Loan Term (Years)
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full mb-2"
              />
              <div className="text-2xl font-bold text-accent">
                {loanTerm} years
              </div>
            </div>
          </div>

          <div className="bg-accent rounded-2xl p-8 text-white text-center">
            <p className="text-lg mb-2">Estimated Monthly Repayment</p>
            <p className="text-5xl font-bold mb-2">
              ${Number(calculateRepayment()).toLocaleString()}
            </p>
            <p className="text-accent-light text-sm">
              *This is an estimate only. Actual repayments may vary.
            </p>
          </div>

          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary inline-block">
              Get Accurate Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

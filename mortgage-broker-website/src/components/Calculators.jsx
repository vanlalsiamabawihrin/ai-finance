import React from "react";
import { Calculator, PiggyBank, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Calculators() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateRepayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  const calculatorTools = [
    {
      icon: Calculator,
      title: "Repayment Calculator",
      description: "Calculate your monthly home loan repayments",
    },
    {
      icon: PiggyBank,
      title: "Borrowing Power",
      description: "Find out how much you can borrow",
    },
    {
      icon: TrendingUp,
      title: "Refinance Savings",
      description: "See how much you could save by refinancing",
    },
  ];

  return (
    <section
      id="calculators"
      className="py-24 bg-gradient-to-b from-white to-neutral-50"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Plan with confidence</span>
          <h2 className="premium-heading mb-4">Mortgage Calculators</h2>
          <p className="text-xl text-primary/65 max-w-2xl mx-auto">
            Plan your finances with our free calculators
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {calculatorTools.map((tool, index) => (
            <div
              key={index}
              className="card text-center hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/5 border border-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <tool.icon className="w-8 h-8 text-accent-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {tool.title}
              </h3>
              <p className="text-primary/70 mb-4">{tool.description}</p>
              <button className="text-accent-dark font-semibold hover:underline">
                Use Calculator →
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white/90 border border-white rounded-3xl shadow-card p-8 lg:p-12 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Quick Repayment Calculator
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-primary/80 mb-3">
                Loan Amount
              </label>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full mb-3 accent-accent"
              />
              <div className="text-2xl font-bold text-accent-dark">
                ${loanAmount.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary/80 mb-3">
                Interest Rate (%)
              </label>
              <input
                type="range"
                min="2"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full mb-3 accent-accent"
              />
              <div className="text-2xl font-bold text-accent-dark">
                {interestRate.toFixed(2)}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary/80 mb-3">
                Loan Term (Years)
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full mb-3 accent-accent"
              />
              <div className="text-2xl font-bold text-accent-dark">
                {loanTerm} years
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white text-center border border-white/10">
            <p className="text-lg mb-2">Estimated Monthly Repayment</p>
            <p className="text-5xl font-bold mb-2">
              ${Number(calculateRepayment()).toLocaleString()}
            </p>
            <p className="text-white/70 text-sm">
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

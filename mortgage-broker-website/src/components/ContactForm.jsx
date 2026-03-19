import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: 'home-purchase',
    deposit: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your home loan journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 rounded-3xl shadow-soft p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Loan Type *
                    </label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                      required
                    >
                      <option value="home-purchase">Home Purchase</option>
                      <option value="refinance">Refinance</option>
                      <option value="investment">Investment Property</option>
                      <option value="construction">Construction Loan</option>
                      <option value="first-home">First Home Buyer</option>
                      <option value="commercial">Commercial Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Deposit Amount
                    </label>
                    <input
                      type="text"
                      name="deposit"
                      value={formData.deposit}
                      onChange={handleChange}
                      placeholder="e.g., $100,000"
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your situation and what you're looking for..."
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Phone</h4>
              <a href="tel:1300000000" className="text-gray-600 hover:text-accent transition-colors">
                1300 000 000
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri: 9am - 6pm</p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Email</h4>
              <a href="mailto:info@aussiehomemortgages.com.au" className="text-gray-600 hover:text-accent transition-colors break-all">
                info@aussiehomemortgages.com.au
              </a>
              <p className="text-sm text-gray-500 mt-2">We reply within 24 hours</p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Office</h4>
              <p className="text-gray-600">
                Level 10, 123 Queen Street<br />
                Melbourne VIC 3000<br />
                Australia
              </p>
              <p className="text-sm text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

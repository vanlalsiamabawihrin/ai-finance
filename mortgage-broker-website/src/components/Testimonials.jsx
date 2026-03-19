import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & James Mitchell',
      location: 'Sydney, NSW',
      rating: 5,
      text: 'Absolutely fantastic service! We were first home buyers and felt overwhelmed, but the team made everything so easy. They found us a rate 0.5% lower than what our bank offered. Highly recommend!',
      loanType: 'First Home Purchase',
    },
    {
      name: 'David Chen',
      location: 'Melbourne, VIC',
      rating: 5,
      text: 'Refinanced our home loan and saved over $400 per month. The process was seamless and the team handled everything. Best financial decision we\'ve made this year.',
      loanType: 'Refinance',
    },
    {
      name: 'Emma Thompson',
      location: 'Brisbane, QLD',
      rating: 5,
      text: 'As a self-employed business owner, I thought getting a loan would be impossible. They found a lender who understood my situation and got me approved within 2 weeks. Professional and knowledgeable.',
      loanType: 'Investment Property',
    },
    {
      name: 'Michael & Lisa Patel',
      location: 'Perth, WA',
      rating: 5,
      text: 'We\'ve used their services twice now - once for our home and again for an investment property. Always responsive, always professional. They genuinely care about getting the best outcome.',
      loanType: 'Investment Loan',
    },
    {
      name: 'Rachel Williams',
      location: 'Adelaide, SA',
      rating: 5,
      text: 'The team went above and beyond. They explained everything in simple terms and were available whenever I had questions. Made buying my first home stress-free!',
      loanType: 'First Home Buyer',
    },
    {
      name: 'Tom Anderson',
      location: 'Gold Coast, QLD',
      rating: 5,
      text: 'Exceptional service from start to finish. They saved me thousands on my construction loan and the ongoing support has been incredible. Can\'t thank them enough!',
      loanType: 'Construction Loan',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy homeowners who trusted us with their mortgage
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5 from 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/10" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-neutral-200 pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-accent font-semibold mt-2">{testimonial.loanType}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
}

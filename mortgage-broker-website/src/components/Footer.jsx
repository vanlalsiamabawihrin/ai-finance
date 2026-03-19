import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Home Loans', href: '#services' },
      { name: 'Refinancing', href: '#services' },
      { name: 'Investment Loans', href: '#services' },
      { name: 'First Home Buyer', href: '#services' },
      { name: 'Construction Loans', href: '#services' },
      { name: 'Commercial Loans', href: '#services' },
    ],
    resources: [
      { name: 'Mortgage Calculators', href: '#calculators' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
      { name: 'About Us', href: '#about' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Complaints', href: '#' },
    ],
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">Aussie Home</span>
                <span className="text-accent text-xs font-semibold leading-tight">MORTGAGE BROKERS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect home loan solution. 
              Expert advice, competitive rates, and personalized service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:1300000000" className="text-gray-400 hover:text-accent transition-colors">
                    1300 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@aussiehomemortgages.com.au" className="text-gray-400 hover:text-accent transition-colors break-all">
                    info@aussiehomemortgages.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  Level 10, 123 Queen Street<br />
                  Melbourne VIC 3000
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Aussie Home Mortgage Brokers. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
              Australian Credit Licence Number 123456. This website provides general information only and does not 
              constitute financial advice. You should consider seeking independent legal, financial, taxation or other 
              advice to check how the information relates to your unique circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

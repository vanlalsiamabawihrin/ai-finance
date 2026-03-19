import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Calculators", href: "#calculators" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-8 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg leading-tight">
                Aussie Home
              </span>
              <span className="text-accent text-xs font-semibold leading-tight">
                MORTGAGE BROKERS
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary hover:text-accent font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:1300000000"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">1300 000 000</span>
            </a>
            <a href="#contact" className="btn-primary text-sm py-3 px-6">
              Book Free Consultation
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-primary hover:text-accent font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:1300000000"
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <Phone className="w-4 h-4" />
                1300 000 000
              </a>
              <a
                href="#contact"
                className="btn-primary text-center text-sm py-3"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

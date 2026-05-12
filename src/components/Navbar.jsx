import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFF8E7]/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className={`text-xl md:text-2xl font-bold font-heading ${isScrolled ? 'text-[#1F3D2B]' : 'text-white'}`} aria-label="Mehendi & Nails By Riddhi Home">
          Mehendi & Nails By<span className="text-[#C9A646]">Riddhi</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-[#C9A646] transition-colors ${isScrolled ? 'text-[#1F3D2B]' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-[#C9A646] hover:bg-[#DAB95D] text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-[#1F3D2B]' : 'text-white'} aria-hidden="true" />
          ) : (
            <Menu className={isScrolled ? 'text-[#1F3D2B]' : 'text-white'} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFF8E7] absolute w-full top-full left-0 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1F3D2B] font-medium hover:text-[#C9A646] py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#C9A646] text-white text-center px-6 py-3 rounded-md font-medium"
              >
                Book Now
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


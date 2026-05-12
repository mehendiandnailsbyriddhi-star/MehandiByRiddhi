import { MessageCircle, Phone, MapPin } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2B] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-3xl font-bold font-heading inline-block mb-4"
              aria-label="Mehendi & Nails By Riddhi Home"
            >
              Mehendi & Nails By<span className="text-[#C9A646]">Riddhi</span>
            </a>
            <p className="text-gray-400 max-w-sm text-sm font-light mb-6">
              Your trusted Mehendi and Nail Artist in Bopal, Ahmedabad. We make your special moments beautiful with safe, natural henna and premium nail art.
            </p>
            <div className="flex flex-col items-center md:items-start text-sm text-gray-400 space-y-3">
              <a 
                href="https://maps.app.goo.gl/pqXMPAH5LPEhTDCRA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start space-x-3 group" 
                aria-label="View location on Google Maps"
              >
                <MapPin className="w-5 h-5 text-[#C9A646] shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <div className="max-w-[250px] text-left">
                  <span className="text-white block font-medium mb-1 group-hover:text-[#C9A646] transition-colors">Riddhi Prajapati</span>
                  <address className="not-italic text-gray-400 group-hover:text-gray-200 transition-colors">
                    804 Sun Aspire, Nr. Nilkanth villa bunglow, opp samprat residency, dps road bopal - shilaj, Ahmedabad - 380058
                  </address>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A646] shrink-0" aria-hidden="true" />
                <a href="tel:9974418119" className="hover:text-white transition-colors" aria-label="Call Riddhi at +91 99744 18119">
                  +91 99744 18119
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-heading font-medium mb-4 text-[#C9A646]">
              Service Areas
            </h4>
            <ul className="space-y-2 text-center md:text-left text-sm text-gray-400">
              <li>Mehendi Artist in Bopal</li>
              <li>Nail Art in South Bopal</li>
              <li>Bridal Mehendi in Shilaj</li>
              <li>Mehandi Artist in Ambli</li>
              <li>Nail Extensions in Ghuma</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-heading font-medium mb-4 text-[#C9A646]">
              Quick Links
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2 text-center md:text-right">
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MehendiByRiddhi. All rights
            reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://instagram.com/MehendiByRiddhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C9A646] transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/9974418119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C9A646] transition-colors"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="tel:9974418119"
              className="text-gray-400 hover:text-[#C9A646] transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


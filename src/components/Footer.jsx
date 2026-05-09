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
            >
              Mehendi & Nails By<span className="text-[#C9A646]">Riddhi</span>
            </a>
            <p className="text-gray-400 max-w-sm text-sm font-light mb-6">
              Your trusted Mehendi and Nail Artist in Bopal, Ahmedabad. We make your special moments beautiful with safe, natural henna and premium nail art.
            </p>
            <div className="flex flex-col items-center md:items-start text-sm text-gray-400 space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A646] shrink-0" />
                <p className="max-w-[250px] text-left">
                  <span className="text-white block font-medium mb-1">Riddhi Prajapati</span>
                  804 Sun Aspire, Nr. Nilkanth villa bunglow, opp samprat residency, dps road bopal - shilaj, Ahmedabad - 380058
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A646] shrink-0" />
                <a href="tel:9974418119" className="hover:text-white transition-colors">
                  +91 99744 18119
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-heading font-medium mb-4 text-[#C9A646]">
              Quick Links
            </h4>
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
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center">
            &copy; {new Date().getFullYear()} MehendiByRiddhi. All rights
            reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#C9A646] transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/9974418119"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#C9A646] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="tel:9974418119"
              className="text-gray-400 hover:text-[#C9A646] transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

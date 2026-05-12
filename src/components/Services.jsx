import { m } from 'framer-motion';

const services = [
  {
    title: 'Arabic Mehendi',
    price: '300',
    description: 'Elegant, quick, and beautiful flowing patterns.',
    features: ['Wrist Length: ₹300', '4 Finger Above Wrist: ₹500', 'Half Hand: ₹800', 'Elbow: ₹1000'],
    popular: false
  },
  {
    title: 'Traditional Mehendi',
    price: '500',
    description: 'Classic and intricate traditional Indian patterns.',
    features: ['Wrist Length: ₹500', '4 Finger Above Wrist: ₹800', 'Half Hand: ₹1500', 'Elbow: ₹2000'],
    popular: true
  },
  {
    title: 'Designer Mehendi',
    price: '1000',
    description: 'Bespoke contemporary designs tailored to your style.',
    features: ['Wrist Length: ₹1000', '4 Finger Above Wrist: ₹2000', 'Half Hand: ₹3000', 'Elbow: ₹4000'],
    popular: false
  },
  {
    title: 'Engagement + Gol Dhana',
    price: '1600',
    description: 'Specialized intricate designs for your engagement day.',
    features: ['Half Hand: ₹1600', 'Elbow Hand: ₹2100', 'Per Single Figure: ₹50', 'Per Couple Figure: ₹100'],
    popular: false
  },
  {
    title: 'Bridal Mehendi',
    price: '5000',
    description: 'Complete hands (front & back) and legs coverage for the bride.',
    features: ['Basic Package: ₹5000+', 'Heavy Package: ₹7000+', 'Customize Bridal: ₹10000+'],
    popular: true
  },
  {
    title: 'Nail Art & Extensions',
    price: '500',
    description: 'Complete nail services from classic manicure to intricate 3D extensions.',
    features: ['Classic Manicure: ₹500', 'Gel Polish & Art: ₹800', 'Bridal Extensions: ₹2500'],
    popular: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">Professional Mehendi & Nail Services</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1F3D2B] mt-2 mb-4">Our Services & Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the finest Mehendi and Nail Art in Bopal. We use 100% natural henna for a dark, safe, and beautiful stain.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={service.title}
              className={`relative bg-[#FFF8E7] rounded-2xl p-8 border ${
                service.popular ? 'border-[#C9A646] shadow-xl shadow-[#C9A646]/10 lg:transform lg:-translate-y-4' : 'border-transparent shadow-sm'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C9A646] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold text-[#1F3D2B] mb-2">{service.title}</h3>
              <div className="mb-6">
                <span className="text-gray-500 text-sm">Starting from </span>
                <span className="text-3xl font-bold text-[#C9A646]">₹{service.price}</span>
              </div>
              
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8" aria-label={`Features of ${service.title}`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#C9A646] mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#booking"
                className={`block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                  service.popular 
                    ? 'bg-[#1F3D2B] text-white hover:bg-opacity-90' 
                    : 'bg-white text-[#1F3D2B] border border-[#1F3D2B]/20 hover:border-[#1F3D2B]'
                }`}
                aria-label={`Inquire about ${service.title}`}
              >
                Inquire Now
              </a>
            </m.div>
          ))}
        </div>
        
        <footer className="mt-16 text-center">
          <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed italic">
            * Final pricing depends on design complexity, length of the design, and location. Travel charges may apply for out-of-station bookings. 
            <span className="block mt-4 not-italic text-gray-400">
              Providing professional Bridal Mehendi and Nail Extensions across Bopal, South Bopal, Shilaj, Ghuma, and Ambli. We are committed to using 100% natural henna for a safe and beautiful experience.
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
}


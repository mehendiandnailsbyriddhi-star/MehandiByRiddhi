import { motion } from 'framer-motion';

const services = [
  {
    title: 'Bridal Mehndi',
    price: '3000',
    description: 'Intricate and traditional patterns covering full hands and legs, tailored to your love story.',
    features: ['Custom couple portraits', 'Full arms to elbow', 'Legs up to knees', 'Premium organic henna'],
    popular: true
  },
  {
    title: 'Engagement / Party',
    price: '1500',
    description: 'Elegant and beautiful designs for engagement, sangeet, and special occasions.',
    features: ['Both hands front & back', 'Up to mid-arm', 'Custom motifs', 'Dark stain guarantee'],
    popular: false
  },
  {
    title: 'Guest / Minimal Mehndi',
    price: '200',
    description: 'Simple, delicate, and quick Arabic or minimal designs for wedding guests or festivals.',
    features: ['Single side/strip', 'Quick application', 'Floral & geometric', 'Group bookings available'],
    popular: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">Invest in Art</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1F3D2B] mt-2 mb-4">Services & Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use only 100% natural, organic henna for a rich, dark, and safe stain. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.title}
              className={`relative bg-[#FFF8E7] rounded-2xl p-8 border ${
                service.popular ? 'border-[#C9A646] shadow-xl shadow-[#C9A646]/10 transform md:-translate-y-4' : 'border-transparent shadow-sm'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C9A646] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold text-[#1F3D2B] mb-2">{service.title}</h3>
              <div className="mb-6">
                <span className="text-gray-500 text-sm">Starting from </span>
                <span className="text-3xl font-bold text-[#C9A646]">₹{service.price}</span>
              </div>
              
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#C9A646] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-sm text-gray-500 bg-gray-50 py-4 rounded-lg inline-block w-full max-w-6xl">
          * Note: Final pricing depends on design complexity, length of the design, and location of the venue. Travel charges may apply.
        </div>
      </div>
    </section>
  );
}

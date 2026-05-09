import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'Riddhi did an absolutely phenomenal job for my wedding! The stain was so dark and the intricate details were exactly what I wanted. Highly professional and sweet! ❤️',
  },
  {
    id: 2,
    name: 'Ananya Patel',
    role: 'Engagement Client',
    text: 'I booked MehendiByRiddhi for my engagement and everyone loved the design. It was elegant, modern, and the color came out beautifully. Will definitely book again!',
  },
  {
    id: 3,
    name: 'Sneha Desai',
    role: 'Bridesmaid',
    text: 'Quick, neat, and stunning designs for all the bridesmaids. She is very patient and accommodating. The best mehendi artist in town! ✨',
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF8E7] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">Trusted by Clients</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1F3D2B] mt-2 mb-4">Love Stories & Happy Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F3D2B]/5 relative"
            >
              <div className="text-4xl text-[#C9A646] absolute top-6 right-8 font-serif opacity-30">"</div>
              <div className="flex text-[#C9A646] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-[#1F3D2B] font-heading">{testimonial.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

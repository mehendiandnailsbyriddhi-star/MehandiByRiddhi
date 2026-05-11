import { m } from 'framer-motion';
import artistImage from '../assets/artist.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src={artistImage} 
                alt="Riddhi - Professional Mehendi and Nail Artist in Bopal" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-[#C9A646] rounded-2xl -z-10 rotate-3" aria-hidden="true"></div>
          </m.div>

          <m.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">The Artist Behind the Art</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1F3D2B] mt-2 mb-6">Meet Riddhi</h2>
            
            <article className="space-y-4 text-gray-600 font-light text-lg leading-relaxed mb-8">
              <p>
                Hi! I am Riddhi, a dedicated Mehendi and nail artist based in Bopal, Ahmedabad. My passion is to enhance your special moments with intricate henna designs and premium nail artistry.
              </p>
              <p>
                With extensive experience in both bridal Mehendi and contemporary nail extensions, I focus on delivering personalized art that reflects your unique personality and style.
              </p>
              <p>
                We use 100% natural henna to ensure a rich, dark stain that is safe for your skin. Whether it's for your wedding or a special occasion, let's create something beautiful together.
              </p>
            </article>
            
            <a 
              href="#portfolio"
              className="inline-block border-b-2 border-[#C9A646] pb-1 text-[#1F3D2B] font-medium hover:text-[#C9A646] transition-colors uppercase tracking-wider text-sm"
              aria-label="View Riddhi's Portfolio"
            >
              View My Portfolio &rarr;
            </a>
          </m.div>

        </div>
      </div>
    </section>
  );
}


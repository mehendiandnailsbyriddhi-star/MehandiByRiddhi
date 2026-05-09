import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src="/profile.png" 
                alt="Riddhi - Mehndi Artist" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-[#C9A646] rounded-2xl -z-10 rotate-3"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">The Artist Behind the Art</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1F3D2B] mt-2 mb-6">Meet Riddhi</h2>
            
            <div className="space-y-4 text-gray-600 font-light text-lg leading-relaxed mb-8">
              <p>
                Hi! I'm Riddhi, a passionate mehndi and nail artist dedicated to making your special moments even more memorable with beautiful henna and stunning nails.
              </p>
              <p>
                With years of experience specializing in bridal and contemporary mehndi, alongside certified expertise in premium nail extensions and art, I pride myself on extreme attention to detail. I create customized patterns and nail designs that reflect your unique personality and love story.
              </p>
              <p>
                My henna paste is 100% natural, organic, and freshly made, ensuring a deep, rich, and long-lasting stain safely. Let's create magic together!
              </p>
            </div>
            
            <a 
              href="#portfolio"
              className="inline-block border-b-2 border-[#C9A646] pb-1 text-[#1F3D2B] font-medium hover:text-[#C9A646] transition-colors uppercase tracking-wider text-sm"
            >
              View My Portfolio &rarr;
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

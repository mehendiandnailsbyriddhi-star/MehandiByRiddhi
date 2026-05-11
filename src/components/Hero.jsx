import { m } from 'framer-motion';
import { Star, ChevronDown, Award } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Riddhi! I'm interested in booking a Mehendi or nail art session. Can we discuss details?");
    window.open(`https://wa.me/9974418119?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Skip to content for accessibility */}
      <a href="#portfolio" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-[#C9A646] text-white px-4 py-2 rounded">
        Skip to Portfolio
      </a>

      {/* Optimized LCP Background Image */}
      <m.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Invisible image for LCP prioritization and SEO alt text */}
        <img 
          src="/hero_bg.png" 
          alt="Premium Mehendi and Nail Art background" 
          className="sr-only" 
          loading="eager"
          fetchpriority="high"
        />
      </m.div>
      
      {/* Multi-layered Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F3D2B]/80 via-[#1F3D2B]/40 to-[#1F3D2B]/90"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center mt-10">
        
        {/* Glassmorphism Container */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl w-full backdrop-blur-md bg-[#1F3D2B]/30 border border-white/10 rounded-[2.5rem] p-8 md:p-14 text-center shadow-2xl relative"
        >
          {/* Top Floating Badge */}
          <m.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#C9A646] text-[#1F3D2B] px-6 py-2 rounded-full font-bold flex items-center shadow-xl border-2 border-white/20 whitespace-nowrap text-sm"
          >
            <Award className="w-4 h-4 mr-2" aria-hidden="true" />
            Top Mehendi & Nail Artist in Bopal
          </m.div>

          {/* Subheading */}
          <m.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-[#C9A646] font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base"
          >
            Bridal Mehendi | Nail Extensions | Custom Art
          </m.span>
          
          {/* Main Heading (H1 for SEO) */}
          <m.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            {"Beautiful Mehendi & Nail Art for ".split(" ").map((word, i) => (
              <m.span 
                key={`word-1-${i}`} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </m.span>
            ))}
            <br className="hidden md:block" aria-hidden="true" />
            {"Your Special Day".split(" ").map((word, i) => (
              <m.span 
                key={`word-2-${i}`} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </m.span>
            ))}
          </m.h1>
          
          {/* Description */}
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Get the best henna designs and perfect nail art made just for you in Bopal, Ahmedabad. We mix old traditions with new styles.
          </m.p>
          
          {/* Action Area */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button 
              onClick={handleWhatsAppClick}
              aria-label="Book Now on WhatsApp"
              className="group relative bg-[#C9A646] text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden shadow-[0_0_20px_rgba(201,166,70,0.4)] hover:shadow-[0_0_30px_rgba(201,166,70,0.6)] transition-all w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center justify-center">
                Book Now on WhatsApp
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            {/* Social Proof Mini */}
            <div className="flex items-center gap-4 bg-black/20 px-5 py-3 rounded-full border border-white/5">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#1F3D2B] object-cover" src="/bridal.png" alt="Happy client profile" loading="lazy" />
                <img className="w-10 h-10 rounded-full border-2 border-[#1F3D2B] object-cover" src="/arabic.png" alt="Happy client profile" loading="lazy" />
                <div className="w-10 h-10 rounded-full border-2 border-[#1F3D2B] bg-[#1F3D2B] flex items-center justify-center text-xs font-bold text-[#C9A646] z-10">
                  500+
                </div>
              </div>
              <div className="flex flex-col items-start text-sm">
                <div className="flex text-[#C9A646] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="font-medium text-white/90">Happy Brides</span>
              </div>
            </div>
          </m.div>
        </m.div>

      </div>

      {/* Scroll Indicator */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Explore</span>
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#C9A646] w-6 h-6" aria-hidden="true" />
        </m.div>
      </m.div>
    </section>
  );
}

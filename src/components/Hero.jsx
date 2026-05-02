import { motion } from 'framer-motion';
import { Star, ChevronDown, Award } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Riddhi! I'm interested in booking a mehndi session. Can we discuss details?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Multi-layered Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F3D2B]/80 via-[#1F3D2B]/40 to-[#1F3D2B]/90"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center mt-10">
        
        {/* Glassmorphism Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl w-full backdrop-blur-md bg-[#1F3D2B]/30 border border-white/10 rounded-[2.5rem] p-8 md:p-14 text-center shadow-2xl relative"
        >
          {/* Top Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#C9A646] text-[#1F3D2B] px-6 py-2 rounded-full font-bold flex items-center shadow-xl border-2 border-white/20 whitespace-nowrap text-sm"
          >
            <Award className="w-4 h-4 mr-2" />
            Premium Bridal Artist
          </motion.div>

          {/* Subheading */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-[#C9A646] font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base"
          >
            Bridal | Engagement | Custom Designs
          </motion.span>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Elegant Mehndi Designs for <br className="hidden md:block" /> Your Special Moments
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience the art of intricate henna designs tailored specifically for you, blending rich tradition with modern aesthetics.
          </motion.p>
          
          {/* Action Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button 
              onClick={handleWhatsAppClick}
              className="group relative bg-[#C9A646] text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden shadow-[0_0_20px_rgba(201,166,70,0.4)] hover:shadow-[0_0_30px_rgba(201,166,70,0.6)] transition-all w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center justify-center">
                Book Now on WhatsApp
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            {/* Social Proof Mini */}
            <div className="flex items-center gap-4 bg-black/20 px-5 py-3 rounded-full border border-white/5">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#1F3D2B] object-cover" src="/bridal.png" alt="Client 1" />
                <img className="w-10 h-10 rounded-full border-2 border-[#1F3D2B] object-cover" src="/arabic.png" alt="Client 2" />
                <div className="w-10 h-10 rounded-full border-2 border-[#1F3D2B] bg-[#1F3D2B] flex items-center justify-center text-xs font-bold text-[#C9A646] z-10">
                  500+
                </div>
              </div>
              <div className="flex flex-col items-start text-sm">
                <div className="flex text-[#C9A646] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-white/90">Happy Brides</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#C9A646] w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

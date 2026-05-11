import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = [
  "All",
  "Bridal Mehendi",
  "Arabic Mehendi",
  "Minimal Mehendi",
  "Custom Designs",
];

const portfolioItems = [
  {
    id: 1,
    src: "/bridal.png",
    category: "Bridal Mehendi",
    alt: "Beautiful Bridal Mehendi Design in Bopal by Riddhi",
  },
  {
    id: 2,
    src: "/arabic.png",
    category: "Arabic Mehendi",
    alt: "Stunning Arabic Mehendi Design in Bopal",
  },
  {
    id: 3,
    src: "/minimal.png",
    category: "Minimal Mehendi",
    alt: "Simple and Minimalist Mehendi Design Ahmedabad",
  },
  {
    id: 4,
    src: "/custom.png",
    category: "Custom Designs",
    alt: "Custom Henna and Nail Art Designs by Best Artist in Bopal",
  },
  {
    id: 5,
    src: "/bridal.png",
    category: "Bridal Mehendi",
    alt: "Heavy Bridal Mehendi Details Bopal Ahmedabad",
  },
  {
    id: 6,
    src: "/arabic.png",
    category: "Arabic Mehendi",
    alt: "Arabic Backhand Mehendi Design in Bopal",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FFF8E7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1F3D2B] mt-2 mb-6">
            Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                    ? "bg-[#1F3D2B] text-white"
                    : "bg-white text-[#1F3D2B] border border-[#1F3D2B]/10 hover:border-[#C9A646]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <m.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer aspect-square bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#C9A646]"
                onClick={() => setSelectedImage(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
                aria-label={`View ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1F3D2B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
                  <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
            <m.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}


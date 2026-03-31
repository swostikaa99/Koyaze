import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
    alt: "Navy Blue Bespoke Suit",
    category: "Suits",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop",
    alt: "Charcoal Business Suit",
    category: "Suits",
  },
  {
    src: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=1000&fit=crop",
    alt: "Tweed Jacket",
    category: "Jackets",
  },
  {
    src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1000&fit=crop",
    alt: "Custom Dress Shirts",
    category: "Shirts",
  },
  {
    src: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=1000&fit=crop",
    alt: "Wedding Suit",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=800&h=1000&fit=crop",
    alt: "Cashmere Overcoat",
    category: "Overcoats",
  },
  {
    src: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=600&fit=crop",
    alt: "Fabric Selection",
    category: "Process",
  },
  {
    src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    alt: "Tailoring Details",
    category: "Process",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section
      id="gallery"
      className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#f8f6f3]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-wide">
            Gallery
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center">
                  <p className="text-white text-lg font-light">{image.alt}</p>
                  <p className="text-[#c9a962] text-sm tracking-wider uppercase">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#c9a962] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#c9a962] transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#c9a962] transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white text-lg">{selectedImage.alt}</p>
              <p className="text-[#c9a962] text-sm tracking-wider uppercase">
                {selectedImage.category}
              </p>
              <p className="text-white/50 text-sm mt-2">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

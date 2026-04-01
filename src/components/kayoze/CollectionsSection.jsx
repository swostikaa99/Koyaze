import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const collections = [
  {
    id: "business-suits",
    title: "Business Suits",
    description:
      "Impeccably tailored suits for the modern professional. Command respect with perfectly fitted business attire.",
    price: "From NPR 45,000",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  },
  {
    id: "custom-fabrics",
    title: "Custom Fabrics",
    description:
      "Choose from our extensive collection of premium fabrics from the world's finest mills.",
    price: "Starting at NPR 35,000",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
  },
  {
    id: "three-piece",
    title: "Three-Piece Elegance",
    description:
      "Complete sophistication with our signature three-piece suits, crafted to perfection.",
    price: "From NPR 55,000",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop",
  },
];

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="pt-24 pb-6 md:pt-32 md:pb-8 bg-[#f8f6f3]"
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
            Signature Collections
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-wide mb-4">
            Crafted to Perfection
          </h2>
          <p className="text-[#8b7e74] max-w-2xl mx-auto">
            Every suit is a masterpiece, tailored precisely to your measurements
            and style preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#8b7e74] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-[#c9a962] font-medium">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-flow-col auto-cols-max justify-end gap-1.5 overflow-x-auto md:mt-12 md:flex md:flex-nowrap md:items-center md:justify-end md:gap-6"
        >
          <Link
            to={createPageUrl("Products")}
            className="inline-block shrink-0 px-2 py-1.5 sm:px-10 sm:py-4 bg-[#c9a962] text-black text-[7px] sm:text-sm tracking-[0.03em] sm:tracking-[0.2em] uppercase whitespace-nowrap"
          >
            View All Collections
          </Link>

          <Link
            to="/bookconcultation"
            className="inline-block shrink-0 px-2 py-1.5 sm:px-10 sm:py-4 border-2 border-[#c9a962] text-[#c9a962] text-[7px] sm:text-sm tracking-[0.03em] sm:tracking-[0.2em] uppercase whitespace-nowrap
                       hover:bg-[#c9a962] hover:text-white transition-all duration-300"
          >
            Schedule Your Fitting →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

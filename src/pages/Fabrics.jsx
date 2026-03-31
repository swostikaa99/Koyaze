import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link, Outlet, useParams } from "react-router-dom";
import { createPageUrl } from "@/utils";

import FabricFilter from "@/components/kayoze/FabricFilter";

const fabrics = [
  {
    id: 1,
    name: "Super 150s Merino",
    mill: "Loro Piana",
    origin: "Italy",
    originId: "italy",
    category: "wool",
    weight: "280g/m",
    composition: "100% Wool",
    description:
      "Exceptionally fine merino wool with an incomparable softness. Perfect for year-round suits with a luxurious drape and natural wrinkle resistance.",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop",
    colors: ["#1a1a1a", "#2c3e50", "#4a4a4a", "#8b7355"],
    colorNames: ["Midnight Black", "Navy Blue", "Charcoal", "Tobacco"],
    priceRange: "$$$",
    premium: true,
    videoUrl: null,
  },
  {
    id: 2,
    name: "Cashmere Blend",
    mill: "Ermenegildo Zegna",
    origin: "Italy",
    originId: "italy",
    category: "cashmere",
    weight: "320g/m",
    composition: "80% Wool, 20% Cashmere",
    description:
      "A sumptuous blend that combines the structure of fine wool with the softness of cashmere. Ideal for elegant winter jackets and overcoats.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
    colors: ["#3d3d3d", "#5d4e37", "#2f4f4f", "#800020"],
    colorNames: ["Dark Grey", "Camel", "Dark Slate", "Burgundy"],
    priceRange: "$$$$",
    premium: true,
    videoUrl: null,
  },
  {
    id: 3,
    name: "Silk & Wool Blend",
    mill: "Scabal",
    origin: "United Kingdom",
    originId: "uk",
    category: "silk",
    weight: "260g/m",
    composition: "70% Wool, 30% Silk",
    description:
      "A refined blend offering a subtle sheen and exceptional breathability. Perfect for evening wear and special occasion suits.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop",
    colors: ["#000080", "#1a1a1a", "#36454f", "#722f37"],
    colorNames: ["Royal Navy", "Jet Black", "Charcoal Blue", "Wine"],
    priceRange: "$$$",
    premium: false,
    videoUrl: null,
  },
  {
    id: 4,
    name: "Irish Linen",
    mill: "Spence Bryson",
    origin: "United Kingdom",
    originId: "uk",
    category: "linen",
    weight: "200g/m",
    composition: "100% Linen",
    description:
      "Crisp, breathable pure linen with a natural texture. The quintessential choice for summer suits and relaxed elegance.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1000&fit=crop",
    colors: ["#f5f5dc", "#c4b7a6", "#87ceeb", "#dcdcdc"],
    colorNames: ["Natural", "Sand", "Sky Blue", "Silver"],
    priceRange: "$$",
    premium: false,
    videoUrl: null,
  },
  {
    id: 5,
    name: "Japanese Cotton",
    mill: "Thomas Mason",
    origin: "Japan",
    originId: "japan",
    category: "cotton",
    weight: "120g/m",
    composition: "100% Cotton",
    description:
      "Ultra-fine two-ply cotton with a silky hand feel. Woven in Japan using traditional techniques for exceptional shirting.",
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=1000&fit=crop",
    colors: ["#ffffff", "#f0f8ff", "#e6e6fa", "#faf0e6"],
    colorNames: ["Pure White", "Ice Blue", "Lavender", "Cream"],
    priceRange: "$$",
    premium: false,
    videoUrl: null,
  },
  {
    id: 6,
    name: "Tweed Heritage",
    mill: "Harris Tweed",
    origin: "United Kingdom",
    originId: "uk",
    category: "wool",
    weight: "450g/m",
    composition: "100% Pure Virgin Wool",
    description:
      "Handwoven in the Outer Hebrides of Scotland. Each piece is unique, offering unmatched warmth and timeless British character.",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=1000&fit=crop",
    colors: ["#556b2f", "#8b4513", "#483d8b", "#2f4f4f"],
    colorNames: ["Forest Green", "Rust", "Heather", "Peat"],
    priceRange: "$$$",
    premium: true,
    videoUrl: null,
  },
  {
    id: 7,
    name: "Fresco Wool",
    mill: "Vitale Barberis Canonico",
    origin: "Italy",
    originId: "italy",
    category: "wool",
    weight: "240g/m",
    composition: "100% High-Twist Wool",
    description:
      "An open-weave wool with exceptional breathability. The high-twist yarns provide natural stretch and wrinkle resistance for travel-ready suits.",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=1000&fit=crop",
    colors: ["#696969", "#808080", "#a9a9a9", "#c0c0c0"],
    colorNames: ["Medium Grey", "Dove Grey", "Light Grey", "Silver"],
    priceRange: "$$",
    premium: false,
    videoUrl: null,
  },
  {
    id: 8,
    name: "Vicuña Blend",
    mill: "Loro Piana",
    origin: "Italy",
    originId: "italy",
    category: "cashmere",
    weight: "300g/m",
    composition: "85% Cashmere, 15% Vicuña",
    description:
      "The rarest and most luxurious fabric available. Vicuña fibers are finer than any other animal fiber, creating an unparalleled softness.",
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=800&h=1000&fit=crop",
    colors: ["#d4a574", "#c4a06f", "#b8956a"],
    colorNames: ["Natural Vicuña", "Golden Brown", "Honey"],
    priceRange: "$$$$$",
    premium: true,
    videoUrl: null,
  },
];

const millLogos = [
  {
    name: "Loro Piana",
    country: "Italy",
    logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=100&fit=crop",
  },
  {
    name: "Ermenegildo Zegna",
    country: "Italy",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
  },
  {
    name: "Scabal",
    country: "Belgium",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
  },
  {
    name: "Vitale Barberis Canonico",
    country: "Italy",
    logo: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=100&fit=crop",
  },
  {
    name: "Holland & Sherry",
    country: "UK",
    logo: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=100&fit=crop",
  },
  {
    name: "Harris Tweed",
    country: "Scotland",
    logo: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=200&h=100&fit=crop",
  },
];

export default function Fabrics() {
  const [activeOrigin, setActiveOrigin] = useState("all");

  // Get category from URL to pass as activeCategory
  const { category } = useParams();
  const activeCategory = category || "all";

  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#1a1a1a] overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=800&fit=crop"
            alt="Luxury Fabrics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-20 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a962] tracking-[0.4em] text-sm uppercase mb-6"
          >
            The Finest Materials
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-6"
          >
            Premium Fabrics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Sourced from the world's most prestigious mills, our curated
            selection represents the pinnacle of textile craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* Mill Partners */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {millLogos.map((mill, index) => (
              <motion.div
                key={mill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={mill.logo}
                  alt={mill.name}
                  className="h-16 w-auto mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
                <p className="text-[#1a1a1a] dark:text-white font-medium tracking-wide text-sm">
                  {mill.name}
                </p>
                <p className="text-xs text-[#8b7e74] dark:text-gray-400 tracking-wider uppercase">
                  {mill.country}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Showcase */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white tracking-wide mb-4">
            Explore Our Collection
          </h2>
          <p className="text-[#8b7e74] dark:text-gray-400 max-w-xl mx-auto">
            Each fabric is carefully selected for its quality, drape, and
            suitability for bespoke tailoring.
          </p>
        </motion.div>

        <FabricFilter
          activeCategory={activeCategory}
          setActiveCategory={() => {}} // No-op, using links
          activeOrigin={activeOrigin}
          setActiveOrigin={setActiveOrigin}
          useLinks={true}
          baseUrl="/fabrics"
        />
      </div>

      <Outlet context={{ fabrics, activeOrigin }} />

      {/* Video Showcase Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
                The Art of Selection
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-6">
                Feel the Quality
              </h2>
              <p className="text-[#8b7e74] text-lg leading-relaxed mb-6">
                Every fabric tells a story of heritage, craftsmanship, and
                uncompromising quality. From the rolling hills of Italy to the
                historic mills of Britain, we travel the world to bring you
                materials that meet our exacting standards.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Hand-selected from over 5,000 fabric swatches annually",
                  "Tested for durability, drape, and colorfastness",
                  "Sourced directly from heritage mills with generations of expertise",
                  "Sustainable and ethically produced materials",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a962] text-[#1a1a1a] 
                           text-sm tracking-widest uppercase hover:bg-[#d4b876] transition-colors"
              >
                Request Fabric Samples
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1000&h=750&fit=crop"
                alt="Fabric Selection Process"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300"
                >
                  <Play
                    className="w-8 h-8 text-[#1a1a1a] ml-1"
                    fill="#1a1a1a"
                  />
                </div>
              </div>
              <p className="absolute bottom-6 left-6 text-white text-sm tracking-wider">
                Watch: The Fabric Selection Journey
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fabric Care Guide */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              Expert Advice
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white tracking-wide">
              Fabric Care Guide
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wool & Cashmere",
                tips: [
                  "Brush after each wear to remove dust",
                  "Allow 24 hours rest between wears",
                  "Dry clean only when necessary",
                  "Store with cedar to prevent moths",
                ],
              },
              {
                title: "Linen & Cotton",
                tips: [
                  "Machine wash at 30°C for cotton shirts",
                  "Iron while slightly damp for best results",
                  "Hang to dry to maintain shape",
                  "Professional press for structured garments",
                ],
              },
              {
                title: "Silk Blends",
                tips: [
                  "Always dry clean silk garments",
                  "Store away from direct sunlight",
                  "Use a pressing cloth when ironing",
                  "Handle with care when wet",
                ],
              },
            ].map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#f8f6f3] hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-4">
                  {guide.title}
                </h3>
                <ul className="space-y-3">
                  {guide.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#8b7e74]"
                    >
                      <span className="w-1 h-1 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c9a962]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-gray-900 mb-4">
              Experience Our Fabrics
            </h3>
            <p className="text-[#1a1a1a]/70 dark:text-gray-900/80 text-lg mb-8">
              Visit our atelier to feel the quality firsthand, or request our
              fabric swatch book shipped directly to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Contact")}
                className="px-10 py-4 bg-[#1a1a1a] text-white text-sm tracking-[0.2em] uppercase
                           hover:bg-[#333] transition-all duration-300"
              >
                Book Appointment
              </Link>
              <Link
                to="/bookconcultation"
                className="px-10 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase
                           hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                Request Samples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

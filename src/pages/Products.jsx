import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Filter, ChevronDown } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const products = [
  {
    id: 1,
    name: "Classic Navy Two-Piece Suit",
    category: "suits",
    subcategory: "Two-Piece",
    price: "NPR 45,000",
    priceValue: 45000,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    description:
      "Timeless navy suit in Super 120s wool. Perfect for business and formal occasions.",
    featured: true,
    fabric: "Super 120s Wool",
    deliveryTime: "4-5 weeks",
  },
  {
    id: 2,
    name: "Charcoal Three-Piece Suit",
    category: "suits",
    subcategory: "Three-Piece",
    price: "NPR 55,000",
    priceValue: 55000,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop",
    description:
      "Sophisticated charcoal three-piece with matching waistcoat. Ultimate elegance.",
    featured: true,
    fabric: "Super 150s Merino",
    deliveryTime: "5-6 weeks",
  },
  {
    id: 3,
    name: "Black Tie Tuxedo",
    category: "suits",
    subcategory: "Tuxedo",
    price: "NPR 65,000",
    priceValue: 65000,
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
    description:
      "Classic black tie tuxedo with satin lapels. For life's most memorable moments.",
    featured: false,
    fabric: "Barathea Wool",
    deliveryTime: "5-6 weeks",
  },
  {
    id: 4,
    name: "Burgundy Velvet Dinner Jacket",
    category: "jackets",
    subcategory: "Dinner Jacket",
    price: "NPR 48,000",
    priceValue: 48000,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop",
    description:
      "Luxurious velvet dinner jacket in rich burgundy. Statement eveningwear.",
    featured: true,
    fabric: "Italian Velvet",
    deliveryTime: "4-5 weeks",
  },
  {
    id: 5,
    name: "Harris Tweed Sport Coat",
    category: "jackets",
    subcategory: "Sport Coat",
    price: "NPR 38,000",
    priceValue: 38000,
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=600&h=800&fit=crop",
    description: "Authentic Harris Tweed sport coat. Handwoven in Scotland.",
    featured: false,
    fabric: "Harris Tweed",
    deliveryTime: "4-5 weeks",
  },
  {
    id: 6,
    name: "Traditional Bandi Coat - Black",
    category: "bandi",
    subcategory: "Classic",
    price: "NPR 25,000",
    priceValue: 25000,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop",
    description:
      "Classic Nehru jacket in premium black wool. Modern take on tradition.",
    featured: true,
    fabric: "Wool Blend",
    deliveryTime: "3-4 weeks",
  },
  {
    id: 7,
    name: "Embroidered Bandi Coat",
    category: "bandi",
    subcategory: "Embroidered",
    price: "NPR 35,000",
    priceValue: 35000,
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&h=800&fit=crop",
    description:
      "Intricately embroidered Bandi for weddings and special occasions.",
    featured: false,
    fabric: "Silk Blend",
    deliveryTime: "4-5 weeks",
  },
  {
    id: 8,
    name: "Premium Cotton Dress Shirt",
    category: "shirts",
    subcategory: "Formal",
    price: "NPR 8,500",
    priceValue: 8500,
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&h=800&fit=crop",
    description: "Two-ply Egyptian cotton shirt with mother-of-pearl buttons.",
    featured: false,
    fabric: "Egyptian Cotton",
    deliveryTime: "2-3 weeks",
  },
  {
    id: 9,
    name: "Cashmere Overcoat",
    category: "overcoats",
    subcategory: "Classic",
    price: "NPR 85,000",
    priceValue: 85000,
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
    description:
      "Luxurious full-length cashmere overcoat. Ultimate winter elegance.",
    featured: true,
    fabric: "100% Cashmere",
    deliveryTime: "6-8 weeks",
  },
  {
    id: 10,
    name: "Pinstripe Business Suit",
    category: "suits",
    subcategory: "Two-Piece",
    price: "NPR 48,000",
    priceValue: 48000,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    description:
      "Classic pinstripe suit for the boardroom. Power dressing at its finest.",
    featured: false,
    fabric: "Super 130s Wool",
    deliveryTime: "4-5 weeks",
  },
  {
    id: 11,
    name: "Linen Summer Suit",
    category: "suits",
    subcategory: "Two-Piece",
    price: "NPR 42,000",
    priceValue: 42000,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop",
    description: "Breathable Irish linen suit. Perfect for summer occasions.",
    featured: false,
    fabric: "Irish Linen",
    deliveryTime: "4-5 weeks",
  },
  {
    id: 12,
    name: "Wedding Sherwani",
    category: "wedding",
    subcategory: "Sherwani",
    price: "NPR 75,000",
    priceValue: 75000,
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
    description:
      "Exquisite embroidered sherwani for the groom. Make your day unforgettable.",
    featured: true,
    fabric: "Silk with Zari",
    deliveryTime: "6-8 weeks",
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "suits", label: "Suits" },
  { id: "jackets", label: "Jackets" },
  { id: "bandi", label: "Bandi Coats" },
  { id: "shirts", label: "Shirts" },
  { id: "overcoats", label: "Overcoats" },
  { id: "wedding", label: "Wedding" },
];

export default function Products() {
  // Removed activeCategory state, will be handled by URL/Outlet
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pt-40 md:pb-20 bg-[#1a1a1a] overflow-hidden min-h-[42vh] md:min-h-[70vh] lg:min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&h=600&fit=crop"
            alt="Suit Collection"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 max-w-7xl mt-8 md:mt-20 mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a962] tracking-[0.4em] text-sm uppercase mb-6"
          >
            Bespoke Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-6"
          >
            Our Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 font-light max-w-2xl mx-auto"
          >
            Explore our collection of bespoke suits, jackets, and traditional
            wear. Each piece crafted to perfection.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 md:sticky md:top-0 md:z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.id === "all" ? "/products" : `/products/${cat.id}`}
                  className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 ${"bg-gray-100 text-[#8b7e74] hover:bg-gray-200"}`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#8b7e74]">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid via Outlet */}
      <Outlet context={{ products, sortBy }} />

      {/* Custom Order CTA */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              Can't Find What You're Looking For?
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-6">
              Create Your Custom Design
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Our master tailors can bring any vision to life. Share your ideas
              with us and we'll craft a truly unique piece just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bookconcultation"
                className="px-10 py-4 bg-[#c9a962] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase
                           hover:bg-[#d4b876] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Custom Order
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("Fabrics")}
                className="px-10 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase
                           hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
              >
                Browse Fabrics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] tracking-wide">
              Your Bespoke Journey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose",
                desc: "Select your design or describe your vision",
              },
              {
                step: "02",
                title: "Measure",
                desc: "In-person or virtual fitting session",
              },
              {
                step: "03",
                title: "Craft",
                desc: "Master tailors bring your garment to life",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Worldwide shipping to your doorstep",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-5xl font-light text-[#c9a962]/30">
                  {item.step}
                </span>
                <h3 className="text-lg text-[#1a1a1a] font-medium mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-[#8b7e74] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

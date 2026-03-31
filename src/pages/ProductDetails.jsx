import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageCircle,
  Ruler,
  Clock3,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { products } from "./Products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === String(id));
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (!product) {
    return (
      <div className="bg-[#f8f6f3] min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
            Product not found
          </h1>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#b8943f] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a962] tracking-[0.3em] text-xs uppercase mb-3"
          >
            Product Details
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white tracking-wide"
          >
            {product.name}
          </motion.h1>
        </div>
      </section>

      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#c9a962]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#1a1a1a]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur rounded-2xl p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-xl border border-[#c9a962]/20"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[320px] sm:h-[440px] md:h-[560px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.p
                  variants={detailVariants}
                  className="text-[#c9a962] text-xs tracking-[0.24em] uppercase mb-2"
                >
                  {product.subcategory}
                </motion.p>
                <motion.h2
                  variants={detailVariants}
                  className="text-2xl md:text-4xl font-light text-[#1a1a1a] dark:text-white mb-4"
                >
                  {product.name}
                </motion.h2>
                <motion.p
                  variants={detailVariants}
                  className="text-[#8b7e74] dark:text-gray-300 leading-relaxed mb-6"
                >
                  {product.description}
                </motion.p>

                <motion.div
                  variants={detailVariants}
                  className="grid grid-cols-2 gap-3 mb-6"
                >
                  <div className="rounded-md border border-[#1a1a1a]/10 dark:border-white/10 p-3 flex items-center gap-2 text-sm text-[#1a1a1a] dark:text-white">
                    <Sparkles className="w-4 h-4 text-[#c9a962]" />
                    Premium finish
                  </div>
                  <div className="rounded-md border border-[#1a1a1a]/10 dark:border-white/10 p-3 flex items-center gap-2 text-sm text-[#1a1a1a] dark:text-white">
                    <ShieldCheck className="w-4 h-4 text-[#c9a962]" />
                    Quality assured
                  </div>
                </motion.div>

                <motion.div
                  variants={detailVariants}
                  className="grid sm:grid-cols-3 gap-3 mb-8"
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="border border-[#1a1a1a]/10 dark:border-white/10 p-4 rounded-md"
                  >
                    <p className="text-xs tracking-[0.2em] text-[#8b7e74] uppercase mb-1">
                      Price
                    </p>
                    <p className="text-[#1a1a1a] dark:text-white font-medium">
                      {product.price}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="border border-[#1a1a1a]/10 dark:border-white/10 p-4 rounded-md"
                  >
                    <p className="text-xs tracking-[0.2em] text-[#8b7e74] uppercase mb-1 inline-flex items-center gap-1">
                      <Ruler className="w-3.5 h-3.5" /> Fabric
                    </p>
                    <p className="text-[#1a1a1a] dark:text-white font-medium">
                      {product.fabric}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="border border-[#1a1a1a]/10 dark:border-white/10 p-4 rounded-md"
                  >
                    <p className="text-xs tracking-[0.2em] text-[#8b7e74] uppercase mb-1 inline-flex items-center gap-1">
                      <Clock3 className="w-3.5 h-3.5" /> Delivery
                    </p>
                    <p className="text-[#1a1a1a] dark:text-white font-medium">
                      {product.deliveryTime}
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={detailVariants}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/9779702691187?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                      product.name,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962] text-[#1a1a1a] text-sm tracking-wider uppercase hover:bg-[#d4b876] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </motion.a>
                  <motion.div
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] dark:text-white dark:border-white/20 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Products
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

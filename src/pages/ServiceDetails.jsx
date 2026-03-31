import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scissors, Ruler, Sparkles } from "lucide-react";
import { services } from "@/data/services";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  const highlights = [
    { icon: Scissors, label: "Handcrafted finishing" },
    { icon: Ruler, label: "Precision measurements" },
    { icon: Sparkles, label: "Luxury fabric options" },
  ];

  if (!service) {
    return (
      <div className="bg-[#f8f6f3] min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
            Service not found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#b8943f] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a962] tracking-[0.35em] text-sm uppercase mb-4"
          >
            Service Details
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-wide"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-sm"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-lg border border-[#c9a962]/20"
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] md:h-[520px] object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={containerVariants}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  variants={itemVariants}
                  className="text-[#c9a962] tracking-[0.28em] text-xs uppercase mb-3"
                >
                  Signature Service
                </motion.p>
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white tracking-wide mb-4"
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-[#8b7e74] dark:text-gray-300 leading-relaxed text-lg mb-4"
                >
                  {service.description}
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-[#8b7e74] dark:text-gray-300 leading-relaxed mb-6"
                >
                  {service.details}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="grid sm:grid-cols-3 gap-3 mb-8"
                >
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="border border-[#1a1a1a]/10 dark:border-white/10 p-4 rounded-md"
                    >
                      <item.icon className="w-5 h-5 text-[#c9a962] mb-2" />
                      <p className="text-sm text-[#1a1a1a] dark:text-white leading-snug">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/bookconcultation"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962] text-[#1a1a1a] text-sm tracking-wider uppercase hover:bg-[#d4b876] transition-colors"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] dark:text-white dark:border-white/20 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
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

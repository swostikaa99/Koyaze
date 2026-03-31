import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ id, title, description, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/services/${id}`}
        className="group relative overflow-hidden bg-[#1a1a1a] cursor-pointer block"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">
                {title}
              </h3>
              <p className="text-white/70 text-sm md:text-base max-w-xs leading-relaxed">
                {description}
              </p>
            </div>

            <div
              className="w-20 h-12 rounded-full border border-[#c9a962]/30 flex items-center justify-center 
                          group-hover:bg-[#c9a962] group-hover:border-[#c9a962] transition-all duration-500"
            >
              <ArrowRight className="w-5 h-5 text-[#c9a962] group-hover:text-[#1a1a1a] transition-colors duration-500" />
            </div>
          </div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border border-[#c9a962]/0 group-hover:border-[#c9a962]/30 transition-all duration-500" />
      </Link>
    </motion.div>
  );
}

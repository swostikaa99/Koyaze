import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, MapPin, Scale, Layers } from 'lucide-react';

export default function FabricCard({ fabric, index }) {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={fabric.image}
            alt={fabric.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7 }}
          />
          
          {/* Texture Overlay Animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.5 }}
          />

          {/* Video Play Button */}
          {fabric.videoUrl && (
            <motion.button
              onClick={() => setShowVideo(true)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full 
                         flex items-center justify-center shadow-lg z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 text-[#1a1a1a] ml-0.5" fill="#1a1a1a" />
            </motion.button>
          )}

          {/* Premium Badge */}
          {fabric.premium && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#c9a962] text-[#1a1a1a] text-xs 
                            tracking-widest uppercase font-medium">
              Premium
            </div>
          )}

          {/* Fabric Details Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs 
                              rounded-full flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {fabric.origin}
              </span>
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs 
                              rounded-full flex items-center gap-1.5">
                <Scale className="w-3 h-3" />
                {fabric.weight}
              </span>
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs 
                              rounded-full flex items-center gap-1.5">
                <Layers className="w-3 h-3" />
                {fabric.composition}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase mb-1">{fabric.mill}</p>
              <h3 className="text-xl font-medium text-[#1a1a1a]">{fabric.name}</h3>
            </div>
            <div className="flex gap-1">
              {fabric.colors.slice(0, 4).map((color, i) => (
                <div 
                  key={i}
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                  title={fabric.colorNames?.[i]}
                />
              ))}
            </div>
          </div>
          
          <p className="text-[#8b7e74] text-sm leading-relaxed mb-4">
            {fabric.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-xs text-[#8b7e74] tracking-wide uppercase">
              {fabric.category}
            </span>
            <span className="text-sm font-medium text-[#1a1a1a]">
              {fabric.priceRange}
            </span>
          </div>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c9a962]/30 
                        transition-colors duration-500 pointer-events-none" />
      </motion.div>

      {/* Video Modal */}
      {showVideo && fabric.videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full 
                         flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <video
              src={fabric.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
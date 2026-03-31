import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All Fabrics' },
  { id: 'wool', label: 'Wool' },
  { id: 'cashmere', label: 'Cashmere' },
  { id: 'silk', label: 'Silk Blends' },
  { id: 'linen', label: 'Linen' },
  { id: 'cotton', label: 'Cotton' },
];

const origins = [
  { id: 'all', label: 'All Origins' },
  { id: 'italy', label: 'Italy' },
  { id: 'uk', label: 'United Kingdom' },
  { id: 'japan', label: 'Japan' },
];

export default function FabricFilter({ activeCategory, setActiveCategory, activeOrigin, setActiveOrigin, useLinks = false, baseUrl = '' }) {
  return (
    <div className="mb-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const className = `relative px-6 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 ${
              isActive
                ? 'text-[#1a1a1a]'
                : 'text-[#8b7e74] hover:text-[#1a1a1a]'
            }`;

            if (useLinks) {
                return (
                    <Link
                        key={cat.id}
                        to={cat.id === 'all' ? baseUrl : `${baseUrl}/${cat.id}`}
                        className={className}
                    >
                        {cat.label}
                        {isActive && (
                            <motion.div
                                layoutId="categoryIndicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a962]"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </Link>
                );
            }

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={className}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="categoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a962]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
        })}
      </div>

      {/* Origin Filter */}
      <div className="flex justify-center gap-2">
        {origins.map((origin) => (
          <button
            key={origin.id}
            onClick={() => setActiveOrigin(origin.id)}
            className={`px-4 py-1.5 text-xs tracking-wider rounded-full border transition-all duration-300 ${
              activeOrigin === origin.id
                ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                : 'bg-transparent text-[#8b7e74] border-[#e5e5e5] hover:border-[#c9a962]'
            }`}
          >
            {origin.label}
          </button>
        ))}
      </div>
    </div>
  );
}
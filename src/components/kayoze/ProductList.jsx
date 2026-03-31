import React from "react";
import { motion } from "framer-motion";
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function ProductList() {
  const { products, sortBy } = useOutletContext();
  const { category } = useParams();

  // If no category param, it means "all"
  const activeCategory = category || "all";

  const filteredProducts = products
    .filter(
      (product) =>
        activeCategory === "all" || product.category === activeCategory,
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.priceValue - b.priceValue;
      if (sortBy === "price-high") return b.priceValue - a.priceValue;
      if (sortBy === "featured")
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      return 0;
    });

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#8b7e74] mb-8">
          Showing {filteredProducts.length} products
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {product.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#c9a962] text-[#1a1a1a] text-xs tracking-widest uppercase">
                    Featured
                  </div>
                )}

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-6 py-3 bg-white text-[#1a1a1a] text-sm tracking-wider uppercase 
                                 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0
                                 transition-all duration-500 hover:bg-[#c9a962]"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase mb-1">
                  {product.subcategory}
                </p>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-[#c9a962] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#8b7e74] text-sm leading-relaxed mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-[#1a1a1a] font-medium">
                      {product.price}
                    </p>
                    <p className="text-xs text-[#8b7e74]">
                      {product.deliveryTime}
                    </p>
                  </div>
                  <div className="text-xs text-[#8b7e74]">{product.fabric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

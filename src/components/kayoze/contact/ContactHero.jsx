import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
            {/* Background Image Placeholder - Replace with actual image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1594938298603-c8148c4729d7?q=80&w=2070&auto=format&fit=crop")',
                }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/30 via-transparent to-[#1a1a1a]" />

            <div className="relative z-10 text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4"
                >
                    Get In Touch
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide"
                >
                    Contact Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                >
                    Whether you're in Kathmandu or across the globe, we're here to help you begin your bespoke journey.
                </motion.p>
            </div>
        </div>
    );
}

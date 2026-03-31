import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "5,000+", label: "Satisfied Clients" },
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Award, value: "100%", label: "Handcrafted" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=750&fit=crop"
                alt="Master Tailor at Work"
                className="w-full max-w-md shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 md:right-0 z-20">
              <img
                src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=300&h=400&fit=crop"
                alt="Fabric Selection"
                className="w-48 md:w-64 shadow-xl border-4 border-white"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#c9a962]/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">About Kayoze</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-wide mb-6">
              A Legacy of <br/>Fine Tailoring
            </h2>
            
            <div className="space-y-6 text-[#8b7e74] leading-relaxed">
              <p>
                Nestled in the heart of Kathmandu's prestigious Durbar Marg, Kayoze represents 
                the pinnacle of Nepali bespoke tailoring. What began as a passion for 
                impeccable craftsmanship has evolved into a trusted name among discerning 
                gentlemen and women across the globe.
              </p>
              <p>
                Our master tailors bring decades of experience to every garment, combining 
                time-honored techniques passed down through generations with contemporary 
                design sensibilities. Each piece that leaves our atelier is a testament to 
                our unwavering commitment to perfection.
              </p>
              <p>
                From classic business suits to traditional Bandi coats, from bespoke 
                wedding attire to everyday elegance, we craft garments that don't just 
                fit your body—they express your personality and elevate your presence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-100">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-[#c9a962] mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-light text-[#1a1a1a]">{stat.value}</p>
                  <p className="text-xs text-[#8b7e74] tracking-wider uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="text-6xl text-[#c9a962]/20 font-serif">"</div>
          <p className="text-2xl md:text-3xl font-light text-[#1a1a1a] italic leading-relaxed -mt-8">
            A well-tailored suit is not just clothing—it's armor for the modern gentleman, 
            crafted to command respect and inspire confidence.
          </p>
          <p className="mt-6 text-[#c9a962] tracking-widest text-sm uppercase">
            — The Kayoze Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
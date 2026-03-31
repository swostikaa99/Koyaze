import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Scissors, Ruler, Award, Clock } from "lucide-react";

import AnimatedThread from "@/components/kayoze/AnimatedThread";
import AnimatedText from "@/components/kayoze/AnimatedText";
import ServiceCard from "@/components/kayoze/ServiceCard";
import TestimonialSlider from "@/components/kayoze/TestimonialSlider";
import ContactSection from "@/components/kayoze/ContactSection";

import AboutSection from "@/components/kayoze/AboutSection";
import GallerySection from "@/components/kayoze/GallerySection";
import CollectionsSection from "@/components/kayoze/CollectionsSection";
import HeritageSection from "@/components/kayoze/HeritageSection";
import ProcessSection from "@/components/kayoze/ProcessSection";
import { services } from "@/data/services";

const craftsmanshipFeatures = [
  {
    icon: Scissors,
    title: "Master Craftsmanship",
    description:
      "Each garment is hand-cut and assembled by our master tailors with decades of experience.",
  },
  {
    icon: Ruler,
    title: "Perfect Measurements",
    description:
      "We take over 30 measurements to ensure an impeccable fit that moves with you.",
  },
  {
    icon: Award,
    title: "Premium Fabrics",
    description:
      "Sourced from the world's finest mills, our fabrics are chosen for quality and longevity.",
  },
  {
    icon: Clock,
    title: "Timeless Design",
    description:
      "Classic silhouettes refined with modern sensibilities for enduring style.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 transition-colors duration-300">
      <style>{`
        @keyframes thread-draw {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-thread-draw {
          animation: thread-draw 4s ease-out forwards;
        }
        .animate-thread-draw-delayed {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: thread-draw 4s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen pt-20 bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
        <AnimatedThread />

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Tailoring"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 via-[#1a1a1a]/70 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a962] tracking-[0.4em] text-sm md:text-base uppercase mb-6"
          >
            Bespoke Tailoring • Durbar Marg, Kathmandu
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] mb-8 relative h-32 md:h-48 lg:h-32 flex items-center justify-center"
          >
            {/* Yellow static text */}
            <span className="text-yellow-500 absolute">KAYOZE</span>

            {/* Red animated writing overlay */}
            <div className="absolute">
              <AnimatedText />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Where tradition meets modern elegance. Crafting bespoke garments
            that tell your story, delivered worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/bookconcultation"
              className="px-10 py-4 bg-[#c9a962] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase
                         hover:bg-[#d4b876] transition-all duration-300"
            >
              Book Consultation
            </Link>
            <Link
              to="/products"
              className="px-10 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase
                         hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-[#c9a962]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Heritage Section */}
      <HeritageSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Collections Section */}
      <CollectionsSection />

      {/* Services Section */}
      <section
        id="services"
        className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#f8f6f3] dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] dark:text-white tracking-wide">
              Bespoke Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section
        id="craftsmanship"
        className="py-24 md:py-32 bg-[#1a1a1a] dark:bg-gray-950 relative overflow-hidden"
      >
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1000&h=1500&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
                The Art of Tailoring
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
                Craftsmanship <br />
                Beyond Compare
              </h2>
              <p className="text-[#8b7e74] text-lg leading-relaxed mb-8">
                At Kayoze, every stitch tells a story of dedication to
                perfection. Our master tailors blend generations of traditional
                techniques with contemporary design to create garments that are
                uniquely yours.
              </p>
              <p className="text-[#8b7e74] leading-relaxed">
                From the initial consultation to the final fitting, we ensure an
                experience that matches the excellence of our craftsmanship.
                Whether you visit us in Kathmandu or connect via video call, the
                Kayoze experience remains uncompromised.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {craftsmanshipFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-white/10 hover:border-[#c9a962]/30 transition-colors duration-300"
                >
                  <feature.icon className="w-8 h-8 text-[#c9a962] mb-4" />
                  <h3 className="text-white font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#8b7e74] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#f8f6f3] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] dark:text-white tracking-wide">
              Your Journey With Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Share your vision and style preferences with our experts.",
              },
              {
                step: "02",
                title: "Measurements",
                desc: "Precise measurements taken in-person or via video call.",
              },
              {
                step: "03",
                title: "Crafting",
                desc: "Your garment is meticulously crafted by master tailors.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final fitting and worldwide delivery to your doorstep.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-6xl font-light text-[#c9a962]/20">
                  {item.step}
                </span>
                <h3 className="text-xl text-[#1a1a1a] dark:text-white font-medium mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-[#8b7e74] dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 md:py-32 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              Client Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] dark:text-white tracking-wide">
              Words From Our Clients
            </h2>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Worldwide Shipping Banner */}
      <section className="py-16 bg-[#c9a962] dark:bg-[#b8943f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
              Worldwide Delivery
            </h3>
            <p className="text-[#1a1a1a]/70 text-lg">
              From Kathmandu to the world. We ship our bespoke creations
              globally, ensuring luxury reaches your doorstep wherever you are.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

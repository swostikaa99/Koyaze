import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Globe, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#001F3F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            Begin Your Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[#8b7e74] text-lg leading-relaxed">
              Schedule a personal consultation at our Durbar Marg atelier, or
              connect with us virtually for our international clientele. We're
              here to craft your perfect garment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Visit Our Atelier
                  </p>
                  <p className="text-[#8b7e74]">
                    Durbar Marg, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Call or Message</p>
                  <p className="text-[#8b7e74]">+977 9702691187</p>
                  <p className="text-[#8b7e74] text-sm">
                    WhatsApp & Viber Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Worldwide Shipping
                  </p>
                  <p className="text-[#8b7e74]">
                    We deliver luxury to your doorstep, globally
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4"
          >
            <a
              href="https://wa.me/9779702691187"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-8 py-6 bg-[#25D366] text-white
                         hover:bg-[#22c55e] transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg tracking-wide">WhatsApp Us</span>
              </span>
              <span className="text-sm opacity-70">Start Chat →</span>
            </a>

            <a
              href="viber://chat?number=9779702691187"
              className="group flex items-center justify-between px-8 py-6 bg-[#7360F2] text-white
                         hover:bg-[#6355d4] transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg tracking-wide">Viber Us</span>
              </span>
              <span className="text-sm opacity-70">Connect →</span>
            </a>

            <a
              href="tel:+9779702691187"
              className="group flex items-center justify-between px-8 py-6 border border-[#c9a962] text-[#c9a962]
                         hover:bg-[#c9a962] hover:text-[#1a1a1a] transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg tracking-wide">Call Directly</span>
              </span>
              <span className="text-sm opacity-70">+977 970 269 1187 →</span>
            </a>

            <a
              href="https://www.instagram.com/kayoze_durbarmarg/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-8 py-6 border border-white/20 text-white/80
                         hover:border-white hover:text-white transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-lg tracking-wide">
                  Follow on Instagram
                </span>
              </span>
              <span className="text-sm opacity-70">@kayoze_durbarmarg →</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

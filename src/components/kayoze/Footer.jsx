import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { label: "Products", to: createPageUrl("Products") },
    { label: "Fabrics", to: createPageUrl("Fabrics") },
    { label: "Contact", to: createPageUrl("Contact") },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/kayoze_durbarmarg",
      icon: Instagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: Facebook,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/9779702691187",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="w-full bg-[#1a1a1a] dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-light tracking-[0.2em] mb-4">
              KAYOZE
            </h3>
            <p className="text-white/60 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              Luxury custom tailored suits crafted with precision and passion.
              Experience the art of bespoke tailoring in Durbar Marg.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-[#c9a962]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/60 dark:text-gray-400 text-sm sm:text-base">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-2 hover:text-[#c9a962] transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </li>
              ))}
              <li>
                <motion.a
                  href="https://wa.me/9779702691187?text=I'd%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 hover:text-[#c9a962] transition-colors"
                >
                  Book Consultation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-[#c9a962]">
              Contact Us
            </h4>
            <div className="space-y-3 text-white/60 dark:text-gray-400 text-sm sm:text-base">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a962]" />
                <span>Durbar Marg, Kathmandu, Nepal</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c9a962]" />
                <a
                  href="tel:+9779702691187"
                  className="hover:text-[#c9a962] transition-colors"
                >
                  +977 9702691187
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c9a962]" />
                <a
                  href="mailto:info@kayoze.com"
                  className="hover:text-[#c9a962] transition-colors"
                >
                  info@kayoze.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c9a962]" />
                <span>Sun - Fri: 10:00 AM - 7:00 PM</span>
              </p>
            </div>
          </motion.div>

          {/* Column 4: Map + Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Map */}
            <div>
              <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-[#c9a962]">
                Visit Us
              </h4>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full h-28 mb-4 overflow-hidden rounded-md"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.4711664429615!2d85.31428497546747!3d27.709762876181212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f4d1ac0ef%3A0xbc4ab09780de0d61!2sKAYOZE%20DURBARMARG!5e1!3m2!1sen!2snp!4v1764222040871!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kayoze Location"
                />
              </motion.div>
            </div>

            {/* Follow Us (Right Aligned) */}
            <div className="text-right">
              <h4 className="text-sm font-medium mb-3 uppercase tracking-wider text-[#c9a962]">
                Follow Us
              </h4>
              <div className="inline-flex gap-4 justify-end">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/60 hover:text-[#c9a962] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/40">
          <p>
            © {new Date().getFullYear()} Kayoze. All rights reserved. Crafted
            with excellence | Powered by{" "}
            <a
              href="https://anoopinnovations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 underline"
            >
              Anoop Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

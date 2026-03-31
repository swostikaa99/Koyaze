import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "Home", pageName: "Home" },
  { name: "Products", pageName: "Products" },
  { name: "Fabrics", pageName: "Fabrics" },
  { name: "Contact", pageName: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TEXT COLORS BASED ON SCROLL
  const textColor = scrolled ? "text-white" : "text-black";

  const isActive = (page) =>
    location.pathname === createPageUrl(page)
      ? "text-[#c9a962]"
      : `${textColor} hover:text-[#c9a962]`;

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md py-4" : "bg-white py-6"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <a href="#" className="relative group">
            <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-yellow-600">
              KAYOZE
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a962] group-hover:w-full transition-all duration-500" />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={createPageUrl(link.pageName)}
                className={`text-xs xl:text-sm tracking-widest uppercase transition-colors duration-300 ${isActive(link.pageName)}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA BUTTON */}
            <a
              href="/bookconcultation"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block px-4 xl:px-6 py-2 xl:py-3 border border-[#c9a962] text-[#c9a962] text-xs xl:text-sm tracking-widest
                hover:bg-[#c9a962] hover:text-[#1a1a1a] transition-all duration-300 uppercase"
            >
              Book Consultation
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${scrolled ? "text-white" : "text-black"}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={createPageUrl(link.pageName)}
                    onClick={handleNavClick}
                    className={`text-2xl font-light tracking-widest uppercase transition-colors duration-300 ${
                      location.pathname === createPageUrl(link.pageName)
                        ? "text-[#c9a962]"
                        : "text-white/80 hover:text-[#c9a962]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/9779702691187"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-6 py-4 border border-[#c9a962] text-[#c9a962] text-center tracking-widest uppercase"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

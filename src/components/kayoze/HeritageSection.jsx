import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { end: 500, suffix: "+", label: "Premium Fabrics" },
  { end: 15, suffix: "+", label: "Years Excellence" },
  { end: 2000, suffix: "+", label: "Satisfied Clients" },
];

function CountUp({ end, suffix = "", duration = 2200 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime;
    let rafId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HeritageSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&h=900&fit=crop"
                alt="Bespoke Tailoring"
                className="w-full shadow-2xl"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#c9a962]/40 -z-10" />

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-[#1a1a1a] p-6 shadow-xl">
                <p className="text-[#c9a962] text-4xl font-light">5+</p>
                <p className="text-white text-sm tracking-wider uppercase">
                  Years of Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              Our Heritage
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-wide mb-8 leading-tight">
              The Art of <br />
              Bespoke Tailoring
            </h2>

            <div className="space-y-6 text-[#8b7e74] leading-relaxed">
              <p>
                Located in the prestigious Durbar Marg district of Kathmandu,
                Kayoze represents the epitome of luxury custom tailoring. Our
                master tailors bring decades of experience in crafting
                impeccable suits that embody sophistication and timeless
                elegance.
              </p>
              <p>
                Each garment is meticulously handcrafted using the finest
                imported fabrics from renowned mills across Europe. From the
                initial consultation to the final fitting, we ensure every
                detail reflects your unique personality and style preferences.
              </p>
              <p>
                At Kayoze, we don't just create suits – we craft confidence. Our
                bespoke approach guarantees a perfect fit and unparalleled
                quality that distinguishes you in every setting, from boardrooms
                to special occasions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-gray-200">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-light text-[#c9a962]">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-[#8b7e74] tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Ruler, Palette, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Meet with our expert stylists to discuss your vision, preferences, and requirements.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Measurements",
    description:
      "Precise measurements taken by our master tailors to ensure a perfect fit.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Fabric Selection",
    description:
      "Choose from our extensive collection of premium fabrics and styling options.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Fitting",
    description:
      "Multiple fittings ensure your suit fits perfectly before final delivery.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            The Bespoke Journey
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From consultation to completion, experience the art of true bespoke
            tailoring
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#c9a962]/50 to-transparent z-0" />
              )}

              <div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 
                              hover:border-[#c9a962]/50 transition-all duration-500 group-hover:bg-white/10"
              >
                {/* Number */}
                <span
                  className="absolute -top-4 -left-4 text-6xl font-light text-[#c9a962]/20 
                                 group-hover:text-[#c9a962]/40 transition-colors duration-500"
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full border border-[#c9a962]/30 flex items-center justify-center mb-6
                                group-hover:bg-[#c9a962] group-hover:border-[#c9a962] transition-all duration-500"
                >
                  <step.icon className="w-6 h-6 text-[#c9a962] group-hover:text-[#1a1a1a] transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#c9a962] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase
                       hover:bg-[#d4b876] transition-all duration-300"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Richardson",
    location: "London, UK",
    text: "The attention to detail at Kayoze is extraordinary. My bespoke suit fits perfectly, and the virtual consultation made the entire process seamless despite the distance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Raj Sharma",
    location: "Dubai, UAE",
    text: "I've had suits made in London and Hong Kong, but Kayoze's craftsmanship and personal service are unmatched. The Bandi coat they made for my wedding was stunning.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "From the fabric selection to the final fitting, every step was handled with precision and care. Kayoze delivers true luxury tailoring.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <Quote className="absolute -top-4 left-0 w-16 h-16 text-[#c9a962]/10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 md:px-16"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-[#1a1a1a] leading-relaxed mb-10 italic">
            "{testimonials[current].text}"
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <img 
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#c9a962]/30"
            />
            <div className="text-left">
              <p className="font-medium text-[#1a1a1a]">{testimonials[current].name}</p>
              <p className="text-sm text-[#8b7e74]">{testimonials[current].location}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center
                     hover:border-[#c9a962] hover:bg-[#c9a962] group transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#c9a962] w-8' : 'bg-[#1a1a1a]/20'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center
                     hover:border-[#c9a962] hover:bg-[#c9a962] group transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}
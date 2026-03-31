import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#f9f9f9] p-8 md:p-12" // Light background for form area
        >
            <h2 className="text-3xl font-light text-gray-800 mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-8 font-light">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                            type="text"
                            placeholder="John Smith"
                            className="w-full bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a962] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a962] transition-colors"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            className="w-full bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a962] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Country *</label>
                        <select className="w-full bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a962] transition-colors appearance-none">
                            <option>Select your country</option>
                            <option>Nepal</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Australia</option>
                            {/* Add more countries */}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Service Interested In *</label>
                    <select className="w-full bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a962] transition-colors appearance-none">
                        <option>Select a service</option>
                        <option>Bespoke Suit</option>
                        <option>Wedding Sherwani</option>
                        <option>Shirts</option>
                        <option>Alterations</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea
                        rows="5"
                        placeholder="Tell us about your requirements, preferred style, timeline, or any questions you have..."
                        className="w-full bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#1a1a1a] text-white py-4 px-8 hover:bg-[#c9a962] hover:text-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-medium"
                >
                    <Send className="w-4 h-4" />
                    Send Message
                </button>
            </form>
        </motion.div>
    );
}

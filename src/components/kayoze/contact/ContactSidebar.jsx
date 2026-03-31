import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Globe, Instagram, Facebook } from 'lucide-react';

export default function ContactSidebar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            {/* Map Section */}
            <div className="bg-white p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-[#c9a962]" />
                    <h3 className="text-lg font-medium text-gray-900">Our Atelier</h3>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-48 bg-gray-200 mb-6 relative overflow-hidden group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403132262!2d85.31485931506216!3d27.70903198279126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190056e69829%3A0x6b86703802c04620!2sDurbar%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1625561234567!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>

                <div className="text-gray-600 text-sm leading-relaxed">
                    <p className="font-medium text-gray-900">Durbar Marg</p>
                    <p>Kathmandu 44600</p>
                    <p>Nepal</p>
                </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-[#c9a962]" />
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Sunday - Friday</span>
                        <span className="text-gray-900 font-medium">10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="text-gray-900 font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                        Timezone: Nepal Standard Time (NPT / UTC+5:45)
                    </p>
                </div>
            </div>

            {/* International Clients */}
            <div className="bg-[#1a1a1a] p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-[#c9a962]" />
                    <h3 className="text-lg font-medium">International Clients</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    We welcome clients from around the world. Our virtual consultation service allows us to take measurements via video call, ensuring a perfect fit regardless of your location.
                </p>
                <button className="w-full bg-[#c9a962] text-[#1a1a1a] py-3 px-4 text-sm font-medium hover:bg-white transition-colors uppercase tracking-wide">
                    Schedule Virtual Fitting
                </button>
            </div>

            {/* Follow Us */}
            <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 text-sm mb-6">View our latest creations and client testimonials on Instagram.</p>
                <a
                    href="https://www.instagram.com/kayoze_durbarmarg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 hover:text-[#c9a962] transition-colors"
                >
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">@kayoze_durbarmarg</span>
                </a>
            </div>
        </motion.div>
    );
}

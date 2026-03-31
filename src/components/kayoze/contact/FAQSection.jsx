import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: "How long does it take to make a bespoke suit?",
        answer: "A fully bespoke suit typically takes 4-6 weeks from initial consultation to final delivery. This includes two fittings to ensure perfection."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide. We use premium courier services to ensure your garments arrive safely. International shipping typically takes 5-10 business days."
    },
    {
        question: "Can I get fitted remotely?",
        answer: "Absolutely. We offer detailed video consultations where we guide you through taking your own measurements. Many of our international clients have been fitted this way with excellent results."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept international bank transfers, major credit cards, and PayPal. A 50% deposit is required to begin work, with the balance due upon completion."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#c9a962] tracking-[0.2em] text-xs uppercase mb-3">Common Questions</p>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#f9f9f9] overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                            >
                                <span className="font-medium text-gray-900">{faq.question}</span>
                                <span className="text-[#c9a962]">
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 text-gray-500 text-sm">
                    <p>Have more questions? We're here to help.</p>
                    <a href="https://wa.me/9779702691187" className="inline-flex items-center gap-2 text-[#c9a962] mt-2 hover:underline">
                        <MessageCircle className="w-4 h-4" />
                        Chat with us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

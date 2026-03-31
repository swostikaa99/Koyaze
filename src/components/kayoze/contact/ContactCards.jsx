import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Video } from 'lucide-react';

const cards = [
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: 'Quick response for international clients.',
        action: '+977 970 269 1187',
        link: 'https://wa.me/9779702691187',
        color: 'text-[#25D366]'
    },
    {
        icon: Phone,
        title: 'Phone / Viber',
        description: 'Direct line to our atelier.',
        action: '+977 970 269 1187',
        link: 'tel:+9779702691187',
        color: 'text-[#7360F2]'
    },
    {
        icon: Video,
        title: 'Video Consultation',
        description: 'Virtual fittings for overseas clients.',
        action: 'Schedule online',
        link: '#schedule', // Placeholder link
        color: 'text-[#c9a962]'
    }
];

export default function ContactCards() {
    return (
        <div className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <motion.a
                        key={index}
                        href={card.link}
                        target={card.link.startsWith('http') ? '_blank' : undefined}
                        rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border-t-4 border-transparent hover:border-[#c9a962]"
                    >
                        <div className={`w-12 h-12 rounded-full ${card.color.replace('text-', 'bg-')}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <card.icon className={`w-6 h-6 ${card.color}`} />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{card.description}</p>
                        <span className="text-gray-900 font-medium border-b border-gray-200 pb-1 group-hover:border-[#c9a962] transition-colors">
                            {card.action}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}

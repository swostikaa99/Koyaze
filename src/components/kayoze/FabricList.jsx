import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import FabricCard from '@/components/kayoze/FabricCard';

export default function FabricList() {
    const { fabrics, activeOrigin } = useOutletContext();
    const { category } = useParams();
    
    // If no category param, it means "all"
    const activeCategory = category || 'all';

    const filteredFabrics = fabrics.filter((fabric) => {
        const categoryMatch = activeCategory === 'all' || fabric.category === activeCategory;
        const originMatch = activeOrigin === 'all' || fabric.originId === activeOrigin;
        return categoryMatch && originMatch;
    });

    return (
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredFabrics.map((fabric, index) => (
                        <FabricCard key={fabric.id} fabric={fabric} index={index} />
                    ))}
                </div>

                {filteredFabrics.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[#8b7e74] dark:text-gray-400">No fabrics match your selected filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

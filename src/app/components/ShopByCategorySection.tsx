'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const categories = [
{ name: 'Floor Cleaners', icon: '🧹', count: 24, image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e49d6ce-1773892160235.png", alt: 'Shiny clean floor reflecting light in bright room', color: 'bg-blue-50 border-blue-200' },
{ name: 'Toilet Cleaners', icon: '🚽', count: 18, image: "https://img.rocket.new/generatedImages/rocket_gen_img_17b64e0ad-1772187350214.png", alt: 'Sparkling clean white bathroom with gleaming fixtures', color: 'bg-green-50 border-green-200' },
{ name: 'Hand Wash', icon: '🧴', count: 15, image: "https://images.unsplash.com/photo-1584516080914-2282ead7a02c", alt: 'Person washing hands with foam soap at sink, bright clean bathroom', color: 'bg-purple-50 border-purple-200' },
{ name: 'Disinfectants', icon: '🦠', count: 20, image: "https://img.rocket.new/generatedImages/rocket_gen_img_119755067-1772980509107.png", alt: 'Spray bottle with disinfectant on clean white surface', color: 'bg-orange-50 border-orange-200' },
{ name: 'Laundry Care', icon: '👕', count: 12, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1639f71a7-1773156142040.png", alt: 'Freshly laundered white clothes folded neatly in bright light', color: 'bg-cyan-50 border-cyan-200' },
{ name: 'Kitchen Cleaners', icon: '🍳', count: 16, image: "https://images.unsplash.com/photo-1722942110234-7422f485c68b", alt: 'Spotless modern kitchen with gleaming countertops and stainless steel appliances', color: 'bg-yellow-50 border-yellow-200' },
{ name: 'Air Fresheners', icon: '🌸', count: 14, image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ad011dc-1767867050144.png", alt: 'Fresh flowers and clean air freshener in bright living room', color: 'bg-pink-50 border-pink-200' },
{ name: 'Industrial', icon: '🏭', count: 30, image: "https://images.unsplash.com/photo-1583737097468-2cc78bea3c29", alt: 'Industrial cleaning equipment in large factory floor, bright overhead lighting', color: 'bg-slate-50 border-slate-200' }];


export default function ShopByCategorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Browse</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Shop by Category</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all"
              aria-label="Scroll left">
              
              ‹
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all"
              aria-label="Scroll right">
              
              ›
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          
          {categories.map((cat, i) =>
          <Link
            key={i}
            href="/shop"
            className="snap-start shrink-0 group">
            
              <div className={`w-36 sm:w-44 rounded-2xl border ${cat.color} overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="h-28 sm:h-32 overflow-hidden relative">
                  <AppImage
                  src={cat.image}
                  alt={cat.alt}
                  width={176}
                  height={128}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-bold text-muted-foreground px-2 py-0.5 rounded-full">
                    {cat.count}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-lg mb-0.5">{cat.icon}</p>
                  <p className="text-xs font-bold text-foreground leading-tight">{cat.name}</p>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['All Products', 'Best Sellers', 'New Arrivals', 'Eco-Friendly', 'Under ₹99', 'Bulk Deals', 'Hospital Grade'].map((tag) =>
          <Link
            key={tag}
            href="/shop"
            className="category-chip px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground bg-white hover:text-primary-foreground">
            
              {tag}
            </Link>
          )}
        </div>
      </div>
    </section>);

}
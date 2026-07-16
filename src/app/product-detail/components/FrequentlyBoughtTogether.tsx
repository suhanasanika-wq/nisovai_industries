'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const bundleItems = [
{ id: 1, name: 'NisoClean Pro Floor Cleaner 1L', price: 149, image: "https://img.rocket.new/generatedImages/rocket_gen_img_16cfa77f3-1768475831233.png", imageAlt: 'Blue floor cleaner bottle' },
{ id: 2, name: 'NisoMop Spin Mop', price: 599, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2ab4aa5-1769335668785.png", imageAlt: 'Blue spin mop' },
{ id: 3, name: 'NisoSan Hand Sanitizer 300ml', price: 119, image: "https://images.unsplash.com/photo-1628771066235-78f074cdc9d6", imageAlt: 'Clear hand sanitizer bottle' }];


export default function FrequentlyBoughtTogether() {
  const [selected, setSelected] = useState([true, true, true]);
  const total = bundleItems?.reduce((sum, item, i) => sum + (selected?.[i] ? item?.price : 0), 0);
  const originalTotal = bundleItems?.reduce((sum, item) => sum + item?.price, 0);
  const savings = Math.round(originalTotal * 0.1);

  return (
    <section className="bg-white rounded-2xl border border-border p-6 sm:p-8">
      <h2 className="text-xl font-extrabold text-foreground mb-6">Frequently Bought Together</h2>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {bundleItems?.map((item, i) =>
        <React.Fragment key={item?.id}>
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selected?.[i] ? 'border-primary' : 'border-border opacity-50'}`}>
                  <AppImage src={item?.image} alt={item?.imageAlt} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <label className="absolute -top-2 -right-2 cursor-pointer">
                  <input
                  type="checkbox"
                  checked={selected?.[i]}
                  onChange={() => setSelected((prev) => prev?.map((s, j) => j === i ? !s : s))}
                  className="sr-only" />
                
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${selected?.[i] ? 'bg-primary border-primary text-white' : 'bg-white border-border text-transparent'}`}>
                    ✓
                  </div>
                </label>
              </div>
              <p className="text-xs text-center text-foreground font-semibold max-w-[80px] leading-tight line-clamp-2">{item?.name}</p>
              <p className="text-xs font-bold text-primary">₹{item?.price}</p>
            </div>
            {i < bundleItems?.length - 1 &&
          <span className="text-2xl text-muted-foreground font-light">+</span>
          }
          </React.Fragment>
        )}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 bg-muted rounded-xl p-4">
        <div>
          <p className="text-sm text-muted-foreground">Total for {selected?.filter(Boolean)?.length} items</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-primary">₹{total}</span>
            {savings > 0 && <span className="text-xs text-accent font-semibold">Save ₹{savings} (10% bundle discount)</span>}
          </div>
        </div>
        <Link
          href="/shop"
          className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl shimmer-btn hover:bg-primary/90 transition-all text-sm">
          
          Add All to Cart
        </Link>
      </div>
    </section>);

}
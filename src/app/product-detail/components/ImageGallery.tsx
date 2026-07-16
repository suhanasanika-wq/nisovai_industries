'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const productImages = [
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1019f80ab-1772980509834.png", alt: 'NisoClean Pro Floor Cleaner front view, blue bottle with white label on clean white surface' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_10f4140bc-1765808158607.png", alt: 'NisoClean Pro Floor Cleaner in use on kitchen floor, gleaming tiles' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_10559546b-1784180085263.png", alt: 'NisoClean Pro Floor Cleaner side view showing ingredients list' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_11bc48c99-1784180085276.png", alt: 'NisoClean Pro Floor Cleaner pack of 2 value deal, white background' }];


export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div
        className="relative bg-muted rounded-2xl overflow-hidden cursor-zoom-in"
        style={{ aspectRatio: '1/1' }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}>
        
        <AppImage
          src={productImages[activeIndex].src}
          alt={productImages[activeIndex].alt}
          width={600}
          height={600}
          priority
          className="w-full h-full object-cover transition-transform duration-300"
          style={isZoomed ? {
            transform: 'scale(1.8)',
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
          } : {}} />
        

        {/* Navigation arrows */}
        <button
          onClick={() => setActiveIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors text-foreground"
          aria-label="Previous image">
          
          ‹
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % productImages.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors text-foreground"
          aria-label="Next image">
          
          ›
        </button>

        {/* Zoom hint */}
        {!isZoomed &&
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            🔍 Hover to zoom
          </div>
        }

        {/* Image counter */}
        <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {activeIndex + 1} / {productImages.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {productImages.map((img, i) =>
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
          i === activeIndex ? 'border-primary shadow-primary' : 'border-border hover:border-primary/50'}`
          }
          aria-label={`View image ${i + 1}`}>
          
            <AppImage
            src={img.src}
            alt={img.alt}
            width={64}
            height={64}
            className="w-full h-full object-cover" />
          
          </button>
        )}
      </div>
    </div>);

}
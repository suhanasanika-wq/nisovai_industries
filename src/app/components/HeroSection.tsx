'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const heroSlides = [
{
  badge: '🌟 New Launch 2026',
  headline: 'Clean Place,',
  headlineAccent: 'Healthy Life.',
  sub: 'Premium cleaning & hygiene products trusted by 50,000+ homes, offices, hospitals, and industries across India.',
  cta: 'Shop Now',
  ctaSecondary: 'View Categories',
  image: "https://images.unsplash.com/photo-1653267408946-c4f8421392cd",
  imageAlt: 'Bright clean kitchen with gleaming white tiles and sparkling surfaces, natural daylight streaming through window',
  tag: 'Free delivery above ₹499'
},
{
  badge: '🔥 Best Sellers',
  headline: 'Industrial Strength,',
  headlineAccent: 'Home Safe.',
  sub: 'ISO 9001:2015 certified formulations. Powerful enough for industries, gentle enough for your family.',
  cta: 'Explore Range',
  ctaSecondary: 'Learn More',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ede33286-1772739644666.png",
  imageAlt: 'Professional cleaning supplies arranged neatly on bright white background, blue and green bottles',
  tag: 'ISO 9001:2015 Certified'
}];


const offerBanners = [
{ label: 'Up to 40% OFF', sub: 'Floor Cleaners', color: 'bg-primary', icon: '🧹' },
{ label: 'Buy 2 Get 1 FREE', sub: 'Hand Wash Range', color: 'bg-accent', icon: '🧴' },
{ label: 'New Arrival', sub: 'Eco-Friendly Range', color: 'bg-orange-500', icon: '🌿' },
{ label: 'Bulk Discount', sub: 'Industrial Orders', color: 'bg-purple-600', icon: '🏭' }];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides?.[currentSlide];

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-hero-gradient min-h-[85vh] flex flex-col">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" />
      {/* Background blobs */}
      <div className="absolute top-10 -left-20 w-96 h-96 blob-primary pointer-events-none z-0 animate-float" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 blob-accent pointer-events-none z-0" style={{ animationDelay: '2s' }} />
      {/* Main Hero */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-12 md:py-16">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-foreground">{slide?.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-hero-xl font-extrabold text-foreground leading-tight tracking-tight">
              {slide?.headline}
              <br />
              <span className="text-primary relative inline-block">
                {slide?.headlineAccent}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 8 Q 50 12 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              {slide?.sub}
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-warning text-sm">★★★★★</span>
                <span className="text-xs font-semibold text-foreground">4.8/5</span>
                <span className="text-xs text-muted-foreground">(12,400+ reviews)</span>
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="text-accent text-sm">✓</span>
                <span className="text-xs text-muted-foreground">{slide?.tag}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shimmer-btn hover:bg-primary/90 transition-all shadow-primary text-sm">
                
                {slide?.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-xl border border-border hover:border-primary hover:text-primary transition-all text-sm">
                
                {slide?.ctaSecondary}
              </Link>
            </div>

            {/* Stats mini */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
              { value: '50K+', label: 'Customers' },
              { value: '200+', label: 'Products' },
              { value: '15+', label: 'Years' }]?.
              map((stat) =>
              <div key={stat?.label} className="text-center">
                  <div className="text-xl font-extrabold text-primary">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground">{stat?.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[3rem] blur-2xl" />

              <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50">
                <AppImage
                  src={slide?.image}
                  alt={slide?.imageAlt}
                  width={600}
                  height={500}
                  className="w-full h-72 sm:h-96 object-cover"
                  priority />
                
                {/* Overlay gradient for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-panel rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white text-lg shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">ISO 9001:2015 Certified</p>
                      <p className="text-xs text-muted-foreground">Trusted by hospitals & industries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating product card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-border hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl">🧴</div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Floor Cleaner</p>
                    <p className="text-xs text-accent font-semibold">40% OFF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {heroSlides?.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`rounded-full transition-all ${i === currentSlide ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-primary/50'}`}
                aria-label={`Go to slide ${i + 1}`} />

              )}
            </div>
          </div>
        </div>
      </div>
      {/* SVG Wave Bottom */}
      <div className="relative z-10 w-full -mb-px">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-20">
          <path fill="#FFFFFF" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
      {/* Offer Banners Strip */}
      <div className="relative z-10 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
            {offerBanners?.map((banner, i) =>
            <Link
              key={i}
              href="/shop"
              className={`${banner?.color} text-white rounded-xl p-3 flex items-center gap-3 hover:opacity-90 transition-opacity`}>
              
                <span className="text-2xl">{banner?.icon}</span>
                <div>
                  <p className="text-xs font-extrabold leading-tight">{banner?.label}</p>
                  <p className="text-xs opacity-80 leading-tight">{banner?.sub}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>);

}
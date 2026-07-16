'use client';

import React, { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  name: 'Priya Sharma',
  role: 'Homemaker, Pune',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e749cb6e-1778301374725.png",
  avatarAlt: 'Indian woman smiling in casual home setting, warm natural light',
  quote: 'NisoClean floor cleaner is absolutely amazing. My tiles shine like never before and the lavender fragrance lasts all day. Have been using it for 2 years and will never switch.',
  rating: 5,
  product: 'NisoClean Floor Cleaner',
  verified: true
},
{
  name: 'Rajesh Mehta',
  role: 'Facility Manager, Taj Hotel Mumbai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12ea075c2-1763300507102.png",
  avatarAlt: 'Professional Indian man in formal attire, office background',
  quote: 'We switched our entire hotel to Nisovai industrial cleaners 3 years ago. The results are exceptional — our housekeeping team loves the products and guest satisfaction scores improved by 18%.',
  rating: 5,
  product: 'Industrial Cleaning Range',
  verified: true
},
{
  name: 'Dr. Sunita Patil',
  role: 'Hospital Administrator, Nagpur',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_189bf8c75-1772076983840.png",
  avatarAlt: 'Indian female doctor in white coat, hospital corridor background',
  quote: 'Hospital-grade disinfectants from Nisovai meet all infection control protocols. The NisoGuard range is effective against 99.9% of pathogens. Highly recommended for healthcare settings.',
  rating: 5,
  product: 'NisoGuard Disinfectant Range',
  verified: true
},
{
  name: 'Anita Desai',
  role: 'School Principal, Bengaluru',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_178471507-1772439819553.png",
  avatarAlt: 'Indian woman educator smiling, school building in background',
  quote: 'We use Nisovai products across all our school facilities. The hand sanitizers and surface cleaners are gentle enough for children yet highly effective. Bulk pricing is excellent!',
  rating: 5,
  product: 'NisoSan Hand Sanitizer',
  verified: true
},
{
  name: 'Vikram Nair',
  role: 'Restaurant Owner, Chennai',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e337c846-1763294002427.png",
  avatarAlt: 'South Indian businessman in casual formal wear, restaurant setting',
  quote: 'The kitchen degreaser is a game-changer for our restaurant kitchen. Cuts through grease instantly without any harsh chemical smell. My staff prefers it over all other brands we\'ve tried.',
  rating: 5,
  product: 'NisoKleen Kitchen Degreaser',
  verified: true
}];


export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Reviews</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              What Our Customers Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-warning">★★★★★</span>
              <span className="text-sm font-bold text-foreground ml-1">4.8</span>
              <span className="text-sm text-muted-foreground">(12,400+ reviews)</span>
            </div>
            <div className="flex gap-2 ml-2">
              <button onClick={() => scroll('left')} className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all" aria-label="Scroll left">‹</button>
              <button onClick={() => scroll('right')} className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all" aria-label="Scroll right">›</button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          
          {testimonials.map((t, i) =>
          <div
            key={i}
            className="min-w-[300px] sm:min-w-[380px] bg-white rounded-2xl border border-border p-6 snap-start hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col">
            
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) =>
              <span key={star} className={`text-sm ${star <= t.rating ? 'text-warning' : 'text-border'}`}>★</span>
              )}
              </div>

              {/* Quote icon */}
              <div className="text-primary/20 text-4xl font-serif leading-none mb-2">&ldquo;</div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 italic">
                {t.quote}
              </p>

              <div className="border-t border-border pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    {t.verified &&
                  <span className="text-accent text-xs">✓</span>
                  }
                  </div>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>

              <div className="mt-3 bg-muted rounded-lg px-3 py-1.5">
                <p className="text-xs text-muted-foreground">Purchased: <span className="font-semibold text-foreground">{t.product}</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
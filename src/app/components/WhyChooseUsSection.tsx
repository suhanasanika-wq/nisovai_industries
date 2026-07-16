'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
{ value: 50000, suffix: '+', label: 'Happy Customers', icon: '😊' },
{ value: 200, suffix: '+', label: 'Products', icon: '🧴' },
{ value: 15, suffix: '+', label: 'Years Experience', icon: '🏆' },
{ value: 500000, suffix: '+', label: 'Orders Delivered', icon: '📦' }];


function AnimatedCounter({ target, suffix, duration = 2000 }: {target: number;suffix: string;duration?: number;}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  const formatted = count >= 1000 ? (count / 1000).toFixed(count >= 100000 ? 0 : 0) + (count >= 1000 ? 'K' : '') : count.toString();
  const display = count >= 1000 ? count >= 100000 ? Math.floor(count / 1000) + 'K' : count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count : count;

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Why Nisovai</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
            Trusted by Homes &amp; Businesses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            From households to hospitals, our products deliver consistent quality backed by science and trusted by millions.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
           Array has 5 cards: [BulkOrders, FreeDelivery, EcoFriendly, Support, ISO]
           Row 1: [col-1-2: BulkOrders cs-2 rs-2] [col-3: FreeDelivery cs-1 rs-1] [col-4: EcoFriendly cs-1 rs-1]
           Row 2: [col-1-2: BulkOrders continued] [col-3: Support cs-1 rs-1] [col-4: ISO cs-1 rs-1]
           Placed 5/5 cards ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mb-12 fade-up stagger-2">
          {/* Card 1: Large — Bulk Orders */}
          <div className="md:col-span-2 md:row-span-2 bg-primary rounded-3xl p-8 relative overflow-hidden group hover:shadow-primary transition-all duration-500 flex flex-col justify-between min-h-[280px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-x-8 -translate-y-8" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-x-4 translate-y-4" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-extrabold text-white mb-2">Bulk & Institutional Orders</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Special pricing for hospitals, hotels, schools, and industries. MOQ from 50 units with dedicated account management and custom labeling.
              </p>
            </div>
            <div className="relative z-10 mt-6">
              <div className="flex flex-wrap gap-2">
                {['Hospitals', 'Hotels', 'Schools', 'Industries'].map((tag) =>
                <span key={tag} className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                    {tag}
                  </span>
                )}
              </div>
              <div className="mt-4 h-32 rounded-2xl overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_17fe68f2c-1768325855631.png"
                  alt="Industrial cleaning operations in large facility with workers in safety gear"
                  className="w-full h-full object-cover" />
                
              </div>
            </div>
          </div>

          {/* Card 2: Free Delivery */}
          <div className="md:col-span-1 md:row-span-1 bg-accent/10 border border-accent/20 rounded-3xl p-6 flex items-center gap-4 group hover:bg-accent hover:border-accent transition-all duration-300">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🚚</div>
            <div>
              <h4 className="font-extrabold text-foreground group-hover:text-accent-foreground transition-colors text-base">Free Delivery</h4>
              <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">On orders above ₹499</p>
            </div>
          </div>

          {/* Card 3: Eco-Friendly */}
          <div className="md:col-span-1 md:row-span-1 bg-green-50 border border-green-200 rounded-3xl p-6 flex items-center gap-4 group hover:bg-accent hover:border-accent transition-all duration-300">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🌿</div>
            <div>
              <h4 className="font-extrabold text-foreground group-hover:text-accent-foreground transition-colors text-base">Eco-Friendly</h4>
              <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">Biodegradable formulations</p>
            </div>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="md:col-span-1 md:row-span-1 bg-orange-50 border border-orange-200 rounded-3xl p-6 flex items-center gap-4 group hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">💬</div>
            <div>
              <h4 className="font-extrabold text-foreground group-hover:text-white transition-colors text-base">24/7 Support</h4>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">WhatsApp & phone support</p>
            </div>
          </div>

          {/* Card 5: ISO Certified */}
          <div className="md:col-span-1 md:row-span-1 bg-purple-50 border border-purple-200 rounded-3xl p-6 flex items-center gap-4 group hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🏆</div>
            <div>
              <h4 className="font-extrabold text-foreground group-hover:text-white transition-colors text-base">ISO Certified</h4>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">9001:2015 & GMP</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up stagger-3">
          {stats.map((stat, i) =>
          <div key={i} className="text-center bg-muted rounded-2xl p-6 border border-border">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
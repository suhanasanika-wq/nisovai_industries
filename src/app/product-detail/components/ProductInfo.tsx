'use client';

import React, { useState } from 'react';

import Icon from '@/components/ui/AppIcon';

const sizes = ['500ml', '750ml', '1L', '2L', '5L'];
const fragrances = ['Lavender', 'Citrus', 'Pine', 'Unscented'];

export default function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState('1L');
  const [selectedFragrance, setSelectedFragrance] = useState('Lavender');
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mrp = 249;
  const price = 149;
  const discount = Math.round(((mrp - price) / mrp) * 100);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'usage', label: 'Usage' },
    { id: 'safety', label: 'Safety' },
    { id: 'specs', label: 'Specifications' },
  ];

  const faqs = [
    { q: 'Is this safe for marble floors?', a: 'Yes, NisoClean Pro is pH-neutral and safe for all floor types including marble, granite, ceramic, and vinyl.' },
    { q: 'How much to dilute for regular use?', a: 'Mix 20–30ml per bucket of water (5 litres) for regular cleaning. For heavy stains, use undiluted.' },
    { q: 'Is it pet and child safe?', a: 'When used as directed and surfaces are dry, it is safe for pets and children. Keep out of reach of children.' },
  ];

  return (
    <div className="space-y-6">
      {/* Brand & Category */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-primary bg-secondary px-3 py-1 rounded-full">Nisovai Industries</span>
        <span className="text-xs text-muted-foreground">Floor Cleaners</span>
      </div>
      {/* Product Name */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
        NisoClean Pro Floor Cleaner — Lavender Fresh
      </h1>
      {/* Rating */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1">
          {[1,2,3,4,5]?.map(s => (
            <span key={s} className={`text-lg ${s <= 4 ? 'text-warning' : 'text-border'}`}>★</span>
          ))}
          <span className="text-sm font-bold text-foreground ml-1">4.8</span>
        </div>
        <span className="text-sm text-muted-foreground">2,341 ratings</span>
        <span className="text-sm text-primary font-semibold hover:underline cursor-pointer">View all reviews</span>
        <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-0.5 rounded-full border border-accent/20">✓ Verified</span>
      </div>
      {/* Price Block */}
      <div className="bg-muted rounded-2xl p-5 space-y-2">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-3xl font-extrabold text-primary">₹{price}</span>
          <span className="text-lg price-strike text-muted-foreground">₹{mrp}</span>
          <span className="discount-badge text-sm px-3 py-1">{discount}% OFF</span>
        </div>
        <p className="text-xs text-muted-foreground">Inclusive of all taxes (GST 18%)</p>
        <div className="flex items-center gap-2">
          <span className="text-accent font-semibold text-sm">✓ In Stock</span>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-sm text-muted-foreground">Only 47 units left</span>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <Icon name="TruckIcon" size={16} className="text-accent" />
          <span className="text-sm text-foreground font-medium">Free delivery by <strong>Tomorrow, 18 Jul</strong></span>
        </div>
      </div>
      {/* Size Selector */}
      <div>
        <p className="text-sm font-bold text-foreground mb-3">
          Size: <span className="text-primary">{selectedSize}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {sizes?.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all ${
                selectedSize === size
                  ? 'border-primary bg-secondary text-primary' :'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* Fragrance Selector */}
      <div>
        <p className="text-sm font-bold text-foreground mb-3">
          Fragrance: <span className="text-primary">{selectedFragrance}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {fragrances?.map(frag => (
            <button
              key={frag}
              onClick={() => setSelectedFragrance(frag)}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all ${
                selectedFragrance === frag
                  ? 'border-primary bg-secondary text-primary' :'border-border text-muted-foreground hover:border-primary/50'
              }`}
            >
              {frag}
            </button>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="flex items-center gap-4">
        <p className="text-sm font-bold text-foreground">Quantity:</p>
        <div className="flex items-center gap-3 bg-muted rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-border transition-colors font-bold text-lg"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center font-bold text-foreground">{quantity}</span>
          <button
            onClick={() => setQuantity(q => Math.min(10, q + 1))}
            className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-border transition-colors font-bold text-lg"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <span className="text-sm text-muted-foreground">Max 10 per order</span>
      </div>
      {/* CTA Buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleAddToCart}
          className={`flex-1 min-w-[140px] py-4 rounded-xl font-bold text-sm transition-all shimmer-btn flex items-center justify-center gap-2 ${
            addedToCart
              ? 'bg-accent text-accent-foreground shadow-accent'
              : 'bg-secondary text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground'
          }`}
        >
          <Icon name="ShoppingCartIcon" size={18} />
          {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
        </button>
        <button className="flex-1 min-w-[140px] py-4 rounded-xl font-bold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all shimmer-btn shadow-primary">
          Buy Now
        </button>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="w-14 h-14 rounded-xl border-2 border-border flex items-center justify-center hover:border-red-300 transition-all"
          aria-label="Add to wishlist"
        >
          <Icon
            name="HeartIcon"
            variant={wishlisted ? 'solid' : 'outline'}
            size={22}
            className={wishlisted ? 'text-red-500' : 'text-muted-foreground'}
          />
        </button>
      </div>
      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: '🔒', label: 'Secure Payment', sub: 'UPI, Cards, COD' },
          { icon: '↩️', label: 'Easy Returns', sub: '7-day return policy' },
          { icon: '🏭', label: 'ISO Certified', sub: '9001:2015 & GMP' },
        ]?.map(badge => (
          <div key={badge?.label} className="bg-muted rounded-xl p-3 text-center border border-border">
            <div className="text-xl mb-1">{badge?.icon}</div>
            <p className="text-xs font-bold text-foreground leading-tight">{badge?.label}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{badge?.sub}</p>
          </div>
        ))}
      </div>
      {/* Tabs */}
      <div className="border-t border-border pt-6">
        <div className="flex gap-1 overflow-x-auto no-scrollbar border-b border-border mb-5">
          {tabs?.map(tab => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all -mb-px ${
                activeTab === tab?.id
                  ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab?.label}
            </button>
          ))}
        </div>

        {activeTab === 'description' && (
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p className="leading-relaxed">
              NisoClean Pro Floor Cleaner is a premium, concentrated formula designed to deep-clean and sanitize all types of hard floors. Infused with natural lavender essential oils, it leaves your floors sparkling clean with a fresh, long-lasting fragrance.
            </p>
            <ul className="mt-4 space-y-2">
              {['Removes 99.9% of bacteria and germs', 'Safe for marble, granite, ceramic, and vinyl floors', 'Concentrated formula — 1 bottle makes up to 50 washes', 'Biodegradable surfactants, eco-friendly', 'No harsh chemical residues, safe for children and pets when dry']?.map(f => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Water, Linear Alkylbenzene Sulphonate (LABS) 5–15%, Alcohol Ethoxylate &lt;5%, Sodium Chloride &lt;5%, Lavender Essential Oil, Lactic Acid (pH adjuster), Benzisothiazolinone (preservative), CI 42090 (colorant), Fragrance.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-bold text-accent mb-1">🌿 Eco-Friendly Formulation</p>
              <p className="text-xs text-muted-foreground">All surfactants are biodegradable per OECD 301B standards. No phosphates, no bleach, no harsh acids.</p>
            </div>
          </div>
        )}

        {activeTab === 'usage' && (
          <div className="space-y-4">
            {[
              { step: 1, title: 'Dilute', desc: 'Mix 20–30ml of NisoClean Pro in a bucket of 5 litres of water.' },
              { step: 2, title: 'Mop', desc: 'Dip mop into solution, wring well, and mop the floor in sections.' },
              { step: 3, title: 'Air Dry', desc: 'Allow floor to air dry. No rinsing required for regular use.' },
              { step: 4, title: 'Heavy Stains', desc: 'Apply undiluted directly to stain, wait 2 minutes, then mop.' },
            ]?.map(step => (
              <div key={step?.step} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">{step?.step}</div>
                <div>
                  <p className="text-sm font-bold text-foreground">{step?.title}</p>
                  <p className="text-sm text-muted-foreground">{step?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'safety' && (
          <div className="space-y-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-sm font-bold text-yellow-800 mb-2">⚠️ Safety Precautions</p>
              <ul className="space-y-1.5 text-sm text-yellow-700">
                <li>• Keep out of reach of children and pets</li>
                <li>• Avoid contact with eyes — if contact occurs, rinse with clean water for 15 minutes</li>
                <li>• Do not ingest — if swallowed, seek medical attention immediately</li>
                <li>• Store in cool, dry place away from direct sunlight</li>
                <li>• Do not mix with bleach or other cleaning chemicals</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground">First Aid: Skin — wash with soap and water. Eyes — rinse with water. Ingestion — do not induce vomiting; contact poison control.</p>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="overflow-hidden rounded-xl border border-border">
            {[
              ['Brand', 'Nisovai Industries'],
              ['Product Code', 'NI-FC-PRO-LAV-1L'],
              ['Net Volume', '1 Litre'],
              ['Fragrance', 'Lavender Fresh'],
              ['pH Level', '6.5–7.5 (Neutral)'],
              ['Form', 'Liquid Concentrate'],
              ['Floor Type', 'All Hard Floors'],
              ['Certifications', 'ISO 9001:2015, GMP'],
              ['Country of Origin', 'India'],
              ['MRP', '₹249'],
              ['Shelf Life', '24 months from manufacture'],
            ]?.map(([label, value], i) => (
              <div key={label} className={`flex text-sm ${i % 2 === 0 ? 'bg-muted' : 'bg-white'}`}>
                <span className="w-40 shrink-0 px-4 py-3 font-semibold text-foreground border-r border-border">{label}</span>
                <span className="px-4 py-3 text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* FAQ */}
      <div className="border-t border-border pt-6">
        <h3 className="text-base font-bold text-foreground mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-muted transition-colors"
              >
                <span className="text-sm font-semibold text-foreground pr-4">{faq?.q}</span>
                <Icon name={openFaq === i ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={18} className="text-muted-foreground shrink-0" />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 pt-1 text-sm text-muted-foreground border-t border-border bg-muted/50">
                  {faq?.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: number;
  name: string;
  category: string;
  mrp: number;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  imageAlt: string;
  badge?: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const products: Product[] = [
{
  id: 1, name: 'NisoClean Pro Floor Cleaner - Lavender', category: 'Floor Cleaners',
  mrp: 249, price: 149, discount: 40, rating: 4.8, reviews: 2341,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_121216a02-1770547346885.png",
  imageAlt: 'Blue bottle of floor cleaner on clean white surface',
  badge: 'Best Seller', inStock: true, isBestSeller: true
},
{
  id: 2, name: 'NisoFresh Antibacterial Hand Wash 500ml', category: 'Hand Wash',
  mrp: 149, price: 89, discount: 40, rating: 4.7, reviews: 1876,
  image: "https://images.unsplash.com/photo-1608564348103-2b78891150cf",
  imageAlt: 'Green pump bottle of antibacterial hand wash on bathroom counter',
  badge: 'New', inStock: true, isNew: true
},
{
  id: 3, name: 'NisoGuard Disinfectant Spray 750ml', category: 'Disinfectants',
  mrp: 299, price: 199, discount: 33, rating: 4.9, reviews: 3102,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_119755067-1772980509107.png",
  imageAlt: 'White spray bottle of disinfectant against clean background',
  badge: 'Top Rated', inStock: true, isBestSeller: true
},
{
  id: 4, name: 'NisoShine Toilet Bowl Cleaner 500ml', category: 'Toilet Cleaners',
  mrp: 129, price: 79, discount: 39, rating: 4.6, reviews: 987,
  image: "https://images.unsplash.com/photo-1649944607215-33cea628763f",
  imageAlt: 'Blue bottle of toilet cleaner with angled neck on white background',
  badge: undefined, inStock: true
},
{
  id: 5, name: 'NisoWash Laundry Detergent 2kg', category: 'Laundry Detergents',
  mrp: 399, price: 279, discount: 30, rating: 4.8, reviews: 4521,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19a9d96ab-1767745675033.png",
  imageAlt: 'Large white box of laundry detergent with blue branding',
  badge: 'Value Pack', inStock: true, isBestSeller: true
},
{
  id: 6, name: 'NisoBreeze Air Freshener Spray 300ml', category: 'Air Fresheners',
  mrp: 199, price: 139, discount: 30, rating: 4.5, reviews: 654,
  image: "https://images.unsplash.com/photo-1666161659755-2fa2afb85f97",
  imageAlt: 'Elegant air freshener spray bottle with floral design',
  badge: 'New', inStock: true, isNew: true
},
{
  id: 7, name: 'NisoKleen Kitchen Degreaser 500ml', category: 'Kitchen Cleaners',
  mrp: 179, price: 119, discount: 34, rating: 4.7, reviews: 1234,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14bed89eb-1772980510379.png",
  imageAlt: 'Yellow spray bottle of kitchen degreaser on granite countertop',
  badge: undefined, inStock: true
},
{
  id: 8, name: 'NisoSan Hand Sanitizer 500ml Pump', category: 'Hand Sanitizers',
  mrp: 249, price: 169, discount: 32, rating: 4.9, reviews: 5678,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b782a1a1-1775494977424.png",
  imageAlt: 'Clear pump bottle of hand sanitizer with 70% alcohol label',
  badge: 'Top Rated', inStock: true, isBestSeller: true
}];


const tabs = ['Featured', 'Best Sellers', 'New Arrivals', "Today\'s Deals"];

function ProductCard({ product, index }: {product: Product;index: number;}) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cardRef.current) {
          cardRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div
      ref={cardRef}
      className="fade-up product-card-hover bg-white rounded-2xl border border-border overflow-hidden group"
      style={{ transitionDelay: `${index * 60}ms` }}>
      
      {/* Image */}
      <div className="relative overflow-hidden bg-muted h-48 sm:h-52">
        <AppImage
          src={product.image}
          alt={product.imageAlt}
          width={300}
          height={208}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="discount-badge">-{product.discount}%</span>
          {product.badge &&
          <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">
              {product.badge}
            </span>
          }
        </div>
        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          aria-label="Add to wishlist">
          
          <Icon
            name={wishlisted ? 'HeartIcon' : 'HeartIcon'}
            variant={wishlisted ? 'solid' : 'outline'}
            size={16}
            className={wishlisted ? 'text-red-500' : 'text-muted-foreground'} />
          
        </button>
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            href="/product-detail"
            className="bg-white text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            
            Quick View
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <Link href="/product-detail">
          <h3 className="text-sm font-bold text-foreground line-clamp-2 hover:text-primary transition-colors leading-snug mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) =>
            <span key={star} className={`text-xs ${star <= Math.floor(product.rating) ? 'text-warning' : 'text-border'}`}>★</span>
            )}
          </div>
          <span className="text-xs font-semibold text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-extrabold text-primary">₹{product.price}</span>
          <span className="text-sm price-strike">₹{product.mrp}</span>
          <span className="text-xs text-accent font-semibold">{product.discount}% off</span>
        </div>

        {/* Delivery */}
        <p className="text-xs text-muted-foreground mb-4">
          {product.inStock ?
          <span className="text-accent font-semibold">✓ In Stock</span> :
          <span className="text-destructive">Out of Stock</span>
          } · Free delivery
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all shimmer-btn ${
            addedToCart ?
            'bg-accent text-accent-foreground' :
            'bg-secondary text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground'}`
            }>
            
            {addedToCart ? '✓ Added!' : 'Add to Cart'}
          </button>
          <Link
            href="/product-detail"
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-primary text-primary-foreground text-center hover:bg-primary/90 transition-colors shimmer-btn">
            
            Buy Now
          </Link>
        </div>
      </div>
    </div>);

}

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState('Featured');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'Best Sellers') return p.isBestSeller;
    if (activeTab === 'New Arrivals') return p.isNew;
    if (activeTab === "Today's Deals") return p.discount >= 35;
    return true;
  });

  return (
    <section className="py-14 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Products</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Our Top Products</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {tabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
            activeTab === tab ?
            'bg-primary text-primary-foreground shadow-primary' :
            'bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary'}`
            }>
            
              {tab}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, i) =>
          <ProductCard key={product.id} product={product} index={i} />
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-xl border border-border hover:border-primary hover:text-primary transition-all shadow-sm">
            
            Load More Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}
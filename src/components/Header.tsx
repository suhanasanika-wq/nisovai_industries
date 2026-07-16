'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const categories = [
  'Floor Cleaners', 'Toilet Cleaners', 'Bathroom Cleaners', 'Kitchen Cleaners',
  'Glass Cleaners', 'Disinfectants', 'Hand Wash', 'Hand Sanitizers',
  'Laundry Detergents', 'Dishwashing Liquids', 'Air Fresheners', 'Industrial Cleaners',
];

const suggestions = [
  'Floor Cleaner 1L', 'Toilet Cleaner 500ml', 'Hand Sanitizer 300ml',
  'Disinfectant Spray', 'Dishwash Liquid', 'Air Freshener Lavender',
  'Laundry Detergent 2kg', 'Glass Cleaner 500ml',
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems] = useState<CartItem[]>([
    { id: 1, name: 'NisoClean Floor Cleaner 1L', price: 149, qty: 2 },
    { id: 2, name: 'NisoFresh Hand Wash 500ml', price: 89, qty: 1 },
  ]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const filteredSuggestions = suggestions.filter(s =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-white py-3'
        }`}
      >
        {/* Top announcement bar */}
        <div className="bg-primary text-primary-foreground text-xs text-center py-1.5 px-4 hidden sm:block">
          🎉 Free delivery on orders above ₹499 | Use code <strong>NISOVAI10</strong> for 10% off your first order
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <AppLogo size={36} />
              <div className="hidden sm:block">
                <span className="font-extrabold text-foreground text-base leading-tight block">Nisovai</span>
                <span className="text-muted-foreground text-xs leading-tight block">Industries</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div ref={searchRef} className="flex-1 relative max-w-2xl">
              <div className="flex items-center bg-muted border border-border rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <select className="bg-transparent text-xs font-medium text-muted-foreground px-3 py-2.5 border-r border-border outline-none hidden md:block">
                  <option>All</option>
                  {categories.slice(0, 6).map(c => <option key={c}>{c}</option>)}
                </select>
                <input
                  type="text"
                  placeholder="Search cleaning products..."
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setShowSuggestions(e.target.value.length > 0); }}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                  className="flex-1 bg-transparent text-sm px-3 py-2.5 outline-none text-foreground placeholder:text-muted-foreground min-w-0"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2.5 flex items-center gap-1.5 hover:bg-primary/90 transition-colors shrink-0">
                  <Icon name="MagnifyingGlassIcon" size={18} />
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
                  {filteredSuggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setSearchQuery(s); setShowSuggestions(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted flex items-center gap-3 transition-colors"
                    >
                      <Icon name="MagnifyingGlassIcon" size={14} className="text-muted-foreground" />
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Wishlist */}
              <Link href="/shop" className="hidden sm:flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors group">
                <Icon name="HeartIcon" size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[10px] text-muted-foreground mt-0.5 hidden lg:block">Wishlist</span>
              </Link>

              {/* Account */}
              <Link href="/shop" className="hidden sm:flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors group">
                <Icon name="UserIcon" size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[10px] text-muted-foreground mt-0.5 hidden lg:block">Account</span>
              </Link>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors group relative"
              >
                <div className="relative">
                  <Icon name="ShoppingCartIcon" size={22} className="text-foreground group-hover:text-primary transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center min-w-[18px] min-h-[18px] px-1">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground mt-0.5 hidden lg:block">Cart</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="sm:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Icon name="Bars3Icon" size={24} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Desktop Category Nav */}
          <nav className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto no-scrollbar">
            <Link href="/" className="text-xs font-semibold text-primary px-3 py-1.5 rounded-lg bg-secondary whitespace-nowrap">
              Home
            </Link>
            <Link href="/shop" className="text-xs font-medium text-muted-foreground px-3 py-1.5 rounded-lg hover:bg-muted hover:text-foreground transition-colors whitespace-nowrap">
              All Products
            </Link>
            {categories.slice(0, 8).map(cat => (
              <Link
                key={cat}
                href="/shop"
                className="text-xs font-medium text-muted-foreground px-3 py-1.5 rounded-lg hover:bg-muted hover:text-foreground transition-colors whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
            <Link href="/shop" className="text-xs font-medium text-accent px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors whitespace-nowrap font-semibold">
              🔥 Today&apos;s Deals
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] sm:hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white slide-in-right flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <AppLogo size={32} />
                <span className="font-bold text-foreground">Nisovai Industries</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <Icon name="XMarkIcon" size={22} className="text-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1 mb-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium">
                  <Icon name="HomeIcon" size={20} className="text-primary" />
                  Home
                </Link>
                <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium">
                  <Icon name="ShoppingBagIcon" size={20} className="text-primary" />
                  Shop All Products
                </Link>
                <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium">
                  <Icon name="HeartIcon" size={20} className="text-primary" />
                  Wishlist
                </Link>
                <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium">
                  <Icon name="UserIcon" size={20} className="text-primary" />
                  My Account
                </Link>
              </div>

              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3 mb-3">Categories</p>
              <div className="space-y-1">
                {categories.map(cat => (
                  <Link
                    key={cat}
                    href="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">Clean Place, Healthy Life.</p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100] animate-fade-in">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white slide-in-right flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <Icon name="ShoppingCartIcon" size={22} className="text-primary" />
                <h2 className="font-bold text-foreground text-lg">Your Cart ({cartCount})</h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close cart"
              >
                <Icon name="XMarkIcon" size={22} className="text-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="BeakerIcon" size={28} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground line-clamp-2">{item.name}</p>
                    <p className="text-primary font-bold mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors text-sm font-bold">−</button>
                      <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                      <button className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors text-sm font-bold">+</button>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-destructive transition-colors p-1">
                    <Icon name="TrashIcon" size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-border space-y-4 bg-muted/50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">₹{cartTotal}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="font-semibold text-foreground">₹{Math.round(cartTotal * 0.18)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-semibold text-accent">FREE</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-extrabold text-primary text-xl">₹{cartTotal + Math.round(cartTotal * 0.18)}</span>
              </div>
              <Link
                href="/shop"
                onClick={() => setCartOpen(false)}
                className="block w-full bg-primary text-primary-foreground text-center font-bold py-4 rounded-xl shimmer-btn hover:bg-primary/90 transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => setCartOpen(false)}
                className="block w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-[130px] sm:h-[140px]" />
    </>
  );
}
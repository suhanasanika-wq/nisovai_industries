'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'discount', label: 'Highest Discount' },
  { value: 'newest', label: 'Newest First' },
];

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  discounts: string[];
  availability: string;
  fragrances: string[];
  ecoFriendly: boolean;
}

const defaultFilters: FilterState = {
  categories: [],
  priceRange: [0, 2000],
  ratings: [],
  discounts: [],
  availability: 'all',
  fragrances: [],
  ecoFriendly: false,
};

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sortBy, setSortBy] = useState('popularity');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeFilterCount =
    filters.categories.length +
    filters.ratings.length +
    filters.discounts.length +
    filters.fragrances.length +
    (filters.ecoFriendly ? 1 : 0);

  const removeFilter = (type: string, value?: string) => {
    switch (type) {
      case 'category':
        setFilters(prev => ({ ...prev, categories: prev.categories.filter(c => c !== value) }));
        break;
      case 'rating':
        setFilters(prev => ({ ...prev, ratings: prev.ratings.filter(r => r !== Number(value)) }));
        break;
      case 'eco':
        setFilters(prev => ({ ...prev, ecoFriendly: false }));
        break;
      case 'fragrance':
        setFilters(prev => ({ ...prev, fragrances: prev.fragrances.filter(f => f !== value) }));
        break;
      default:
        break;
    }
  };

  return (
    <main className="min-h-screen bg-muted">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="text-foreground font-medium">Shop</span>
          </nav>
        </div>
      </div>

      {/* Shop Header */}
      <div className="bg-white border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">All Cleaning Products</h1>
              <p className="text-sm text-muted-foreground mt-1">Premium hygiene solutions for every space</p>
            </div>
            {/* Search within shop */}
            <div className="flex items-center gap-3 bg-muted border border-border rounded-xl px-4 py-2.5 max-w-xs w-full">
              <Icon name="MagnifyingGlassIcon" size={18} className="text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground flex-1 min-w-0"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-muted-foreground hover:text-foreground">
                  <Icon name="XMarkIcon" size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Sort + Filter Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 bg-white rounded-2xl border border-border px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Icon name="FunnelIcon" size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Active filter chips */}
            <div className="hidden sm:flex items-center gap-2 flex-wrap">
              {filters.categories.map(cat => (
                <span key={cat} className="flex items-center gap-1 bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                  {cat}
                  <button onClick={() => removeFilter('category', cat)} className="hover:text-destructive ml-1" aria-label={`Remove ${cat} filter`}>×</button>
                </span>
              ))}
              {filters.ecoFriendly && (
                <span className="flex items-center gap-1 bg-green-50 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">
                  🌿 Eco-Friendly
                  <button onClick={() => removeFilter('eco')} className="hover:text-destructive ml-1" aria-label="Remove eco filter">×</button>
                </span>
              )}
              {filters.fragrances.map(f => (
                <span key={f} className="flex items-center gap-1 bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-200">
                  {f}
                  <button onClick={() => removeFilter('fragrance', f)} className="hover:text-destructive ml-1" aria-label={`Remove ${f} fragrance filter`}>×</button>
                </span>
              ))}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => setFilters(defaultFilters)}
                  className="text-xs font-semibold text-destructive hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-sm font-semibold text-foreground bg-muted border border-border rounded-xl px-3 py-2 outline-none focus:border-primary transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-6">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
          />

          <div className="flex-1 min-w-0">
            <ProductGrid filters={filters} sortBy={sortBy} searchQuery={searchQuery} />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
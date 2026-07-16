'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  discounts: string[];
  availability: string;
  fragrances: string[];
  ecoFriendly: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

const categoryOptions = [
  { label: 'Floor Cleaners', count: 24 },
  { label: 'Toilet Cleaners', count: 18 },
  { label: 'Bathroom Cleaners', count: 15 },
  { label: 'Kitchen Cleaners', count: 16 },
  { label: 'Glass Cleaners', count: 10 },
  { label: 'Surface Cleaners', count: 12 },
  { label: 'Disinfectants', count: 20 },
  { label: 'Hand Wash', count: 15 },
  { label: 'Hand Sanitizers', count: 14 },
  { label: 'Laundry Detergents', count: 12 },
  { label: 'Dishwashing Liquids', count: 8 },
  { label: 'Air Fresheners', count: 14 },
  { label: 'Industrial Cleaners', count: 30 },
];

const fragranceOptions = ['Lavender', 'Rose', 'Citrus', 'Pine', 'Jasmine', 'Unscented', 'Ocean Fresh'];
const discountOptions = ['10% and above', '20% and above', '30% and above', '40% and above'];

export default function FilterSidebar({ filters, onFilterChange, isOpen, onClose }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    discount: false,
    fragrance: false,
    availability: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCategory = (cat: string) => {
    const updated = filters.categories.includes(cat)
      ? filters.categories.filter(c => c !== cat)
      : [...filters.categories, cat];
    onFilterChange({ ...filters, categories: updated });
  };

  const toggleRating = (r: number) => {
    const updated = filters.ratings.includes(r)
      ? filters.ratings.filter(x => x !== r)
      : [...filters.ratings, r];
    onFilterChange({ ...filters, ratings: updated });
  };

  const toggleDiscount = (d: string) => {
    const updated = filters.discounts.includes(d)
      ? filters.discounts.filter(x => x !== d)
      : [...filters.discounts, d];
    onFilterChange({ ...filters, discounts: updated });
  };

  const toggleFragrance = (f: string) => {
    const updated = filters.fragrances.includes(f)
      ? filters.fragrances.filter(x => x !== f)
      : [...filters.fragrances, f];
    onFilterChange({ ...filters, fragrances: updated });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      priceRange: [0, 2000],
      ratings: [],
      discounts: [],
      availability: 'all',
      fragrances: [],
      ecoFriendly: false,
    });
  };

  const activeFilterCount =
    filters.categories.length +
    filters.ratings.length +
    filters.discounts.length +
    filters.fragrances.length +
    (filters.ecoFriendly ? 1 : 0);

  const sidebarContent = (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Icon name="FunnelIcon" size={20} className="text-primary" />
          <h2 className="font-bold text-foreground text-base">Filters</h2>
          {activeFilterCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Eco-Friendly Toggle */}
      <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-xl mb-4">
        <div className="flex items-center gap-2">
          <span>🌿</span>
          <span className="text-sm font-semibold text-foreground">Eco-Friendly Only</span>
        </div>
        <button
          onClick={() => onFilterChange({ ...filters, ecoFriendly: !filters.ecoFriendly })}
          className={`w-11 h-6 rounded-full transition-colors ${filters.ecoFriendly ? 'bg-accent' : 'bg-border'}`}
          aria-label="Toggle eco-friendly filter"
        >
          <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5 ${filters.ecoFriendly ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
      </div>

      {/* Category */}
      <div className="mb-4 border-b border-border pb-4">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-sm font-bold text-foreground">Category</span>
          <Icon name={expandedSections.category ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground" />
        </button>
        {expandedSections.category && (
          <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
            {categoryOptions.map(cat => (
              <label key={cat.label} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.label)}
                  onChange={() => toggleCategory(cat.label)}
                  className="w-4 h-4 accent-primary rounded"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors flex-1">{cat.label}</span>
                <span className="text-xs text-muted-foreground">({cat.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-4 border-b border-border pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-sm font-bold text-foreground">Price Range</span>
          <Icon name={expandedSections.price ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground" />
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm font-semibold text-foreground">
              <span>₹{filters.priceRange[0]}</span>
              <span>₹{filters.priceRange[1]}</span>
            </div>
            <input
              type="range"
              min={0}
              max={2000}
              step={50}
              value={filters.priceRange[1]}
              onChange={e => onFilterChange({ ...filters, priceRange: [filters.priceRange[0], Number(e.target.value)] })}
              className="w-full accent-primary"
            />
            <div className="grid grid-cols-2 gap-2">
              {[['Under ₹100', [0, 100]], ['₹100–₹300', [100, 300]], ['₹300–₹500', [300, 500]], ['Above ₹500', [500, 2000]]].map(([label, range]) => (
                <button
                  key={label as string}
                  onClick={() => onFilterChange({ ...filters, priceRange: range as [number, number] })}
                  className="text-xs border border-border rounded-lg py-1.5 px-2 hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                >
                  {label as string}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-4 border-b border-border pb-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-sm font-bold text-foreground">Customer Rating</span>
          <Icon name={expandedSections.rating ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground" />
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map(r => (
              <label key={r} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(r)}
                  onChange={() => toggleRating(r)}
                  className="w-4 h-4 accent-primary rounded"
                />
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={`text-sm ${s <= r ? 'text-warning' : 'text-border'}`}>★</span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">& above</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Discount */}
      <div className="mb-4 border-b border-border pb-4">
        <button
          onClick={() => toggleSection('discount')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-sm font-bold text-foreground">Discount</span>
          <Icon name={expandedSections.discount ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground" />
        </button>
        {expandedSections.discount && (
          <div className="space-y-2">
            {discountOptions.map(d => (
              <label key={d} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.discounts.includes(d)}
                  onChange={() => toggleDiscount(d)}
                  className="w-4 h-4 accent-primary rounded"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">{d}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Fragrance */}
      <div className="mb-4">
        <button
          onClick={() => toggleSection('fragrance')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-sm font-bold text-foreground">Fragrance</span>
          <Icon name={expandedSections.fragrance ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground" />
        </button>
        {expandedSections.fragrance && (
          <div className="flex flex-wrap gap-2">
            {fragranceOptions.map(f => (
              <button
                key={f}
                onClick={() => toggleFragrance(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  filters.fragrances.includes(f)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-36 bg-white rounded-2xl border border-border p-5 shadow-sm">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-5 overflow-y-auto slide-in-right">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-foreground text-lg">Filters</h2>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Close filters">
                <Icon name="XMarkIcon" size={22} className="text-foreground" />
              </button>
            </div>
            {sidebarContent}
            <button
              onClick={onClose}
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl mt-4 hover:bg-primary/90 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}
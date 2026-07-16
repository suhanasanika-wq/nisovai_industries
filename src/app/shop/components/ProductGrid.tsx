'use client';

import React, { useState } from 'react';
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
  isEco?: boolean;
  fragrance?: string;
}

const allProducts: Product[] = [
{ id: 1, name: 'NisoClean Pro Floor Cleaner - Lavender 1L', category: 'Floor Cleaners', mrp: 249, price: 149, discount: 40, rating: 4.8, reviews: 2341, image: "https://img.rocket.new/generatedImages/rocket_gen_img_10f4140bc-1765808158607.png", imageAlt: 'Blue floor cleaner bottle on shiny clean floor', badge: 'Best Seller', inStock: true, fragrance: 'Lavender', isEco: false },
{ id: 2, name: 'NisoFresh Antibacterial Hand Wash 500ml', category: 'Hand Wash', mrp: 149, price: 89, discount: 40, rating: 4.7, reviews: 1876, image: "https://images.unsplash.com/photo-1729534657189-64cade8ef5a6", imageAlt: 'Green pump hand wash bottle on white bathroom counter', badge: 'New', inStock: true, fragrance: 'Rose', isEco: true },
{ id: 3, name: 'NisoGuard Disinfectant Spray 750ml', category: 'Disinfectants', mrp: 299, price: 199, discount: 33, rating: 4.9, reviews: 3102, image: "https://img.rocket.new/generatedImages/rocket_gen_img_119755067-1772980509107.png", imageAlt: 'White disinfectant spray bottle on clean surface', badge: 'Top Rated', inStock: true, fragrance: 'Unscented', isEco: false },
{ id: 4, name: 'NisoShine Toilet Bowl Cleaner 500ml', category: 'Toilet Cleaners', mrp: 129, price: 79, discount: 39, rating: 4.6, reviews: 987, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1918ae55a-1775300158607.png", imageAlt: 'Blue angled-neck toilet cleaner bottle', badge: undefined, inStock: true, fragrance: 'Citrus' },
{ id: 5, name: 'NisoWash Laundry Detergent 2kg', category: 'Laundry Detergents', mrp: 399, price: 279, discount: 30, rating: 4.8, reviews: 4521, image: "https://img.rocket.new/generatedImages/rocket_gen_img_19a9d96ab-1767745675033.png", imageAlt: 'Large laundry detergent box with blue branding', badge: 'Value Pack', inStock: true, fragrance: 'Jasmine', isEco: true },
{ id: 6, name: 'NisoBreeze Air Freshener Spray 300ml', category: 'Air Fresheners', mrp: 199, price: 139, discount: 30, rating: 4.5, reviews: 654, image: "https://images.unsplash.com/photo-1666161659755-2fa2afb85f97", imageAlt: 'Elegant air freshener spray bottle with floral design', badge: 'New', inStock: true, fragrance: 'Lavender' },
{ id: 7, name: 'NisoKleen Kitchen Degreaser 500ml', category: 'Kitchen Cleaners', mrp: 179, price: 119, discount: 34, rating: 4.7, reviews: 1234, image: "https://img.rocket.new/generatedImages/rocket_gen_img_14bed89eb-1772980510379.png", imageAlt: 'Yellow kitchen degreaser spray bottle on granite countertop', badge: undefined, inStock: true, fragrance: 'Citrus' },
{ id: 8, name: 'NisoSan Hand Sanitizer 500ml Pump', category: 'Hand Sanitizers', mrp: 249, price: 169, discount: 32, rating: 4.9, reviews: 5678, image: "https://images.unsplash.com/photo-1583947214267-953e8db95f42", imageAlt: 'Clear pump bottle of hand sanitizer with 70% alcohol', badge: 'Top Rated', inStock: true, fragrance: 'Unscented', isEco: false },
{ id: 9, name: 'NisoGlass Window Cleaner 500ml', category: 'Glass Cleaners', mrp: 159, price: 99, discount: 38, rating: 4.6, reviews: 876, image: "https://img.rocket.new/generatedImages/rocket_gen_img_12078de68-1772980511941.png", imageAlt: 'Blue glass cleaner spray bottle on window', badge: undefined, inStock: true, fragrance: 'Unscented' },
{ id: 10, name: 'NisoBath Bathroom Cleaner 750ml', category: 'Bathroom Cleaners', mrp: 219, price: 149, discount: 32, rating: 4.7, reviews: 1102, image: "https://images.unsplash.com/photo-1649072986302-62c8cb6767dc", imageAlt: 'White bathroom cleaner spray bottle on clean tiles', badge: undefined, inStock: true, fragrance: 'Pine' },
{ id: 11, name: 'NisoSurf Surface Disinfectant 1L', category: 'Surface Cleaners', mrp: 279, price: 189, discount: 32, rating: 4.8, reviews: 2234, image: "https://img.rocket.new/generatedImages/rocket_gen_img_119755067-1772980509107.png", imageAlt: 'Large surface disinfectant bottle with spray nozzle', badge: 'Best Seller', inStock: true, fragrance: 'Ocean Fresh', isEco: true },
{ id: 12, name: 'NisoIndustrial Heavy Duty Degreaser 5L', category: 'Industrial Cleaners', mrp: 899, price: 649, discount: 28, rating: 4.9, reviews: 445, image: "https://img.rocket.new/generatedImages/rocket_gen_img_16aef964c-1764719921930.png", imageAlt: 'Large industrial degreaser canister for factory use', badge: 'Industrial', inStock: true, fragrance: 'Unscented' },
{ id: 13, name: 'NisoDish Dishwashing Liquid 750ml', category: 'Dishwashing Liquids', mrp: 169, price: 109, discount: 35, rating: 4.6, reviews: 1543, image: "https://images.unsplash.com/photo-1647577835244-48b4a56fa818", imageAlt: 'Green dishwashing liquid bottle next to clean dishes', badge: undefined, inStock: true, fragrance: 'Citrus', isEco: true },
{ id: 14, name: 'NisoFloor Phenyl Disinfectant 1L', category: 'Floor Cleaners', mrp: 189, price: 129, discount: 32, rating: 4.7, reviews: 2109, image: "https://img.rocket.new/generatedImages/rocket_gen_img_122dd3916-1769673035523.png", imageAlt: 'Brown phenyl disinfectant bottle on clean floor', badge: undefined, inStock: true, fragrance: 'Pine' },
{ id: 15, name: 'NisoEco Biodegradable All-Purpose Cleaner 500ml', category: 'Surface Cleaners', mrp: 229, price: 159, discount: 31, rating: 4.8, reviews: 892, image: "https://img.rocket.new/generatedImages/rocket_gen_img_160f546e7-1772696805873.png", imageAlt: 'Green eco-friendly cleaner bottle with leaf branding', badge: 'Eco Pick', inStock: true, fragrance: 'Citrus', isEco: true },
{ id: 16, name: 'NisoSan Instant Hand Sanitizer 200ml', category: 'Hand Sanitizers', mrp: 129, price: 85, discount: 34, rating: 4.7, reviews: 3210, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0f649a7-1783858804911.png", imageAlt: 'Small portable hand sanitizer bottle for travel', badge: undefined, inStock: false, fragrance: 'Unscented' }];


interface ProductGridProps {
  filters: {
    categories: string[];
    priceRange: [number, number];
    ratings: number[];
    discounts: string[];
    availability: string;
    fragrances: string[];
    ecoFriendly: boolean;
  };
  sortBy: string;
  searchQuery: string;
}

export default function ProductGrid({ filters, sortBy, searchQuery }: ProductGridProps) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  const handleAddToCart = (id: number) => {
    setAddedToCart((prev) => [...prev, id]);
    setTimeout(() => setAddedToCart((prev) => prev.filter((x) => x !== id)), 2000);
  };

  // Apply filters
  let filtered = allProducts.filter((p) => {
    if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false;
    if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
    if (filters.ratings.length > 0 && !filters.ratings.some((r) => p.rating >= r)) return false;
    if (filters.fragrances.length > 0 && p.fragrance && !filters.fragrances.includes(p.fragrance)) return false;
    if (filters.ecoFriendly && !p.isEco) return false;
    if (filters.availability === 'inStock' && !p.inStock) return false;
    if (filters.discounts.length > 0) {
      const minDiscount = Math.min(...filters.discounts.map((d) => parseInt(d)));
      if (p.discount < minDiscount) return false;
    }
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.category.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':return a.price - b.price;
      case 'price-desc':return b.price - a.price;
      case 'rating':return b.rating - a.rating;
      case 'discount':return b.discount - a.discount;
      case 'newest':return b.id - a.id;
      default:return b.reviews - a.reviews;
    }
  });

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
        <p className="text-muted-foreground text-sm">Try adjusting your filters or search query</p>
      </div>);

  }

  return (
    <div>
      {/* View mode toggle */}
      <div className="flex items-center gap-2 mb-4 justify-end">
        <button
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
          aria-label="Grid view">
          
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
          aria-label="List view">
          
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </div>

      {viewMode === 'grid' ?
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {filtered.map((product) =>
        <div key={product.id} className="product-card-hover bg-white rounded-2xl border border-border overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden bg-muted h-44 sm:h-48">
                <AppImage
              src={product.image}
              alt={product.imageAlt}
              width={300}
              height={192}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="discount-badge">-{product.discount}%</span>
                  {product.badge &&
              <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">{product.badge}</span>
              }
                  {product.isEco &&
              <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">🌿 Eco</span>
              }
                </div>
                <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              aria-label="Toggle wishlist">
              
                  <Icon
                name="HeartIcon"
                variant={wishlist.includes(product.id) ? 'solid' : 'outline'}
                size={16}
                className={wishlist.includes(product.id) ? 'text-red-500' : 'text-muted-foreground'} />
              
                </button>
                {!product.inStock &&
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                    <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">Out of Stock</span>
                  </div>
            }
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href="/product-detail" className="bg-white text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                    Quick View
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <Link href="/product-detail">
                  <h3 className="text-sm font-bold text-foreground line-clamp-2 hover:text-primary transition-colors leading-snug mb-2">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-warning text-xs">{'★'.repeat(Math.floor(product.rating))}</span>
                  <span className="text-xs font-semibold text-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-extrabold text-primary">₹{product.price}</span>
                  <span className="text-xs price-strike">₹{product.mrp}</span>
                </div>
                <div className="flex gap-2">
                  <button
                onClick={() => handleAddToCart(product.id)}
                disabled={!product.inStock}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                addedToCart.includes(product.id) ?
                'bg-accent text-accent-foreground' :
                product.inStock ?
                'bg-secondary text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground' :
                'bg-muted text-muted-foreground cursor-not-allowed'}`
                }>
                
                    {addedToCart.includes(product.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                  <Link
                href="/product-detail"
                className="flex-1 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground text-center hover:bg-primary/90 transition-colors">
                
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
        )}
        </div> :

      <div className="space-y-4">
          {filtered.map((product) =>
        <div key={product.id} className="bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-all duration-300 flex">
              <div className="relative w-36 sm:w-48 shrink-0 overflow-hidden bg-muted">
                <AppImage
              src={product.image}
              alt={product.imageAlt}
              width={192}
              height={160}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            
                <span className="absolute top-2 left-2 discount-badge">-{product.discount}%</span>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                      <Link href="/product-detail">
                        <h3 className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors leading-snug">{product.name}</h3>
                      </Link>
                    </div>
                    <button onClick={() => toggleWishlist(product.id)} className="shrink-0 p-1.5" aria-label="Toggle wishlist">
                      <Icon name="HeartIcon" variant={wishlist.includes(product.id) ? 'solid' : 'outline'} size={18} className={wishlist.includes(product.id) ? 'text-red-500' : 'text-muted-foreground'} />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-warning text-xs">{'★'.repeat(Math.floor(product.rating))}</span>
                    <span className="text-xs font-semibold">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-primary">₹{product.price}</span>
                    <span className="text-sm price-strike">₹{product.mrp}</span>
                    <span className="text-xs text-accent font-semibold">{product.discount}% off</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={!product.inStock}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  addedToCart.includes(product.id) ? 'bg-accent text-accent-foreground' : product.inStock ? 'bg-secondary text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground' : 'bg-muted text-muted-foreground cursor-not-allowed'}`
                  }>
                  
                      {addedToCart.includes(product.id) ? '✓ Added' : 'Add to Cart'}
                    </button>
                    <Link href="/product-detail" className="px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        )}
        </div>
      }

      {/* Results count */}
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Showing <strong className="text-foreground">{filtered.length}</strong> of <strong className="text-foreground">{allProducts.length}</strong> products
      </p>
    </div>);

}
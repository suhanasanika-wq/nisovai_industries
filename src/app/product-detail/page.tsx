import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGallery from './components/ImageGallery';
import ProductInfo from './components/ProductInfo';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';
import FrequentlyBoughtTogether from './components/FrequentlyBoughtTogether';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'NisoClean Pro Floor Cleaner 1L Lavender — Nisovai Industries',
  description: 'Buy NisoClean Pro Floor Cleaner 1L Lavender at ₹149 (40% off MRP ₹249). Safe for all floors, 99.9% germ kill, eco-friendly. Free delivery. ISO certified.',
};

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-muted">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <Link href="/shop" className="hover:text-primary transition-colors">Floor Cleaners</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="text-foreground font-medium truncate max-w-[200px]">NisoClean Pro Floor Cleaner</span>
          </nav>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'NisoClean Pro Floor Cleaner 1L Lavender',
            brand: { '@type': 'Brand', name: 'Nisovai Industries' },
            offers: {
              '@type': 'Offer',
              price: '149',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '2341',
            },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Main Product Section */}
        <div className="bg-white rounded-2xl border border-border p-5 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
            <ImageGallery />
            <ProductInfo />
          </div>
        </div>

        {/* Frequently Bought Together */}
        <FrequentlyBoughtTogether />

        {/* Delivery & Returns Info */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: '🚚',
              title: 'Delivery Information',
              items: ['Free delivery on orders above ₹499', 'Express delivery in 2–4 hours (select cities)', 'Pan-India delivery in 2–5 business days', 'Track your order in real-time'],
            },
            {
              icon: '↩️',
              title: 'Returns & Refunds',
              items: ['7-day easy return policy', 'Full refund for damaged products', 'No questions asked returns', 'Pickup arranged from your doorstep'],
            },
            {
              icon: '💳',
              title: 'Payment Options',
              items: ['UPI (PhonePe, GPay, Paytm)', 'Credit & Debit Cards', 'Net Banking', 'Cash on Delivery available', 'EMI options on orders above ₹999'],
            },
          ].map(section => (
            <div key={section.title} className="bg-white rounded-2xl border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-sm font-bold text-foreground">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Related Products */}
        <RelatedProducts />
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ShopByCategorySection from './components/ShopByCategorySection';
import FeaturedProductsSection from './components/FeaturedProductsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import WhatsAppFloat from './components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Nisovai Industries — Premium Cleaning & Hygiene Products India',
  description: 'Buy premium cleaning and hygiene products online. Floor cleaners, disinfectants, hand wash, laundry detergents. Free delivery above ₹499. ISO 9001:2015 certified.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nisovai Industries',
            url: 'https://nisovai.com',
            logo: '/assets/images/app_logo.png',
            description: 'Premium cleaning and hygiene products manufacturer. Clean Place, Healthy Life.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot 47, MIDC Industrial Area',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              postalCode: '411019',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-98765-43210',
              contactType: 'customer service',
            },
          }),
        }}
      />

      <HeroSection />
      <ShopByCategorySection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
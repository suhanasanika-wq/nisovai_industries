import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={36} />
              <div>
                <span className="font-extrabold text-foreground text-base block leading-tight">Nisovai</span>
                <span className="text-muted-foreground text-xs block leading-tight">Industries</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              Premium cleaning and hygiene products for homes, offices, hospitals, and industries since 2010.
            </p>
            <p className="text-xs font-semibold text-primary italic mb-4">&ldquo;Clean Place, Healthy Life.&rdquo;</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Facebook">
                <Icon name="GlobeAltIcon" size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Instagram">
                <Icon name="CameraIcon" size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-all" aria-label="WhatsApp">
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: 'Categories', href: '/shop' },
                { label: 'Today\'s Deals', href: '/shop' },
                { label: 'About Us', href: '/' },
              ]?.map(link => (
                <li key={link?.label}>
                  <Link href={link?.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                    <Icon name="ChevronRightIcon" size={12} />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-foreground text-sm mb-4 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2.5">
              {['Floor Cleaners', 'Toilet Cleaners', 'Hand Wash', 'Disinfectants', 'Laundry Detergents', 'Air Fresheners']?.map(cat => (
                <li key={cat}>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                    <Icon name="ChevronRightIcon" size={12} />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground text-sm mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Icon name="MapPinIcon" size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Plot 47, MIDC Industrial Area, Pune, Maharashtra 411019</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="PhoneIcon" size={16} className="text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="EnvelopeIcon" size={16} className="text-primary shrink-0" />
                <a href="mailto:info@nisovai.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@nisovai.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="ClockIcon" size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Mon–Sat: 9 AM – 6 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-border">
          {['ISO 9001:2015 Certified', 'GMP Certified', '100% Safe Ingredients', 'Eco-Friendly Range']?.map(cert => (
            <div key={cert} className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
              <Icon name="CheckBadgeIcon" size={16} className="text-accent" />
              <span className="text-xs font-semibold text-foreground">{cert}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2026 Nisovai Industries Pvt. Ltd. All rights reserved. | GST: 27ABCNI1234P1Z5
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {['Privacy Policy', 'Terms & Conditions', 'Shipping Policy', 'Return Policy']?.map((item, i) => (
              <React.Fragment key={item}>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
                {i < 3 && <span className="text-border hidden sm:inline">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
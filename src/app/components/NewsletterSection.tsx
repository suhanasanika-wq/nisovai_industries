'use client';

import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-14 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-8 translate-y-8 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="text-4xl mb-4">📧</div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Get Exclusive Deals & Updates
        </h2>
        <p className="text-blue-100 mb-8 text-sm sm:text-base">
          Subscribe for early access to new products, seasonal offers, and cleaning tips from our experts.
        </p>

        {submitted ? (
          <div className="bg-white/15 border border-white/20 rounded-2xl p-6 text-white">
            <div className="text-3xl mb-2">🎉</div>
            <p className="font-bold text-lg">You&apos;re subscribed!</p>
            <p className="text-blue-100 text-sm mt-1">Check your inbox for a welcome offer — 15% off your first order.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/15 border border-white/20 text-white placeholder:text-blue-200 px-5 py-4 rounded-xl outline-none focus:bg-white/25 focus:border-white/40 transition-all text-sm"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground font-bold px-8 py-4 rounded-xl hover:bg-accent/90 transition-all shimmer-btn whitespace-nowrap text-sm"
            >
              Subscribe & Save 15%
            </button>
          </form>
        )}

        <p className="text-blue-200 text-xs mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
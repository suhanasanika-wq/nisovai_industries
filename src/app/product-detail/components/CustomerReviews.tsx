'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const reviews = [
{
  name: 'Meera Krishnan',
  location: 'Chennai, Tamil Nadu',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_122cae39d-1772204764073.png",
  avatarAlt: 'Indian woman with dark hair, warm smile, indoor lighting',
  rating: 5,
  date: '12 Jul 2026',
  title: 'Best floor cleaner I\'ve used in years!',
  body: 'My marble floors have never looked this good. The lavender fragrance is subtle and not overpowering. It\'s concentrated so one bottle lasts a long time. Highly recommend!',
  helpful: 47,
  verified: true,
  images: ['https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?w=200&q=80']
},
{
  name: 'Suresh Iyer',
  location: 'Bengaluru, Karnataka',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12be1b93a-1763292948358.png",
  avatarAlt: 'South Indian professional man, formal shirt, neutral background',
  rating: 5,
  date: '08 Jul 2026',
  title: 'Perfect for our office use',
  body: 'We use this for our 3000 sq ft office and it works brilliantly. Removes footmarks and scuff marks easily. The dilution ratio is economical. Will definitely reorder.',
  helpful: 31,
  verified: true,
  images: []
},
{
  name: 'Poonam Aggarwal',
  location: 'Delhi, NCR',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1334e5402-1770349019845.png",
  avatarAlt: 'North Indian woman, bright smile, light background',
  rating: 4,
  date: '03 Jul 2026',
  title: 'Good product, delivery was fast',
  body: 'Product works well. Cleans effectively and the fragrance is nice. Delivery was next day which was impressive. Took off one star because the bottle cap is a bit hard to open initially.',
  helpful: 18,
  verified: true,
  images: []
},
{
  name: 'Ramesh Nambiar',
  location: 'Kochi, Kerala',
  avatar: "https://images.unsplash.com/photo-1690617577291-0668fdf887dc",
  avatarAlt: 'Malayali man in casual wear, outdoor setting, natural light',
  rating: 5,
  date: '28 Jun 2026',
  title: 'Hospital grade quality at home price',
  body: 'I\'m a doctor and I have high standards for hygiene products. This cleaner genuinely removes 99.9% bacteria as claimed — I verified with lab tests. Excellent product from Nisovai.',
  helpful: 89,
  verified: true,
  images: []
}];


const ratingBreakdown = [
{ stars: 5, count: 1872, pct: 80 },
{ stars: 4, count: 328, pct: 14 },
{ stars: 3, count: 93, pct: 4 },
{ stars: 2, count: 28, pct: 1 },
{ stars: 1, count: 20, pct: 1 }];


export default function CustomerReviews() {
  const [helpfulClicked, setHelpfulClicked] = useState<number[]>([]);
  const [filterRating, setFilterRating] = useState(0);

  const filteredReviews = filterRating > 0 ? reviews.filter((r) => r.rating === filterRating) : reviews;

  return (
    <section className="bg-white rounded-2xl border border-border p-6 sm:p-8">
      <h2 className="text-xl font-extrabold text-foreground mb-6">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="grid sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-border">
        {/* Overall Score */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-foreground">4.8</div>
            <div className="flex justify-center gap-0.5 my-1">
              {[1, 2, 3, 4, 5].map((s) =>
              <span key={s} className={`text-xl ${s <= 4 ? 'text-warning' : 'text-border'}`}>★</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">2,341 ratings</p>
          </div>
          {/* Breakdown */}
          <div className="flex-1 space-y-1.5">
            {ratingBreakdown.map((r) =>
            <button
              key={r.stars}
              onClick={() => setFilterRating(filterRating === r.stars ? 0 : r.stars)}
              className={`flex items-center gap-2 w-full group ${filterRating === r.stars ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}>
              
                <span className="text-xs font-semibold text-foreground w-8 text-right">{r.stars}★</span>
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div
                  className={`h-full rounded-full transition-all ${filterRating === r.stars ? 'bg-primary' : 'bg-warning group-hover:bg-primary'}`}
                  style={{ width: `${r.pct}%` }} />
                
                </div>
                <span className="text-xs text-muted-foreground w-8">{r.pct}%</span>
              </button>
            )}
          </div>
        </div>

        {/* Aspect Ratings */}
        <div className="space-y-3">
          {[
          { label: 'Cleaning Power', score: 4.9 },
          { label: 'Value for Money', score: 4.7 },
          { label: 'Fragrance', score: 4.6 },
          { label: 'Packaging', score: 4.5 }].
          map((aspect) =>
          <div key={aspect.label} className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground w-36 shrink-0">{aspect.label}</span>
              <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: `${aspect.score / 5 * 100}%` }} />
              </div>
              <span className="text-sm font-semibold text-foreground w-8">{aspect.score}</span>
            </div>
          )}
        </div>
      </div>

      {/* Filter chips */}
      {filterRating > 0 &&
      <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">Filtered by:</span>
          <span className="flex items-center gap-1 bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full">
            {filterRating} Stars
            <button onClick={() => setFilterRating(0)} className="ml-1 hover:text-destructive" aria-label="Remove rating filter">×</button>
          </span>
        </div>
      }

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review, i) =>
        <div key={i} className="pb-6 border-b border-border last:border-0 last:pb-0">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-primary/10">
                <AppImage
                src={review.avatar}
                alt={review.avatarAlt}
                width={40}
                height={40}
                className="w-full h-full object-cover" />
              
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                  {review.verified &&
                <span className="text-accent text-xs font-semibold bg-green-50 px-2 py-0.5 rounded-full border border-accent/20">✓ Verified Purchase</span>
                }
                </div>
                <p className="text-xs text-muted-foreground">{review.location} · {review.date}</p>
              </div>
            </div>

            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((s) =>
            <span key={s} className={`text-sm ${s <= review.rating ? 'text-warning' : 'text-border'}`}>★</span>
            )}
            </div>

            <h4 className="text-sm font-bold text-foreground mb-1">{review.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.body}</p>

            {review.images.length > 0 &&
          <div className="flex gap-2 mt-3">
                {review.images.map((img, j) =>
            <div key={j} className="w-16 h-16 rounded-lg overflow-hidden border border-border">
                    <AppImage src={img} alt="Review photo" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
            )}
              </div>
          }

            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-muted-foreground">Helpful?</span>
              <button
              onClick={() => setHelpfulClicked((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
              helpfulClicked.includes(i) ?
              'bg-primary text-primary-foreground border-primary' :
              'border-border text-muted-foreground hover:border-primary hover:text-primary'}`
              }>
              
                👍 Yes ({review.helpful + (helpfulClicked.includes(i) ? 1 : 0)})
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Load more */}
      <div className="text-center mt-6">
        <button className="px-8 py-3 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-all">
          Load More Reviews
        </button>
      </div>
    </section>);

}
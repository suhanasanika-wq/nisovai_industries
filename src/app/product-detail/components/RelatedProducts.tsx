import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const relatedProducts = [
{ id: 1, name: 'NisoClean Floor Cleaner - Citrus 1L', price: 149, mrp: 249, discount: 40, rating: 4.7, image: "https://img.rocket.new/generatedImages/rocket_gen_img_14945fe4b-1778498067336.png", imageAlt: 'Orange citrus floor cleaner bottle on bright kitchen counter' },
{ id: 2, name: 'NisoShine Bathroom Cleaner 750ml', price: 129, mrp: 199, discount: 35, rating: 4.6, image: "https://images.unsplash.com/photo-1649072986302-62c8cb6767dc", imageAlt: 'White bathroom cleaner spray bottle on clean tiles' },
{ id: 3, name: 'NisoMop Spin Mop with Bucket', price: 599, mrp: 899, discount: 33, rating: 4.8, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2ab4aa5-1769335668785.png", imageAlt: 'Blue spin mop with bucket on clean floor' },
{ id: 4, name: 'NisoFloor Phenyl Pine 1L', price: 99, mrp: 149, discount: 34, rating: 4.5, image: "https://images.unsplash.com/photo-1654115350830-284e9fb002c7", imageAlt: 'Brown pine phenyl bottle on wooden floor' }];


export default function RelatedProducts() {
  return (
    <section className="bg-white rounded-2xl border border-border p-6 sm:p-8">
      <h2 className="text-xl font-extrabold text-foreground mb-6">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {relatedProducts?.map((product) =>
        <Link key={product?.id} href="/product-detail" className="group">
            <div className="bg-muted rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="h-32 overflow-hidden relative">
                <AppImage
                src={product?.image}
                alt={product?.imageAlt}
                width={200}
                height={128}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                <span className="absolute top-2 left-2 discount-badge">-{product?.discount}%</span>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-foreground line-clamp-2 leading-snug mb-2 group-hover:text-primary transition-colors">{product?.name}</p>
                <div className="flex items-center gap-0.5 mb-1">
                  <span className="text-warning text-xs">★★★★</span>
                  <span className="text-xs text-muted-foreground ml-1">{product?.rating}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold text-primary">₹{product?.price}</span>
                  <span className="text-xs price-strike">₹{product?.mrp}</span>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>);

}
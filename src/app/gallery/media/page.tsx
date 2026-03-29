'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ImageIcon, Maximize2 } from 'lucide-react';

export default function MediaGalleryPage() {
  // Mapping for images with non-standard resolutions in filenames to ensure they load correctly
  const galleryImages = Array.from({ length: 35 }, (_, i) => {
    const id = i + 1;
    let src = '';
    
    // Handle specific file naming patterns provided by the user
    if (id === 1) {
      src = `/GALLERY/MEDIA/1-683x1024.webp`;
    } else if (id === 2) {
      src = `/GALLERY/MEDIA/2-768x1024.webp`;
    } else if (id === 3) {
      src = `/GALLERY/MEDIA/3-768x1024.webp`;
    } else if (id === 4) {
      src = `/GALLERY/MEDIA/4.webp`;
    } else if (id === 5) {
      src = `/GALLERY/MEDIA/5-1024x609.webp`;
    } else if (id === 6) {
      src = `/GALLERY/MEDIA/6.webp`;
    } else if (id === 7) {
      src = `/GALLERY/MEDIA/7-1024x738.webp`;
    } else if (id === 8) {
      src = `/GALLERY/MEDIA/8-576x1024.webp`;
    } else if (id === 9) {
      src = `/GALLERY/MEDIA/9-1024x683.webp`;
    } else if (id === 10) {
      src = `/GALLERY/MEDIA/10.webp`;
    } else if (id === 11) {
      src = `/GALLERY/MEDIA/11-768x1024.webp`;
    } else if (id === 12) {
      src = `/GALLERY/MEDIA/12.webp`;
    } else {
      // Default pattern for the rest of the images
      src = `/GALLERY/MEDIA/${id}-683x1024.webp`;
    }

    return {
      id,
      src,
      alt: `Jayotri Academy Event Photo ${id}`
    };
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Header Section */}
        <section className="relative py-20 md:py-28 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          {/* Decorative elements */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
              <ImageIcon className="h-4 w-4" />
              Visual Journey
            </div>
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Media Gallery
            </h1>
            <p className="text-xl text-slate-500 font-medium italic max-w-2xl mx-auto">
              Capturing moments of learning, achievement, and growth at Jayotri Academy.
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20 max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Image Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-bold uppercase tracking-widest opacity-80">
                    Jayotri Academy Highlights
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery Info Note */}
          <div className="mt-20 text-center">
            <div className="w-24 h-1 bg-[#00b2a9] mx-auto rounded-full mb-8" />
            <p className="text-slate-400 font-medium italic">
              * Showing the latest {galleryImages.length} moments from our campus life.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-headline text-3xl md:text-4xl mb-6">Experience Excellence Firsthand</h3>
            <p className="text-white/70 text-lg mb-8">
              Want to see our campus in person? Schedule a tour today and discover the vibrant environment of Jayotri Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-primary px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-none">
                Request a Tour
              </button>
              <button className="border border-white/30 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all rounded-none">
                Contact Admissions
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

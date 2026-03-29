'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MediaGalleryPage() {
  // Mapping for images with non-standard resolutions in filenames to ensure they load correctly
  // Images 24, 25, 27, and 29 are strictly filtered out from the list as per requirements.
  const galleryImages = Array.from({ length: 39 }, (_, i) => i + 1)
    .filter(id => ![24, 25, 27, 29].includes(id))
    .map((id) => {
      let src = '';
      
      // Handle specific file naming patterns based on the school's media directory structure
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
        src = `/GALLERY/MEDIA/10-576x1024.webp`;
      } else if (id === 11) {
        src = `/GALLERY/MEDIA/11-768x1024.webp`;
      } else if (id === 12) {
        src = `/GALLERY/MEDIA/12.webp`;
      } else if (id === 13) {
        src = `/GALLERY/MEDIA/13-1024x682.webp`;
      } else if (id === 14) {
        src = `/GALLERY/MEDIA/14.webp`;
      } else if (id === 15) {
        src = `/GALLERY/MEDIA/15-683x1024.webp`;
      } else if (id === 16) {
        src = `/GALLERY/MEDIA/16-768x1024.webp`;
      } else if (id === 17) {
        src = `/GALLERY/MEDIA/17-1024x683.webp`;
      } else if (id === 18) {
        src = `/GALLERY/MEDIA/18-1024x768.webp`;
      } else if (id === 19) {
        src = `/GALLERY/MEDIA/19-768x1024.webp`;
      } else if (id === 20) {
        src = `/GALLERY/MEDIA/20-1024x576.webp`;
      } else if (id === 21) {
        src = `/GALLERY/MEDIA/21-1024x683.webp`;
      } else if (id === 22) {
        src = `/GALLERY/MEDIA/22-768x1024.webp`;
      } else if (id === 23) {
        src = `/GALLERY/MEDIA/23-1024x462.webp`;
      } else if (id === 26) {
        src = `/GALLERY/MEDIA/26-1024x682.webp`;
      } else if (id === 28) {
        src = `/GALLERY/MEDIA/28-1024x461.webp`;
      } else if (id === 30) {
        src = `/GALLERY/MEDIA/30-834x1024.webp`;
      } else if (id === 31) {
        src = `/GALLERY/MEDIA/31-1024x682.webp`;
      } else if (id === 32) {
        src = `/GALLERY/MEDIA/32-1024x683.webp`;
      } else if (id === 33) {
        src = `/GALLERY/MEDIA/33.webp`;
      } else if (id === 34) {
        src = `/GALLERY/MEDIA/34.webp`;
      } else if (id === 35) {
        src = `/GALLERY/MEDIA/35.webp`;
      } else if (id === 36) {
        src = `/GALLERY/MEDIA/36-1024x462.webp`;
      } else if (id === 37) {
        src = `/GALLERY/MEDIA/37.webp`;
      } else if (id === 38) {
        src = `/GALLERY/MEDIA/38-768x1024.webp`;
      } else if (id === 39) {
        src = `/GALLERY/MEDIA/39-576x1024.webp`;
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
        {/* Gallery Grid Section */}
        <section className="py-20 max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized={true}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

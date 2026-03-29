'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SchoolProspectusPage() {
  // Array of 10 prospectus images to be displayed vertically
  const prospectusImages = [
    "/ABOUT US/School Prospectus/1.webp",
    "/ABOUT US/School Prospectus/2.webp",
    "/ABOUT US/School Prospectus/3.webp",
    "/ABOUT US/School Prospectus/4.webp",
    "/ABOUT US/School Prospectus/5.webp",
    "/ABOUT US/School Prospectus/6.webp",
    "/ABOUT US/School Prospectus/7.webp",
    "/ABOUT US/School Prospectus/8.webp",
    "/ABOUT US/School Prospectus/9.webp",
    "/ABOUT US/School Prospectus/10.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="bg-[#f5f5f5] pb-20">
        {/* Simple Header Section */}
        <section className="py-16 text-center">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-800 font-bold">
            School Prospectus
          </h1>
          <div className="w-20 h-1 bg-[#00b2a9] mx-auto mt-4 rounded-full" />
        </section>

        {/* Prospectus Images Vertical List */}
        <section className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8 md:gap-12">
            {prospectusImages.map((src, index) => (
              <div key={index} className="relative w-full shadow-2xl rounded-sm overflow-hidden bg-white border border-slate-200">
                {/* Maintain a standard document aspect ratio (roughly 1:1.41 for A4) */}
                <div className="relative aspect-[1/1.41] w-full">
                  <Image
                    src={src}
                    alt={`Prospectus Page ${index + 1}`}
                    fill
                    className="object-contain md:object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority={index < 2} // Priority load for first two images
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Message */}
        <section className="mt-20 text-center px-6">
          <p className="text-slate-500 font-medium italic">
            Visit the school office to collect a physical copy of our official prospectus.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

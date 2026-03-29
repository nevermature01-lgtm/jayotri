'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SchoolProspectusPage() {
  // Array of 10 prospectus images to be displayed vertically with the specific naming convention
  const prospectusImages = [
    "/ABOUT US/School Prospectus/Prospectus-New-1-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-2-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-3-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-4-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-5-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-6-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-7-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-8-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-9-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-10-scaled-1-1024x1024.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="bg-[#f5f5f5] pb-20">
        {/* Simple Header Section - Only Heading */}
        <section className="py-16 text-center">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-800 font-bold">
            School Prospectus
          </h1>
          <div className="w-20 h-1 bg-[#00b2a9] mx-auto mt-4 rounded-full" />
        </section>

        {/* Prospectus Images Vertical List - One image per line */}
        <section className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8 md:gap-12">
            {prospectusImages.map((src, index) => (
              <div key={index} className="relative w-full shadow-2xl rounded-sm overflow-hidden bg-white border border-slate-200">
                {/* Maintain a standard document aspect ratio */}
                <div className="relative aspect-[1/1.41] w-full">
                  <Image
                    src={src}
                    alt={`Prospectus Page ${index + 1}`}
                    fill
                    className="object-contain md:object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority={index < 2} // Priority load for visible images
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

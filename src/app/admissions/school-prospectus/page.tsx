'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SchoolProspectusPage() {
  // Array of 10 prospectus images to be displayed vertically
  const prospectusImages = [
    "/ABOUT US/School Prospectus/Prospectus-New-1-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-2-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-3-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-4-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-5-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-6-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-7-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-8-scaled-1-1024x512.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-9-scaled-1-1024x1024.webp",
    "/ABOUT US/School Prospectus/Prospectus-New-10-scaled-1-1024x1024.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pb-0">
        {/* Simple Header Section */}
        <section className="py-12 text-center bg-white">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-800 font-bold">
            School Prospectus
          </h1>
          <div className="w-20 h-1 bg-[#00b2a9] mx-auto mt-4 rounded-full" />
        </section>

        {/* Prospectus Images Vertical List - No extra space, full width */}
        <section className="max-w-4xl mx-auto px-0">
          <div className="flex flex-col">
            {prospectusImages.map((src, index) => {
              const isWide = src.includes('1024x512');
              return (
                <div key={index} className="relative w-full">
                  <Image
                    src={src}
                    alt={`Prospectus Page ${index + 1}`}
                    width={1024}
                    height={isWide ? 512 : 1024}
                    className="w-full h-auto block"
                    priority={index < 2}
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

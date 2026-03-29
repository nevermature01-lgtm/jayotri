'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AffiliationLetterPage() {
  // Array of 7 affiliation letter images to be displayed vertically
  const affiliationImages = [
    "/ABOUT US/Affiliation/Affiliation-Letter-1.webp",
    "/ABOUT US/Affiliation/Affiliation-Letter-2.webp",
    "/ABOUT US/Affiliation/Affiliation-Letter-3.webp",
    "/ABOUT US/Affiliation/Affiliation-Letter-4.webp",
    "/ABOUT US/Affiliation/Affiliation-Letter-5.webp",
    "/ABOUT US/Affiliation/Affiliation-Letter-6.webp",
    "/ABOUT US/Affiliation/Affiliation-Letter-7.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pb-0">
        {/* Header Section */}
        <section className="py-12 text-center bg-white">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-800 font-bold">
            Affiliation Letter
          </h1>
          <div className="w-20 h-1 bg-[#00b2a9] mx-auto mt-4 rounded-full" />
        </section>

        {/* Affiliation Images Vertical List */}
        <section className="max-w-4xl mx-auto px-0">
          <div className="flex flex-col">
            {affiliationImages.map((src, index) => {
              return (
                <div key={index} className="relative w-full">
                  <Image
                    src={src}
                    alt={`Affiliation Letter Page ${index + 1}`}
                    width={1024}
                    height={1448} // Standard A4-ish aspect ratio placeholder, will auto-adjust
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

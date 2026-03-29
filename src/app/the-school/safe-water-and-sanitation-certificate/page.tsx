'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SafeWaterSanitationCertificatePage() {
  // Array of safe water and sanitation certificate images
  const certificateImages = [
    "/THE SCHOOL/SAFE WATER & SANITATION CERTIFICATE/Safe-Water-Sanitation-Certificate_page-0001-724x1024-1-600x849.webp",
    "/THE SCHOOL/SAFE WATER & SANITATION CERTIFICATE/Safe-Water-Sanitation-Certificate_page-0002-724x1024-1-600x849.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pb-0">
        {/* Header Section */}
        <section className="py-12 text-center bg-white">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-800 font-bold">
            Safe Water and Sanitation Certificate
          </h1>
          <div className="w-20 h-1 bg-[#00b2a9] mx-auto mt-4 rounded-full" />
        </section>

        {/* Certificate Images Vertical List */}
        <section className="max-w-4xl mx-auto px-0">
          <div className="flex flex-col">
            {certificateImages.map((src, index) => {
              return (
                <div key={index} className="relative w-full">
                  <Image
                    src={src}
                    alt={`Safe Water and Sanitation Certificate Page ${index + 1}`}
                    width={600}
                    height={849}
                    className="w-full h-auto block"
                    priority={index === 0}
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

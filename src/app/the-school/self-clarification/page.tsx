'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SelfClarificationPage() {
  // Array of self-clarification certificate images
  const certificateImages = [
    "/THE SCHOOL/SELF CLARIFICATION/SELF-CERTIFICATION-_page-0001-721x1024-1-600x852.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pb-0">
        {/* Header Section */}
        <section className="py-12 text-center bg-white">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-800 font-bold">
            Self Clarification
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
                    alt={`Self Clarification Page ${index + 1}`}
                    width={600}
                    height={852}
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

'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SchoolProspectusPage() {
  // Assuming the images are named based on the page numbers visible in the screenshot (2, 3, 4, 5...)
  const prospectusPages = [
    { left: "/ABOUT US/School Prospectus/2.webp", right: "/ABOUT US/School Prospectus/3.webp" },
    { left: "/ABOUT US/School Prospectus/4.webp", right: "/ABOUT US/School Prospectus/5.webp" },
    { left: "/ABOUT US/School Prospectus/6.webp", right: "/ABOUT US/School Prospectus/7.webp" },
    { left: "/ABOUT US/School Prospectus/8.webp", right: "/ABOUT US/School Prospectus/9.webp" },
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

        {/* Prospectus Images Grid */}
        <section className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-12 md:gap-20">
            {prospectusPages.map((pair, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 shadow-2xl rounded-sm overflow-hidden bg-white">
                <div className="relative aspect-[1/1.1] w-full">
                  <Image
                    src={pair.left}
                    alt={`Prospectus Page ${index * 2 + 2}`}
                    fill
                    className="object-contain md:object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[1/1.1] w-full border-l border-slate-100">
                  <Image
                    src={pair.right}
                    alt={`Prospectus Page ${index * 2 + 3}`}
                    fill
                    className="object-contain md:object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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

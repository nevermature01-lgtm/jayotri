
'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export default function AcademicAdvisorMessagePage() {
  const advisorImg = PlaceHolderImages.find(img => img.id === 'advisor-portrait');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Academic Advisor's Message
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              "Curriculum Excellence and Teaching Standards"
            </p>
          </div>
        </section>

        {/* Message Content Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Advisor Image */}
            <div className="lg:w-2/5 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {advisorImg && (
                  <Image
                    src={advisorImg.imageUrl}
                    alt="Dr. Ram Mohan - Academic Advisor"
                    fill
                    className="object-cover"
                    data-ai-hint="academic portrait"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-8 text-white">
                  <p className="font-headline text-2xl font-bold">Dr. Ram Mohan</p>
                  <p className="text-sm uppercase tracking-widest text-accent font-bold">Academic Advisor</p>
                </div>
              </div>
            </div>

            {/* Message Text */}
            <div className="lg:w-3/5">
              <div className="mb-8">
                <Quote className="h-12 w-12 text-[#00b2a9]/20 mb-4" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Guiding Academic Direction and Excellence
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Our Academic Advisor plays a vital role in guiding the academic direction of Jayotri Academy. With a focus on curriculum excellence, teaching standards, and student progress, we ensure that our educational approach remains structured, relevant, and effective. 
                </p>
                <p>
                  Through continuous guidance and academic planning, we strive to support both students and educators in achieving the highest standards of learning.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <p className="text-slate-800 font-bold text-xl mb-1">Dr. Ram Mohan</p>
                <p className="text-[#00b2a9] font-medium">Academic Advisor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Strip */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-headline text-3xl md:text-4xl italic font-light leading-relaxed">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </h3>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

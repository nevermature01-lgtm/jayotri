'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export default function PrincipalMessagePage() {
  const principalImg = PlaceHolderImages.find(img => img.id === 'principal-portrait');

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
              Principal's Message
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              "Leadership through Vision and Values"
            </p>
          </div>
        </section>

        {/* Message Content Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Principal Image */}
            <div className="lg:w-2/5 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {principalImg && (
                  <Image
                    src={principalImg.imageUrl}
                    alt="Mr. Yogendra Mishra - Principal"
                    fill
                    className="object-cover"
                    data-ai-hint="professional portrait"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-8 text-white">
                  <p className="font-headline text-2xl font-bold">Mr. Yogendra Mishra</p>
                  <p className="text-sm uppercase tracking-widest text-accent font-bold">Principal, Jayotri Academy</p>
                </div>
              </div>
            </div>

            {/* Message Text */}
            <div className="lg:w-3/5">
              <div className="mb-8">
                <Quote className="h-12 w-12 text-[#00b2a9]/20 mb-4" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Building the Foundation for a Confident Future
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  At Jayotri Academy, we believe that education is the foundation of a confident, knowledgeable, and responsible future. Our primary goal is to provide strong instruction across all levels through disciplined learning, experienced guidance, and a nurturing environment.
                </p>
                <p>
                  We are deeply committed to shaping young minds with enduring values, practical skills, and clarity of thought. Our mission is to prepare students not only for academic excellence but for the vast challenges and opportunities of life beyond the classroom.
                </p>
                <p>
                  We strive to create a space where every student feels empowered to explore their potential and grow into responsible citizens of the world.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <p className="text-slate-800 font-bold text-xl mb-1">Yogendra Mishra</p>
                <p className="text-[#00b2a9] font-medium">Principal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Strip */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-headline text-3xl md:text-4xl italic font-light leading-relaxed">
              "We shape thinkers who rewrite the future with integrity and vision."
            </h3>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
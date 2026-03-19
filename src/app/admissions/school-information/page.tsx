'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  School, 
  Info, 
  ShieldCheck, 
  Globe, 
  Users, 
  BookOpen, 
  Star,
  CheckCircle2
} from 'lucide-react';

export default function SchoolInformationPage() {
  const campusImg = PlaceHolderImages.find(img => img.id === 'hero-campus');

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
              School Information
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Building Enlightened Minds for a Brighter Tomorrow
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                  <Star className="h-4 w-4 fill-[#00b2a9]" />
                  Welcome to Jayotri Academy
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Nurturing Excellence, <br />Character, and Innovation
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    The school is situated in a sprawling green oasis of 20 acres and within easy reach to all modern amenities. Inspired by the Gurukul system and empowered by 21st-century learning tools, Jayotri Academy is a co-educational institution promoting holistic and healthy development.
                  </p>
                  <p>
                    At Jayotri Academy, we are deeply committed to imparting value-based education focused on personality development and character building. Our mission goes beyond teaching — we nurture independent learners capable of self-growth, responsibility, and lifelong learning.
                  </p>
                  <p>
                    We instill respect for institutions, family, society, traditions, and diverse beliefs, fostering social harmony and shaping students into responsible global citizens.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Affiliation No.</p>
                  <p className="text-2xl font-headline font-bold text-primary">2132244</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">School No.</p>
                  <p className="text-2xl font-headline font-bold text-primary">70358</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                {campusImg && (
                  <Image
                    src={campusImg.imageUrl}
                    alt="Jayotri Academy Campus"
                    fill
                    className="object-cover"
                    data-ai-hint="university building"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-4xl font-headline font-bold">20 Acres</p>
                  <p className="text-sm uppercase tracking-widest opacity-80">Green Campus Oasis</p>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Safe Environment</h3>
                    <p className="text-sm text-slate-500">Fully secured and monitored campus for student safety.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9]">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Global Citizens</h3>
                    <p className="text-sm text-slate-500">Fostering respect and understanding for diverse traditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Summary */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="font-headline text-3xl md:text-4xl italic font-light leading-relaxed mb-8">
              "Jayotri Academy stands as an abode of enlightenment, dedicated to quality education that nurtures competence, confidence, and character in every student."
            </h3>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Competence</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Confidence</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Character</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

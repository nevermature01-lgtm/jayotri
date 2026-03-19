
'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Shield, School, Target, Globe } from 'lucide-react';

export default function OurSchoolPage() {
  const bannerImg = PlaceHolderImages.find(img => img.id === 'hero-campus');
  const classroomImg = PlaceHolderImages.find(img => img.id === 'classroom-hero');

  return (
    <div className="min-h-screen bg-[#FCF9F4]">
      <Navigation />
      
      <main>
        {/* Banner Section */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center">
          {bannerImg && (
            <Image
              src={bannerImg.imageUrl}
              alt="About Jayotri Academy"
              fill
              className="object-cover"
              priority
              data-ai-hint="university building campus"
            />
          )}
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-headline text-4xl md:text-6xl text-white font-bold mb-4">
              Our School
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>
        </section>

        {/* Affiliation & Identity Section */}
        <section className="py-16 md:py-24 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-2">Affiliation No.</h3>
              <p className="font-headline text-2xl font-bold text-primary">2132244</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <School className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-2">School No.</h3>
              <p className="font-headline text-2xl font-bold text-primary">70358</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-2">Society Reg. No.</h3>
              <p className="font-headline text-2xl font-bold text-primary">1313 / 2014-15</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#00b2a9] uppercase mb-4 block">About Our Institution</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                About Our <br />
                <span className="italic font-light">Jayotri Academy</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  The school is situated in a sprawling green oasis of 20 acres and within easy reach to all the amenities of the cities. Drawing inspiration from the gurukul style of learning combined with modern tools of 21st century’s education, it is a co-educational school promoting healthy relationship.
                </p>
                <p>
                  We at Jayotri Academy, are earnestly committed to the noble pursuit of imparting knowledge and education to its pupils based on values, personality development and character-building.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                {classroomImg && (
                  <Image
                    src={classroomImg.imageUrl}
                    alt="Jayotri Academy Classroom"
                    fill
                    className="object-cover"
                    data-ai-hint="school classroom"
                  />
                )}
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#00b2a9] text-white p-8 rounded-xl shadow-xl hidden md:block max-w-[280px]">
                <p className="text-2xl font-headline font-bold mb-2 italic">20 Acres</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Sprawling Green Campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Target className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Our Noble Mission</h2>
              <p className="text-white/70 text-lg">
                Our Mission is not only to teach our children but to educate them, not to make them learn but to be a learner themselves, not to train them but to develop the capacity for self-training.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="h-6 w-6 text-accent" />
                  Social Cohesion
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We generate among student’s respect for institutions, family and society, the feeling of social cohesion, respect for tradition, belief and practices of others and advancement towards a well-knit society based on values.
                </p>
              </div>
              <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <School className="h-6 w-6 text-accent" />
                  Abode of Enlightenment
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Jayotri Academy is an abode of enlightenment. It aims to impart quality education to the students. It enables value based growth and practice based learning in order to nurture competent young talents of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

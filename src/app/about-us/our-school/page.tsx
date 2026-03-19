
'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Shield, School, Target, Globe } from 'lucide-react';

export default function OurSchoolPage() {
  const classroomImg = PlaceHolderImages.find(img => img.id === 'classroom-hero');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden">
          {/* Decorative Dotted Circles */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Our School
            </h1>
            <p className="text-xl text-slate-500 font-medium">
              Welcome to Jayotri Academy
            </p>
          </div>
        </section>

        {/* Affiliation & Details Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#00b2a9] uppercase mb-4 block">About Our Jayotri Academy</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Affiliation No.: 2132244 <br />
                School No.: 70358 <br />
                Society Registration No.: 1313/ 2014-15
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  The school is situated in a sprawling green oasis of 20 acres and within easy reach to all the amenities of the cities. Drawing inspiration from the gurukul style of learning combined with modern tools of 21st century’s education, it is a co-educational school promoting healthy relationship.
                </p>
                <p>
                  We at Jayotri Academy, are earnestly committed to the noble pursuit of imparting knowledge and education to its pupils based on values, personality development and character-building.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-[#00b2a9]/10">
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
              
              {/* Floating Stat Badge */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 border border-slate-100 hidden md:flex">
                <p className="text-[#00b2a9] text-4xl font-headline font-bold">15+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 text-center">Years of Experience</p>
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

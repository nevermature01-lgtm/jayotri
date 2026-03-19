'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Building2, 
  Beaker, 
  Monitor, 
  Music, 
  Library, 
  Zap, 
  Trees, 
  ShieldCheck,
  Star
} from 'lucide-react';

export default function InfrastructurePage() {
  const campusImg = PlaceHolderImages.find(img => img.id === 'hero-campus');

  const highlights = [
    { icon: <Building2 className="h-6 w-6" />, text: "Multi-storey School Building" },
    { icon: <Beaker className="h-6 w-6" />, text: "Physics, Chemistry & Biology Labs" },
    { icon: <Monitor className="h-6 w-6" />, text: "AC Computer Lab with 40+ PCs" },
    { icon: <Music className="h-6 w-6" />, text: "Music & Dance Studios" },
    { icon: <Library className="h-6 w-6" />, text: "Well-stocked Modern Library" },
    { icon: <Zap className="h-6 w-6" />, text: "20KW Solar & Diesel Backup" },
    { icon: <Trees className="h-6 w-6" />, text: "Lush Garden & Playground" },
    { icon: <ShieldCheck className="h-6 w-6" />, text: "Fully Secured & Gated Campus" },
  ];

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
              Infrastructure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              A World-Class Environment for Growth
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="h-4 w-4 fill-[#00b2a9]" />
                Our Campus
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                Four Acres of Excellence
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  We have set up a good infrastructure spreading across four acres. It includes a beautiful multi-storey school building, a fully covered and secured campus, spacious, well ventilated, comfortable and interactive classrooms.
                </p>
                <p>
                  Our facilities include an air-conditioned auditorium, advanced Physics, Chemistry, and Biology laboratories, and an air-conditioned computer laboratory equipped with forty modern systems.
                </p>
                <p>
                  Specialized areas include a music room with modern and classical instruments, a dance room, an Exam-Room, and a Soft Play Gym/Doll house for our Tiny-Tots. Sustainability is prioritized with a soundproof diesel generator and a 20 Kilo Watt Solar power backup system.
                </p>
                <p className="font-medium text-slate-800">
                  On top of all, we have a visionary management and a pool of wise & kind teachers who understand how young people learn and prepare them to face new challenges.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="p-6 bg-[#FCF9F4] rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#00b2a9] shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
              
              <div className="sm:col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl mt-4">
                {campusImg && (
                  <Image
                    src={campusImg.imageUrl}
                    alt="Jayotri Academy Campus"
                    fill
                    className="object-cover"
                    data-ai-hint="university building"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

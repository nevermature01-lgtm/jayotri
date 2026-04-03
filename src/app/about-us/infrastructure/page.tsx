'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Building2, 
  ShieldCheck, 
  Eye, 
  Droplets, 
  Lock, 
  Landmark, 
  Mic2, 
  Trophy, 
  Baby, 
  Monitor, 
  BookOpen, 
  Palette,
  Camera,
  ArrowRight,
  HandHelping
} from 'lucide-react';

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Newly Enhanced Infrastructure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic max-w-2xl mx-auto">
              "Creating Safer, Smarter and More Inspiring Learning Spaces"
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="text-lg text-slate-600 leading-relaxed">
              At Jayotri Academy, infrastructure is continuously upgraded to create a safe, engaging, and child-friendly environment that supports multidimensional learning. Every enhancement reflects our commitment to safety, innovation, aesthetics, and student comfort, ensuring that learning happens in an inspiring and secure atmosphere.
            </p>
          </div>

          {/* Safety & Security Section */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-slate-800">Safety & Security</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <Camera className="h-8 w-8 text-[#00b2a9] mb-6" />
                <h3 className="font-bold text-slate-800 mb-4">Functional Monitoring</h3>
                <p className="text-sm text-slate-500 leading-relaxed">All CCTV cameras are fully functional, providing constant monitoring and a secure environment across the entire campus.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <Droplets className="h-8 w-8 text-[#00b2a9] mb-6" />
                <h3 className="font-bold text-slate-800 mb-4">Clean Water Access</h3>
                <p className="text-sm text-slate-500 leading-relaxed">All RO systems and water coolers have been serviced or replaced, ensuring easy access to clean and safe drinking water for all.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <HandHelping className="h-8 w-8 text-[#00b2a9] mb-6" />
                <h3 className="font-bold text-slate-800 mb-4">Physical Safety</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Railing heights near staircases have been increased, and road safety equipment installed to ensure smooth movement for younger students.</p>
              </div>
            </div>

            {/* Gate Pass System Highlight */}
            <div className="mt-12 p-8 md:p-12 bg-primary rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
                    <Lock className="h-4 w-4" />
                    Digital Gate Pass System
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-6">Maximum Safety and Accountability</h3>
                  <p className="text-white/70 leading-relaxed mb-8">
                    When a visitor arrives, their photograph is captured through a webcam and matched with school records. If not identified, a confirmation call is made to the registered parent's mobile. Only after parental consent is the visitor allowed entry.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Webcam identification for all visitors
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Direct parental consent for student meetups
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <Image 
                    src="/ABOUT US/School Information/infrastructure.webp"
                    alt="Digital Security"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Identity & Aesthetics Section */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Landmark className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-headline font-bold text-slate-800">Identity & Aesthetics</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To connect students with India's rich educational heritage, school blocks have been named after ancient Indian universities like Nalanda and Takshashila. Display boards with brief introductions create an inspiring academic environment.
              </p>
              <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Mic2 className="h-5 w-5 text-primary" />
                  Cultural Arts Facility
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  A new stage with two green rooms, two changing rooms, and an attached restroom has been developed. This facility promotes public speaking, cultural performances, and confidence-building.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-headline font-bold text-slate-800">Sports & Play Areas</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Sports infrastructure has been strengthened with renovated badminton and volleyball courts, along with a Kho-Kho ground.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-primary font-bold text-lg">1500 sq ft</span>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Spacious Sports Room</p>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-primary font-bold text-lg">Playschool Garden</span>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Joyful Sensory Play</p>
                </div>
              </div>
            </div>
          </div>

          {/* Classrooms & Learning Spaces */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Monitor className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-slate-800">Classrooms & Learning Spaces</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold">01</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Interactive Panels</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Installed in classrooms to make teaching technology-enabled and engaging.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold">02</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Advanced Labs</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Renovated Physics, Chemistry, Biology, and Computer Labs. The Digital Lab features 40+ systems connected to a central server.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold">03</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Creative Studios</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Improved Music and Dance rooms providing professional creative spaces for artistic development.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#00b2a9] p-10 rounded-[2rem] text-white flex flex-col justify-center shadow-xl">
                <Mic2 className="h-10 w-10 text-white/30 mb-6" />
                <h3 className="text-2xl font-headline font-bold mb-4">Unique Primary Podiums</h3>
                <p className="leading-relaxed opacity-90 mb-6">
                  A unique two-feet podium has been introduced in primary classrooms. This initiative encourages public speaking from an early age, allowing students to present ideas, narrate stories, and lead discussions.
                </p>
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                  <ArrowRight className="h-4 w-4" />
                  Nurturing Future Leaders
                </div>
              </div>
            </div>
          </div>

          {/* Playschool Enhancements Section */}
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-slate-100">
            <div className="absolute top-0 right-0 p-8">
              <Baby className="h-32 w-32 text-[#00b2a9]/5" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                  <Palette className="h-4 w-4" />
                  Special Attention for Tiny-Tots
                </div>
                <h2 className="text-4xl font-headline font-bold text-slate-800 mb-8 leading-tight">Playschool Enhancements</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>Special attention has been given to our youngest learners with redesigned wall and flush heights suited to children's comfort and safety.</p>
                  <p>Washbasins and taps are installed within easy reach, and glass windows in the playroom beautifully showcase categorized toys at child-friendly levels to encourage exploration.</p>
                  <p className="font-medium text-slate-800">Individual bottle hangers for each child promote organization, discipline, and responsibility from the very beginning.</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/ABOUT US/School Information/infrastructure.webp"
                  alt="Playschool Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Closing Summary */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-headline text-3xl md:text-4xl italic font-light leading-relaxed text-slate-800 mb-8">
              "Jayotri Academy's infrastructure reflects our commitment to safety, innovation, comfort, and meaningful learning. Every campus space is designed to inspire students to grow."
            </h3>
            <div className="w-24 h-1 bg-[#00b2a9] mx-auto rounded-full" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#00b2a9]">
              Jayotri Academy — Multidimensional Education
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

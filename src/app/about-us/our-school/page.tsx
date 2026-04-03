
'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Globe, School, Trophy, Users, BookOpen, Star, CheckCircle2 } from 'lucide-react';

export default function OurSchoolPage() {
  const milestones = [
    { icon: <Users className="h-5 w-5" />, label: "1700+ Students", description: "A growing and thriving learning community" },
    { icon: <Star className="h-5 w-5" />, label: "70+ Qualified Teachers", description: "Dedicated mentors and facilitators" },
    { icon: <Trophy className="h-5 w-5" />, label: "100% Board Results", description: "Consistent academic excellence" },
    { icon: <BookOpen className="h-5 w-5" />, label: "10 Editions of UDAAN", description: "Celebrating student creativity" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden">
          {/* Decorative Dotted Circles */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Our School
            </h1>
            <p className="text-xl text-slate-500 font-medium">
              Jayotri Academy Bharthana
            </p>
          </div>
        </section>

        {/* History & Detailed Information Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#00b2a9] uppercase mb-4 block">Founded in 2015</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-8 leading-tight">
                A Journey of <br />Multidimensional Education
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Jayotri Academy was founded in 2015 with a simple yet powerful vision — to create an educational space where creativity, inclusivity, and meaningful learning shape young minds for life. What began as a humble initiative with just 120 students has today grown into a vibrant and dynamic learning community.
                </p>
                <p>
                  In 2026, Jayotri Academy proudly stands as a family of 1700+ students, supported by 70+ qualified and dedicated teachers, all working together towards one shared goal — <strong>Multidimensional Education</strong>.
                </p>
                <p>
                  From the very beginning, Jayotri Academy has believed that education must go beyond textbooks. We focus on communication, character, and clarity, encouraging students to think creatively, express confidently, and grow responsibly. Our inclusive learning environment ensures that every child feels valued, supported, and inspired to discover their unique potential.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-[#00b2a9]/10">
                <Image
                  src="/ABOUT US/OUR SCHOOL/our school.webp"
                  alt="Jayotri Academy Campus"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stat Badge */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 border border-slate-100 hidden md:flex">
                <p className="text-[#00b2a9] text-4xl font-headline font-bold">1700+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 text-center">Students Enrolled</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-4">Remarkable Milestones</h2>
              <p className="text-slate-500">Consistent growth and excellence over the years.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#00b2a9]/10 rounded-full flex items-center justify-center text-[#00b2a9] mx-auto mb-6">
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.label}</h3>
                  <p className="text-slate-500 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Magazine & Sports Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold text-slate-800">UDAAN – Our Creative Spirit</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our annual school magazine <strong>Udaan</strong> reflects the creative spirit of our students, providing a platform for expression, imagination, and innovation. With 10 successful editions, it stands as a symbol of our commitment to nurturing creativity and voice.
              </p>
              <div className="bg-[#00b2a9]/5 p-8 rounded-2xl border border-[#00b2a9]/10">
                <h3 className="font-bold text-[#00b2a9] mb-4">Sports Achievements</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <span>CBSE Cluster Games: Two-time First Runner-Up in Kho-Kho</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <span>Multiple Championship Trophies in various interschool sports competitions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col justify-center bg-primary p-12 rounded-3xl text-white">
              <h2 className="font-headline text-3xl font-bold mb-8">Nurturing Future Leaders</h2>
              <div className="space-y-6 text-white/80">
                <p>
                  At Jayotri Academy, learning is multidimensional. Along with academic excellence, we emphasize:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Project-based learning",
                    "Communication development",
                    "Reading culture",
                    "Leadership skills",
                    "Citizenship values"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-6 border-t border-white/10 italic">
                  Today, Jayotri Academy continues to grow with the same passion and commitment with which it began — nurturing confident individuals, responsible citizens, and future leaders.
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

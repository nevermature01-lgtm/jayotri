'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Lightbulb, Compass, Palette, User, Briefcase, Star } from 'lucide-react';

export default function VisionValuesPage() {
  const pillars = [
    {
      icon: <Compass className="h-8 w-8 text-[#00b2a9]" />,
      title: "Exploration Over Testing",
      description: "Minimal testing with a greater focus on exploration and natural curiosity."
    },
    {
      icon: <Palette className="h-8 w-8 text-[#00b2a9]" />,
      title: "Art & Design",
      description: "Strong art and design programs to foster creativity and visual thinking."
    },
    {
      icon: <User className="h-8 w-8 text-[#00b2a9]" />,
      title: "Individuality",
      description: "Emphasis on individuality and self-expression for every student."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#00b2a9]" />,
      title: "Project-Based Learning",
      description: "Real-world project-based learning to build practical skills and understanding."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Vision & Values
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Welcome to Jayotri Academy
            </p>
          </div>
        </section>

        {/* Vision & Mission Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Vision Card */}
            <div className="bg-primary p-12 rounded-3xl text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <Target className="h-12 w-12 text-accent mb-8" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                Shaping young minds with communication, character and clarity to build responsible citizens for society and the nation.
              </p>
            </div>

            {/* Mission Section */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                <Lightbulb className="h-4 w-4" />
                Our Commitment
              </div>
              <h2 className="font-headline text-4xl font-bold text-slate-800 mb-8">Our Mission</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  At Jayotri Academy, we are committed to providing multidimensional education that strengthens communication, builds character, and nurtures clarity of thought.
                </p>
                <p>
                  Through transparent practices and value-based learning, we create an environment where every student grows with confidence, integrity, and responsibility, ready to contribute meaningfully to society and the nation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Pillars Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00b2a9]/20 to-transparent" />
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 text-[#00b2a9]">
                <Star className="h-5 w-5 fill-[#00b2a9]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Core Methodology</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Guiding Pillars of the Mission
              </h2>
              <div className="w-24 h-1 bg-[#00b2a9] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#00b2a9]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00b2a9] group-hover:text-white transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{pillar.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

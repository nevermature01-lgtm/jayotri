
'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Layers, 
  BookOpen, 
  GraduationCap, 
  School,
  Star
} from 'lucide-react';

export default function AcademicStructurePage() {
  const sections = [
    {
      title: "Foundational Stage",
      classes: "Play Group, Nursery, LKG, UKG",
      focus: "Play-based learning, cognitive development, and social skills.",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Primary Section",
      classes: "Classes I to V",
      focus: "Building strong fundamentals in literacy, numeracy, and environmental awareness.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Middle Section",
      classes: "Classes VI to VIII",
      focus: "Conceptual depth across subjects including Sciences, Mathematics, and Languages.",
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: "Secondary Section",
      classes: "Classes IX & X",
      focus: "CBSE curriculum orientation with focus on analytical skills and board readiness.",
      icon: <School className="h-6 w-6" />
    },
    {
      title: "Senior Secondary Section",
      classes: "Classes XI & XII",
      focus: "Specialized streams (Science & Commerce) preparing for higher education and careers.",
      icon: <GraduationCap className="h-6 w-6" />
    }
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
              Academic Structure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Multidimensional Learning Path
            </p>
          </div>
        </section>

        {/* Structure Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              A Structured Journey of Growth
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Jayotri Academy follows a well-defined academic structure that aligns with the CBSE framework, ensuring a seamless transition for students from early childhood to young adulthood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#00b2a9] shadow-sm mb-6 group-hover:bg-[#00b2a9] group-hover:text-white transition-colors">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-headline font-bold text-slate-800 mb-2">{section.title}</h3>
                <p className="text-[#00b2a9] font-bold text-sm uppercase tracking-widest mb-4">{section.classes}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{section.focus}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

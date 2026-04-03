'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Target, 
  Lightbulb, 
  Compass, 
  Palette, 
  User, 
  Briefcase, 
  Star, 
  CheckCircle2, 
  Mic2, 
  Cpu, 
  BookOpen, 
  Coins 
} from 'lucide-react';

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
              Multidimensional Education at Jayotri Academy
            </p>
          </div>
        </section>

        {/* Vision & Mission Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mb-24">
            {/* Vision Card */}
            <div className="bg-primary p-12 rounded-3xl text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <Target className="h-12 w-12 text-accent mb-8" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                <p>
                  Our vision is to nurture young minds with strong communication skills, sound character, and clarity of thought. We aim to develop confident individuals who think independently and act responsibly.
                </p>
                <p>
                  By instilling values and leadership qualities, we prepare students for meaningful roles in society. We strive to shape compassionate, ethical, and socially aware personalities. Our ultimate goal is to build responsible citizens who contribute positively to the nation and the world.
                </p>
              </div>
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
                  At Jayotri Academy, our mission is to provide <strong>Multidimensional Education</strong> that nurtures communication, strengthens character, and develops clarity of thought.
                </p>
                <p>
                  We strive to create a transparent, supportive, and value-based learning environment where every student grows with confidence, integrity, and a sense of responsibility. We believe in minimal testing and meaningful learning, encouraging exploration, curiosity, and deeper understanding.
                </p>
                <p>
                  By integrating real-world project-based learning, life skills, and innovative practices, we empower learners to become thoughtful individuals, responsible citizens, and compassionate contributors to society.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1: Minimal Testing */}
            <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00b2a9]">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-slate-800">Minimal Testing, More Learning</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We believe excessive testing often limits creativity. Instead, we emphasize learning through experience, exploration, and practical application.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <Coins className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Financial Literacy:</strong> Understanding money, budgeting, and responsible decision-making from an early stage.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Aptitude & Kaushal Bodh:</strong> Helping students identify their strengths and build essential life skills.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Cpu className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Early Computing:</strong> Computer Education begins at Class II to build technological confidence.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2: Strong Communication */}
            <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00b2a9]">
                <Mic2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-slate-800">Strong Communication Skill</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Communication is our cornerstone. We dedicate a specific period every morning after assembly for discussions, presentations, and interactive sessions.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>65 cm Podium:</strong> Innovative primary classroom podiums to nurture public speaking from the start.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Poetry & Public Speaking:</strong> Sessions judged by renowned poets to cultivate creativity and imagination.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Creativity & Expression */}
            <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00b2a9]">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-slate-800">Creativity, Individuality and Expression</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Every child possesses unique talent. Our events are sub-categorized class-wise to ensure maximum participation and healthy confidence-building.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Pottery Festival:</strong> Encouraging patience and hands-on artistic expression.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <BookOpen className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Book Fair:</strong> Creating excitement around reading and nurturing lifelong learners.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4: Real-World Projects */}
            <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00b2a9]">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-slate-800">Real-World Project-Based Learning</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Learning moves beyond theory as students engage in projects that develop innovation and collaboration.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>"Janswarah":</strong> A foolproof Electronic Voting Machine developed by students for school elections.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>"JIVA":</strong> An AI Chatbot created by students for teacher training and technological advancement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Pillars Section (Quick Icons) */}
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

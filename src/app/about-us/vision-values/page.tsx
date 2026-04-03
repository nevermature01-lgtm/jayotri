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
  Coins,
  History
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
              Vision and Mission
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Vision</h2>
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
              <h2 className="font-headline text-4xl font-bold text-slate-800 mb-8">Mission</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  At Jayotri Academy, our mission is to provide <strong>Multidimensional Education</strong> that nurtures communication, strengthens character, and develops clarity of thought.
                </p>
                <p>
                  We strive to create a transparent, supportive, and value-based learning environment where every student grows with confidence, integrity, and a sense of responsibility. We believe in minimal testing and meaningful learning, encouraging exploration, curiosity, and deeper understanding.
                </p>
                <p>
                  Through strong art, design, and creative programs, we celebrate individuality and give every child the freedom to express their unique potential. By integrating real-world project-based learning, life skills, and innovative practices, we prepare students not only with knowledge but also with creativity, resilience, and leadership qualities. Our mission is to empower learners to become thoughtful individuals, responsible citizens, and compassionate contributors to society and the nation.
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
                  Jayotri Academy believes that excessive testing often limits creativity and meaningful understanding. Instead of focusing only on examinations, the school emphasizes learning through experience, exploration, and practical application.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <Coins className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Financial Literacy:</strong> Students are introduced at an early stage to understand the value of money, budgeting, and responsible decision-making.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Aptitude & Kaushal Bodh:</strong> Programs help students identify their strengths and build essential life skills.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Cpu className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Early Computing:</strong> Exposure to Computer Education from Class II prepares students for a digital future and builds technological confidence.</span>
                  </li>
                </ul>
                <p className="text-sm italic">This approach reduces exam pressure while encouraging curiosity, independent thinking, and deeper understanding. Students learn not just to score marks but to learn for life.</p>
              </div>
            </div>

            {/* Feature 2: Strong Communication */}
            <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00b2a9]">
                <Mic2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-slate-800">Strong Communication Skill Designed Programs</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Communication is considered a cornerstone of success at Jayotri Academy. To nurture confident speakers and thoughtful communicators, the school conducts a Dedicated Communication Period every morning after assembly.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>65 cm Podium:</strong> Introducing unique primary classroom podiums, ensuring that public speaking begins at an early stage.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Poetry & Public Speaking:</strong> Sessions judged by renowned poets, giving students exposure to real literary evaluation and guidance.</span>
                  </li>
                </ul>
                <p className="text-sm italic">Through these consistent efforts, students gradually transform into confident communicators who can express their ideas effectively in any situation.</p>
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
                  Jayotri Academy strongly believes that every child possesses unique talent. Major competitions and events are thoughtfully sub-categorized class-wise to ensure maximum participation.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <History className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Pottery Festival:</strong> Encourages creativity, patience, and hands-on artistic expression, connecting students with traditional crafts.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <BookOpen className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>Book Fair:</strong> Promotes reading habits and creates excitement around books, nurturing lifelong readers.</span>
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
                  Learning moves beyond theory as students engage in real-world projects that develop innovation, collaboration, and problem-solving skills.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>"Janswarah":</strong> A foolproof Electronic Voting Machine developed by students for school elections.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00b2a9] shrink-0 mt-1" />
                    <span><strong>"JIVA":</strong> An AI Chatbot developed by students for Teacher training and technological advancement.</span>
                  </li>
                </ul>
                <p className="text-sm italic">Such projects empower students to think independently, experiment confidently, and create solutions that connect learning with real life.</p>
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

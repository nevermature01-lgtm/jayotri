
'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Brain, 
  Lightbulb, 
  Palette, 
  Trophy, 
  CheckCircle2, 
  Beaker, 
  Cpu, 
  Music, 
  History, 
  Library, 
  Users,
  Star
} from 'lucide-react';

export default function GalleryPage() {
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
              Gallery
            </h1>
            <p className="text-xl text-[#00b2a9] font-bold uppercase tracking-widest mb-4">
              Jayotri Academy, Bharthana
            </p>
            <p className="text-2xl text-slate-500 font-medium italic max-w-3xl mx-auto">
              "Multidimensional Education – Where Excellence Meets Creativity"
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-lg text-slate-600 leading-relaxed">
              At Jayotri Academy, learning extends beyond classrooms into experiences, opportunities, and environments designed to nurture confident, capable, and compassionate individuals. Our campus reflects the spirit of <strong>Multidimensional Education</strong>, where academic excellence blends seamlessly with creativity, innovation, and holistic development.
            </p>
          </div>

          {/* Multidimensional Development Grid */}
          <div className="space-y-32">
            
            {/* 1. Intellectual Side */}
            <section>
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                    <Brain className="h-4 w-4" />
                    Multidimensional Development
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-slate-800 mb-8">Taking Care of Intellectual Side Development</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-10">
                    At Jayotri Academy, intellectual growth is built on curiosity, exploration, and meaningful learning. AI Learning introduces students to emerging technologies and future-ready skills. Financial Literacy Programs develop awareness about money management and responsible decision-making from an early age.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Star className="h-4 w-4 text-[#00b2a9]" />
                        Key Programs
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> AI Learning & Tech</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Financial Literacy</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Aptitude & Reasoning</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Reading Mahotsava</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Library className="h-4 w-4 text-[#00b2a9]" />
                        Activity Spaces
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Ancient Univ. Blocks</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Tidy Titans Grading</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Assembly Area</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#00b2a9]" /> Reading Chain & Podium</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-headline font-bold text-[#00b2a9]">PG-UKG</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">1 Section</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-headline font-bold text-[#00b2a9]">1 to 5</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">1 Section</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-headline font-bold text-[#00b2a9]">6 to 8</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">1 Section</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-headline font-bold text-[#00b2a9]">9 to 12</span>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">1 Section</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Inventive & Scientific Side */}
            <section className="p-12 md:p-20 bg-primary rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
                    <Beaker className="h-4 w-4" />
                    Innovation & exploration
                  </div>
                  <h2 className="text-4xl font-headline font-bold mb-8">Taking Care of Inventive & Scientific Side</h2>
                  <p className="text-white/70 leading-relaxed text-lg mb-10">
                    Jayotri Academy promotes curiosity and scientific thinking through hands-on learning and exploration. Well-equipped labs provide practical exposure and strengthen conceptual understanding. Students learn to question, discover, and innovate.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <Cpu className="h-6 w-6 text-accent" />
                      <div>
                        <p className="font-bold">Air-Conditioned Computer Lab</p>
                        <p className="text-sm text-white/50">Developing digital literacy and technological proficiency.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <Beaker className="h-6 w-6 text-accent" />
                      <div>
                        <p className="font-bold">Advanced Science Labs</p>
                        <p className="text-sm text-white/50">Physics, Chemistry, and Biology facilities for practical exposure.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                  <h4 className="font-headline text-2xl font-bold mb-6">Special Highlights</h4>
                  <ul className="space-y-4">
                    {["Interactive Panels", "Smart Learning Tools", "Students working in labs", "Project-Based Learning Displays", "Science Models"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Creative & Emotional Intelligence */}
            <section>
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
                      <Music className="h-8 w-8 text-[#00b2a9] mb-6" />
                      <h3 className="font-bold text-slate-800 mb-2">Music & Dance</h3>
                      <p className="text-xs text-slate-500">Nurturing imagination and confidence through rhythm and movement.</p>
                    </div>
                    <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
                      <Palette className="h-8 w-8 text-[#00b2a9] mb-6" />
                      <h3 className="font-bold text-slate-800 mb-2">Art & Craft</h3>
                      <p className="text-xs text-slate-500">Exploring creativity through painting and innovative design.</p>
                    </div>
                    <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
                      <History className="h-8 w-8 text-[#00b2a9] mb-6" />
                      <h3 className="font-bold text-slate-800 mb-2">Cultural Stage</h3>
                      <p className="text-xs text-slate-500">Vibrant spaces for drama, speeches, and school celebrations.</p>
                    </div>
                    <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
                      <Star className="h-8 w-8 text-[#00b2a9] mb-6" />
                      <h3 className="font-bold text-slate-800 mb-2">Kids' Zones</h3>
                      <p className="text-xs text-slate-500">Playrooms designed for early childhood emotional development.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                    <Palette className="h-4 w-4" />
                    Personality Development
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-slate-800 mb-8">Taking Care of Creative & Emotional Intelligence</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-10">
                    Creativity plays a vital role in emotional intelligence and personality development. The Air-Conditioned Auditorium serves as a vibrant space for cultural activities that nurture imagination and confidence. These platforms help students develop emotional strength and self-expression.
                  </p>
                  <ul className="space-y-3">
                    {["Music Room", "Dance Room", "Stage & Ramp", "Kids’ Playroom", "Kids’ Activity Room", "Kid-size Podium"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase tracking-widest">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00b2a9]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Fitness and Sporty Side */}
            <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 overflow-hidden relative">
              <div className="absolute bottom-0 left-0 p-12 opacity-5">
                <Trophy className="h-64 w-64 text-[#00b2a9]" />
              </div>
              <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                    <Trophy className="h-4 w-4" />
                    Holistic physical development
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-slate-800 mb-8">Taking Care of Fitness and Sporty Side</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    At Jayotri Academy, physical fitness is an essential part of holistic development. Regular Yoga classes help improve concentration, while active participation in sports builds stamina, teamwork, and leadership skills.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs text-[#00b2a9]">Outdoor Sports</h4>
                    <p className="text-sm text-slate-500">Football, Volleyball, Badminton, Cricket, and Kho-Kho ground for building stamina and unity.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs text-[#00b2a9]">Indoor Sports</h4>
                    <p className="text-sm text-slate-500">Pool, Chess, and Table Tennis to enhance concentration, strategy, and decision-making.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs text-[#00b2a9]">Fun Fitness</h4>
                    <p className="text-sm text-slate-500">Hula Hoop, Lemon & Spoon Race, Sack Jump, and Teamwork Challenges for younger learners.</p>
                  </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {["Playground", "Badminton", "Kho-Kho", "Volleyball", "Cricket", "Football"].map((sport) => (
                    <div key={sport} className="py-4 px-6 bg-white border border-slate-100 rounded-2xl text-center text-xs font-bold text-slate-600 uppercase tracking-widest shadow-sm">
                      {sport}
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </section>

        {/* Final Picture Distribution Summary */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Multidimensional Balance</h2>
              <p className="text-white/60">Our campus reflects teamwork, cooperation, discipline, leadership, and unity.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <h4 className="font-bold text-accent uppercase tracking-widest text-xs border-b border-white/10 pb-4">Intellectual Side</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Classrooms</li>
                  <li>Library</li>
                  <li>Reading Corner</li>
                  <li>Kid-size Podium</li>
                  <li>Interactive Panels</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-accent uppercase tracking-widest text-xs border-b border-white/10 pb-4">Inventive & Scientific</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Science Labs</li>
                  <li>Computer Lab</li>
                  <li>Innovation Displays</li>
                  <li>Ancient Univ. Names</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-accent uppercase tracking-widest text-xs border-b border-white/10 pb-4">Creative & Emotional</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Auditorium</li>
                  <li>Music & Dance Rooms</li>
                  <li>Kids Play Room</li>
                  <li>Stage & Swings</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-accent uppercase tracking-widest text-xs border-b border-white/10 pb-4">Fitness & Sporty</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Playground</li>
                  <li>Sports Facilities</li>
                  <li>Gallery & Lobby</li>
                  <li>Tidy Titans System</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

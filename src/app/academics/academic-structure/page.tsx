
'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Star, 
  BookOpen, 
  Layers, 
  School, 
  GraduationCap, 
  Lightbulb, 
  Mic2, 
  Users, 
  UserPlus, 
  Link as LinkIcon, 
  Briefcase, 
  Search, 
  ShieldCheck, 
  Landmark, 
  Trophy,
  ClipboardCheck,
  CheckCircle2
} from 'lucide-react';

export default function AcademicStructurePage() {
  const stages = [
    {
      title: "Foundational Stage",
      classes: "Playgroup to Class 2",
      icon: <Star className="h-6 w-6" />,
      points: [
        "Activity-based learning",
        "Communication-focused development",
        "Foundational literacy and numeracy",
        "Playful and experiential classroom environment",
        "Holistic progress evaluation"
      ],
      description: "Young learners develop confidence, curiosity, and independence from the very beginning."
    },
    {
      title: "Preparatory Stage",
      classes: "Classes 3 to 5",
      icon: <BookOpen className="h-6 w-6" />,
      points: [
        "Concept-based learning",
        "Reading and literacy development",
        "Project-based activities",
        "Skill-building programs",
        "Experiential learning opportunities"
      ],
      description: "Students begin to develop analytical thinking and independent learning habits."
    },
    {
      title: "Middle Stage",
      classes: "Classes 6 to 8",
      icon: <Layers className="h-6 w-6" />,
      points: [
        "Financial Literacy Programs",
        "Aptitude & Kaushal Bodh",
        "AI Integration with Computers",
        "Communication Development Programs",
        "Science Lab Exposure"
      ],
      description: "This stage focuses on developing reasoning, creativity, and problem-solving skills."
    },
    {
      title: "Secondary & Senior Secondary Stage",
      classes: "Classes 9 to 12",
      icon: <School className="h-6 w-6" />,
      points: [
        "Strong academic foundation",
        "Weekly academic assessments",
        "Career guidance & counselling",
        "Communication and leadership development",
        "Project-based academic work"
      ],
      description: "Students are guided to develop confidence, clarity, and career readiness."
    }
  ];

  const innovations = [
    {
      title: "1. Communication Period",
      icon: <Mic2 className="h-5 w-5" />,
      description: "A dedicated daily Communication Period encourages students to speak, present ideas, and participate in discussions. This regular practice builds confidence, improves fluency, and develops strong public speaking skills from an early stage."
    },
    {
      title: "2. Literacy Circle",
      icon: <Users className="h-5 w-5" />,
      description: "Literacy Circle brings students together for reading, discussion, and sharing of ideas. It helps develop comprehension skills, enrich vocabulary, and cultivate a genuine love for books and literature."
    },
    {
      title: "3. BREW – Book Reading Every Week",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Through BREW, students read books every week, developing consistency and curiosity. This initiative strengthens imagination, independent thinking, and builds lifelong reading habits."
    },
    {
      title: "4. Budding Buddy",
      icon: <UserPlus className="h-5 w-5" />,
      description: "Students who complete books become Budding Buddies and visit other classes to recommend or narrate interesting parts of stories. This promotes peer learning, leadership skills, and inspires others to read."
    },
    {
      title: "5. Reading Chain",
      icon: <LinkIcon className="h-5 w-5" />,
      description: "Each time a student finishes a book, a new link is added to their Reading Chain displayed on the bulletin board. As chains grow longer, students feel motivated and proud of their reading journey."
    },
    {
      title: "6. Project-Based Learning",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Students explore real-life topics through projects, research, and presentations. This hands-on approach develops creativity, teamwork, and practical understanding beyond textbooks."
    },
    {
      title: "7. Experiential Learning Approach",
      icon: <Search className="h-5 w-5" />,
      description: "Learning through activities, demonstrations, and real-world examples helps students understand concepts deeply. This approach makes learning meaningful, engaging, and long-lasting."
    },
    {
      title: "8. Citizenship Program",
      icon: <ShieldCheck className="h-5 w-5" />,
      description: "The Citizenship Program instills discipline, empathy, responsibility, and social awareness. Students learn values and develop qualities required to become responsible citizens."
    },
    {
      title: "9. Ancient University Block Naming",
      icon: <Landmark className="h-5 w-5" />,
      description: "Each school block is named after ancient Indian universities like Nalanda and Takshashila. This creates pride in India’s rich educational heritage and inspires students to value knowledge and learning."
    },
    {
      title: "10. Tidy Titans Cleanliness Grading System",
      icon: <Trophy className="h-5 w-5" />,
      description: "Through Tidy Titans, classes earn stars for cleanliness, discipline, and organization. This friendly competition promotes healthy habits, responsibility, and teamwork among students."
    }
  ];

  const assessmentPoints = [
    "Holistic progress cards (Foundational classes)",
    "Continuous assessment and feedback",
    "Minimal testing with meaningful evaluation",
    "Skill-based assessment methods",
    "Project and activity-based evaluation",
    "Transparency in Evaluation – Progress files and answer sheets are preserved as evidence and shared with parents during PTM for complete academic transparency"
  ];

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
              Academic Structure
            </h1>
            <p className="text-xl text-[#00b2a9] font-bold uppercase tracking-widest">
              Jayotri Academy, Bharthana
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-slate-600 leading-relaxed">
              At Jayotri Academy, academics go beyond conventional learning. Guided by our vision of <strong>Multidimensional Education</strong>, we nurture communication, character, and clarity, ensuring that every learner develops academically, creatively, and personally. Our academic framework blends strong foundational learning, creative exploration, and real-world application, preparing students for both academic success and life beyond the classroom.
            </p>
          </div>

          {/* Academic Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {stages.map((stage, idx) => (
              <div key={idx} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#00b2a9] shadow-sm">
                    {stage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-slate-800">{stage.title}</h3>
                    <p className="text-sm font-bold text-[#00b2a9] uppercase tracking-widest">{stage.classes}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {stage.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00b2a9] shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 italic border-t pt-4 border-slate-200">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Innovations Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                <Lightbulb className="h-4 w-4" />
                Jayotri Academic Innovations
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Learning Beyond Books, Growth Beyond Marks
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Our innovative academic practices aim to build confident personalities, nurture creativity, strengthen communication, and prepare students for real-life challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovations.map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#00b2a9]/30 transition-colors">
                  <div className="w-10 h-10 bg-[#00b2a9]/10 rounded-xl flex items-center justify-center text-[#00b2a9] mb-6">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Philosophy */}
          <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <ClipboardCheck className="h-10 w-10 text-accent" />
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Comprehensive Assessment System</h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  Jayotri Academy follows a balanced assessment approach that ensures students grow without unnecessary academic pressure, focusing on meaningful evaluation and total transparency.
                </p>
                <div className="space-y-4">
                  {assessmentPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <span className="text-white/90 text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center italic">
                  <p className="text-2xl font-light leading-relaxed text-white/90">
                    "At Jayotri Academy, education is not just about learning lessons — it is about building thinkers, readers, leaders, and responsible citizens ready for the future."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

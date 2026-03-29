'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Globe, 
  Users, 
  Lightbulb, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SchoolProspectusPage() {
  const classroomImg = PlaceHolderImages.find(img => img.id === 'classroom-hero');
  const graduationImg = PlaceHolderImages.find(img => img.id === 'graduation');

  const advantages = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Rigorous CBSE curriculum blended with modern pedagogical tools to ensure top-tier academic performance."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Value-Based Environment",
      description: "A nurturing atmosphere rooted in tradition, focusing on character building and ethical integrity."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Holistic Development",
      description: "Extensive focus on sports, arts, and public speaking to shape well-rounded individuals."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Future-Ready Skills",
      description: "Emphasis on critical thinking, problem solving, and digital literacy from an early age."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1 bg-[#00b2a9]/10 text-[#00b2a9] text-[10px] font-bold tracking-[0.2em] mb-6 rounded-sm uppercase">
              Official Guide 2025-26
            </span>
            <h1 className="font-headline text-5xl md:text-7xl text-slate-800 font-bold mb-6">
              School Prospectus
            </h1>
            <p className="text-xl text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
              "Your comprehensive guide to excellence, tradition, and a brighter future at Jayotri Academy."
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#00b2a9] text-white hover:bg-[#00968f] font-bold uppercase tracking-widest text-xs px-8 h-14">
                <Download className="mr-2 h-4 w-4" /> Download Digital PDF
              </Button>
              <Button variant="outline" size="lg" className="border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-xs px-8 h-14">
                Request Physical Copy
              </Button>
            </div>
          </div>
        </section>

        {/* The Jayotri Advantage */}
        <section className="py-24 max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-slate-800 mb-4">The Jayotri Advantage</h2>
            <div className="w-24 h-1 bg-[#00b2a9] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#00b2a9]/10 rounded-xl flex items-center justify-center text-[#00b2a9] mb-6 group-hover:bg-[#00b2a9] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* A Glimpse Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                  A Glimpse into Our World of Learning
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Our prospectus detail the multidimensional journey of a student at Jayotri Academy. From the sprawling 20-acre green campus to the advanced science laboratories and the interactive classrooms, every element is designed to foster enlightenment.
                  </p>
                  <p>
                    We believe in minimal testing and maximal exploration. Our programs are designed to nurture natural curiosity, allowing students to discover their unique potential through project-based learning and creative expression.
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "CBSE Affiliated Curriculum",
                    "Expert Faculty Mentors",
                    "State-of-the-Art Labs",
                    "Extensive Sports Facilities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#00b2a9]" />
                      <span className="font-bold text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  {classroomImg && (
                    <Image
                      src={classroomImg.imageUrl}
                      alt="Modern Classroom"
                      fill
                      className="object-cover"
                      data-ai-hint="classroom study"
                    />
                  )}
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                  {graduationImg && (
                    <Image
                      src={graduationImg.imageUrl}
                      alt="Student Success"
                      fill
                      className="object-cover"
                      data-ai-hint="students success"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prospectus Highlights Table */}
        <section className="py-24 max-w-screen-xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText className="h-64 w-64" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">What's Inside</h2>
                <div className="space-y-4">
                  {[
                    "The Principal's Vision for the Future",
                    "Detailed Curricular Framework for all Grades",
                    "Co-Curricular & Club Activity Details",
                    "Campus Facilities & Safety Infrastructure",
                    "Admission Process & Eligibility Guidelines",
                    "Student Support & Counseling Services",
                    "Parent-Teacher Partnership Model"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-b border-white/10 pb-4">
                      <span className="text-accent font-bold">0{i+1}</span>
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <BookOpen className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Choosing the right school is a defining decision. Beyond the prospectus, we invite you to experience Jayotri Academy firsthand through a campus tour or a personal counseling session.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-accent text-primary hover:bg-white font-bold uppercase tracking-widest text-xs h-12">
                    Schedule a Campus Visit
                  </Button>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-widest text-xs h-12">
                    Talk to Admissions
                  </Button>
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

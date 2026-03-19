'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Bus, 
  Users, 
  Stethoscope, 
  Monitor, 
  BookOpen, 
  Beaker, 
  GraduationCap, 
  Trophy, 
  Leaf, 
  Lightbulb, 
  Map, 
  Calculator, 
  ShieldCheck 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SchoolFacilitiesPage() {
  const facilities = [
    {
      id: "transport",
      icon: <Bus className="h-5 w-5" />,
      title: "School Transport Facilities",
      content: "The school has a fleet of many buses and vans at its own disposal. The buses pick up students from different areas of the city and nearby areas. Each bus has a GPRS system to track location, and drivers are provided with cell phones for urgent contact. Students are expected to be at their stop 10 minutes prior to arrival."
    },
    {
      id: "assemblies",
      icon: <Users className="h-5 w-5" />,
      title: "Interactive Assemblies",
      content: "Students are divided into four Houses (Gandhi, Azad, Bose & Patel). Each House conducts assemblies, giving students opportunities to showcase talents, express opinions, and read news. House Masters ensure every child gets a chance to take the stage."
    },
    {
      id: "health",
      icon: <Stethoscope className="h-5 w-5" />,
      title: "Health Services",
      content: "Jayotri Academy has a Sick room with first aid facilities and an experienced doctor on call for emergencies. Regular check-up camps are organized on campus. Parents' peace of mind regarding their child's health and wellbeing is our priority."
    },
    {
      id: "computer",
      icon: <Monitor className="h-5 w-5" />,
      title: "Computer Laboratories",
      content: "We feature two computer laboratories with over fifty systems. Computers in the CBSE lab are upgraded with appropriate software to support students of classes XI and XII in their technical learning journey."
    },
    {
      id: "library",
      icon: <BookOpen className="h-5 w-5" />,
      title: "Library",
      content: "A tranquil environment with illustrated dictionaries, science series like India Today, and classic/modern literature in Hindi and English. We subscribe to numerous journals to keep students updated on global events and career avenues."
    },
    {
      id: "science",
      icon: <Beaker className="h-5 w-5" />,
      title: "Science Laboratories",
      content: "Separate, well-equipped labs for Physics, Chemistry, and Biology allow students ample time and equipment to perform experiments individually per CBSE guidelines under the guidance of experienced teachers."
    },
    {
      id: "special-ed",
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Special Education",
      content: "An integral part of our educational enterprise, focusing on identifying and aiding children with unusual needs. We aim to enlarge our capacity to serve the educational needs of all children through regular and special programs."
    },
    {
      id: "sports",
      icon: <Trophy className="h-5 w-5" />,
      title: "Sports Facilities",
      content: "Includes three lush green grounds and a special pre-primary playground. Major games like Cricket, Badminton, Kho-Kho, and Handball are played, along with indoor games, Yoga, adventure camps, and study tours."
    },
    {
      id: "eco-club",
      icon: <Leaf className="h-5 w-5" />,
      title: "Eco Club (Green Mark's Society)",
      content: "Ambassadors pledge to work in environment-friendly manners, including using paper bags, steel lunch boxes, water management, saving electricity, and maintaining a herbal garden."
    },
    {
      id: "science-club",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Science Club",
      content: "Focused on 'learning by doing', the club allows students to work on their own ideas with full freedom, moving beyond the formal curriculum to encourage self-expression and independent research."
    },
    {
      id: "social-science",
      icon: <Map className="h-5 w-5" />,
      title: "Social Science Laboratory",
      content: "Equipped with topographical maps, globes, 2-D models, and charts. This lab helps lessen the monotony of subjects and helps students critically engage with society through projects and experiments."
    },
    {
      id: "math",
      icon: <Calculator className="h-5 w-5" />,
      title: "Math Laboratory",
      content: "Established in 2015, the lab facilitates 'learning by doing'. Students create bar graphs, pie charts, and statistical tables using various geometrical models and instruments to enhance their practical understanding."
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
              School Facilities
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Nurturing Holistic Development
            </p>
          </div>
        </section>

        {/* Facilities List Section */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {facilities.map((facility) => (
              <AccordionItem 
                key={facility.id} 
                value={facility.id}
                className="border rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9]">
                      {facility.icon}
                    </div>
                    <span className="font-headline text-xl font-bold text-slate-800">{facility.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-lg pb-6 pt-2">
                  {facility.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-20 bg-slate-50 border-t">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="h-4 w-4" />
                  Data Protection
                </div>
                <h2 className="font-headline text-3xl font-bold text-slate-800">Privacy Policy</h2>
              </div>
              <div className="md:w-2/3 space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Your privacy is very important to us. We have developed this Policy for you to understand how we collect, use, and disclose personal information.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#00b2a9]/20 flex items-center justify-center text-[#00b2a9] shrink-0 mt-0.5">•</div>
                    Purposes identified at collection.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#00b2a9]/20 flex items-center justify-center text-[#00b2a9] shrink-0 mt-0.5">•</div>
                    Retained only as long as necessary.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#00b2a9]/20 flex items-center justify-center text-[#00b2a9] shrink-0 mt-0.5">•</div>
                    Protected by security safeguards.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#00b2a9]/20 flex items-center justify-center text-[#00b2a9] shrink-0 mt-0.5">•</div>
                    Confidentiality is maintained.
                  </li>
                </ul>
                <p className="pt-6 border-t font-medium text-slate-800 italic">
                  "At Jayotri Academy, we are committed to providing multidimensional education that strengthens communication, builds character, and nurtures clarity of thought."
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

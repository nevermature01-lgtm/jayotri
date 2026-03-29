'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Search, 
  Printer, 
  Download, 
  Filter, 
  FileText,
  ChevronRight,
  Info
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Types for syllabus data
interface SyllabusItem {
  subject: string;
  content: string;
}

interface ClassSyllabus {
  id: string;
  className: string;
  data: SyllabusItem[];
}

export default function SyllabusPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Syllabus Data
  const syllabusData: ClassSyllabus[] = [
    {
      id: "class-1",
      className: "Class 1",
      data: [
        { subject: "Maths", content: "Numbers, Addition, Subtraction, Tables" },
        { subject: "Hindi", content: "Basic chapters + writing" },
        { subject: "English", content: "Alphabet, Grammar basics" },
        { subject: "EVS", content: "Body parts, family, environment" },
        { subject: "GK", content: "Basic knowledge" },
        { subject: "Drawing", content: "Shapes, coloring" },
      ]
    },
    {
      id: "class-2",
      className: "Class 2",
      data: [
        { subject: "Maths", content: "Numbers, Addition, Subtraction, Tables" },
        { subject: "Hindi", content: "Basic chapters + writing" },
        { subject: "English", content: "Alphabet, Grammar basics" },
        { subject: "EVS", content: "Body parts, family, environment" },
        { subject: "GK", content: "Basic knowledge" },
        { subject: "Drawing", content: "Shapes, coloring" },
      ]
    },
    {
      id: "class-3",
      className: "Class 3",
      data: [
        { subject: "Maths", content: "Chapters like addition, subtraction, multiplication, division" },
        { subject: "Hindi", content: "Chapters + grammar" },
        { subject: "English", content: "Grammar, comprehension" },
        { subject: "EVS/Science", content: "Plants, animals, environment" },
        { subject: "GK", content: "Units + worksheets" },
        { subject: "Computer", content: "Basics of computer" },
        { subject: "Drawing", content: "Activities (flag, diagrams etc.)" },
      ]
    },
    {
      id: "class-4",
      className: "Class 4",
      data: [
        { subject: "Maths", content: "Chapters like addition, subtraction, multiplication, division" },
        { subject: "Hindi", content: "Chapters + grammar" },
        { subject: "English", content: "Grammar, comprehension" },
        { subject: "EVS/Science", content: "Plants, animals, environment" },
        { subject: "GK", content: "Units + worksheets" },
        { subject: "Computer", content: "Basics of computer" },
        { subject: "Drawing", content: "Activities (flag, diagrams etc.)" },
      ]
    },
    {
      id: "class-5",
      className: "Class 5",
      data: [
        { subject: "Maths", content: "Chapters like addition, subtraction, multiplication, division" },
        { subject: "Hindi", content: "Chapters + grammar" },
        { subject: "English", content: "Grammar, comprehension" },
        { subject: "EVS/Science", content: "Plants, animals, environment" },
        { subject: "GK", content: "Units + worksheets" },
        { subject: "Computer", content: "Basics of computer" },
        { subject: "Drawing", content: "Activities (flag, diagrams etc.)" },
      ]
    },
    {
      id: "class-6",
      className: "Class 6",
      data: [
        { subject: "Maths", content: "Whole numbers, fractions, symmetry" },
        { subject: "Hindi", content: "Chapters + writing" },
        { subject: "GK", content: "Units + notebook work" },
        { subject: "Computer", content: "Basics + MS Word + presentation" },
        { subject: "English", content: "Grammar, comprehension" },
        { subject: "SST", content: "History + Geography chapters" },
        { subject: "Science", content: "Food sources, materials, plants" },
      ]
    },
    {
      id: "class-7",
      className: "Class 7",
      data: [
        { subject: "Maths", content: "Fractions, algebra, geometry" },
        { subject: "Hindi", content: "Chapters + grammar" },
        { subject: "GK", content: "Units + notebook" },
        { subject: "Computer", content: "Advanced basics + presentations" },
        { subject: "English", content: "Grammar + writing + comprehension" },
        { subject: "SST", content: "History + civics + geography" },
        { subject: "Science", content: "Nutrition, heat, acids/bases" },
      ]
    },
    {
      id: "class-8",
      className: "Class 8",
      data: [
        { subject: "Maths", content: "Linear equations, algebra, geometry" },
        { subject: "Hindi", content: "Chapters + writing" },
        { subject: "GK", content: "Units + notebook" },
        { subject: "Computer", content: "Advanced topics + presentations" },
        { subject: "English", content: "Honeydew + grammar" },
        { subject: "SST", content: "History, civics, geography + maps" },
        { subject: "Science", content: "Microorganisms, metals, coal, combustion" },
      ]
    },
  ];

  const categories = ["All", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8"];

  const filteredData = useMemo(() => {
    return syllabusData.filter(section => {
      const matchesTab = activeTab === 'All' || section.className === activeTab;
      const matchesSearch = section.data.some(item => 
        item.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (searchQuery) {
        return matchesSearch;
      }
      return matchesTab;
    });
  }, [activeTab, searchQuery, syllabusData]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pb-20">
        {/* Header Section */}
        <header className="bg-white border-b py-16 md:py-24 text-center px-6 print:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0ab99d]/10 text-[#0ab99d] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 print:hidden">
              <FileText className="h-3.5 w-3.5" />
              Academic Curriculum
            </div>
            <h1 className="font-headline text-4xl md:text-6xl text-slate-900 font-bold mb-4">
              Half Yearly Examination Syllabus 2024-25
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium">
              Jayotri Academy Senior Secondary School, Bharthana
            </p>
            <div className="w-24 h-1 bg-[#0ab99d] mx-auto mt-8 rounded-full print:hidden" />
          </div>
        </header>

        {/* Filter & Search Bar */}
        <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b py-4 shadow-sm print:hidden">
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Class Filter */}
            <div className="w-full lg:w-auto overflow-x-auto no-scrollbar flex items-center gap-2 pb-2 lg:pb-0">
              <Filter className="h-4 w-4 text-slate-400 shrink-0 mr-2 hidden lg:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                    activeTab === cat 
                      ? "bg-[#0ab99d] text-white shadow-lg shadow-[#0ab99d]/20" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Actions & Search */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input 
                  placeholder="Search subject..." 
                  className="pl-10 h-10 border-slate-200 rounded-full bg-slate-50 focus:bg-white transition-colors w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-slate-200 shrink-0"
                onClick={handlePrint}
              >
                <Printer className="h-4 w-4" />
              </Button>
              <Button 
                variant="default" 
                className="bg-[#0ab99d] hover:bg-[#08967f] rounded-full shrink-0"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Syllabus Cards Content */}
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {filteredData.map((section) => (
                <div 
                  key={section.id} 
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                >
                  {/* Card Header */}
                  <div className="bg-[#0ab99d]/5 px-8 py-6 border-b flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0ab99d] rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-headline font-bold text-slate-900">{section.className}</h2>
                        <p className="text-xs font-bold text-[#0ab99d] uppercase tracking-widest">Syllabus 2024–2025</p>
                      </div>
                    </div>
                    <ChevronRight className="h-6 w-6 text-slate-300 hidden sm:block" />
                  </div>

                  {/* Table Section */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left min-w-[600px]">
                      <thead>
                        <tr className="bg-[#0ab99d] text-white">
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest w-1/4">Subject</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Syllabus Content</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.data.map((item, idx) => (
                          <tr 
                            key={idx} 
                            className={cn(
                              "border-t border-slate-50 transition-colors hover:bg-slate-50/50",
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/20"
                            )}
                          >
                            <td className="px-8 py-5">
                              <span className="text-sm font-bold text-slate-800">{item.subject}</span>
                            </td>
                            <td className="px-8 py-5">
                              <span className="text-sm text-slate-600 leading-relaxed font-medium">
                                {item.content}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 bg-slate-50/50 border-t flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest px-8">
                    <Info className="h-3.5 w-3.5" />
                    Prepared by Jayotri Academy
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Search className="h-12 w-12 text-slate-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800">No syllabus found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or class filters.</p>
              <Button 
                variant="outline" 
                className="mt-6 rounded-full"
                onClick={() => {setActiveTab('All'); setSearchQuery('');}}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-screen-xl mx-auto px-6 mt-12 print:hidden">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0ab99d]/20 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-headline font-bold mb-2">Need a printed copy?</h3>
                <p className="text-slate-400 max-w-md">Download the complete examination syllabus in PDF format or print it directly from your browser.</p>
              </div>
              <div className="flex gap-4">
                <Button 
                  onClick={handlePrint}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-widest text-[10px] px-8 h-12 rounded-full"
                >
                  <Printer className="mr-2 h-4 w-4" />
                  Print Page
                </Button>
                <Button className="bg-[#0ab99d] text-white hover:bg-[#08967f] font-bold uppercase tracking-widest text-[10px] px-8 h-12 rounded-full shadow-xl">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center py-8 border-t bg-white">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            Prepared by Jayotri Academy
          </p>
        </footer>
      </main>

      <Footer />

      <style jsx global>{`
        @media print {
          nav, footer, .print-hidden {
            display: none !important;
          }
          body {
            background: white !important;
            padding: 0 !important;
          }
          .max-w-screen-xl {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .shadow-xl, .shadow-sm {
            box-shadow: none !important;
          }
          .rounded-3xl {
            border-radius: 0 !important;
          }
          .border {
            border: 1px solid #e2e8f0 !important;
          }
          .bg-slate-50 {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}

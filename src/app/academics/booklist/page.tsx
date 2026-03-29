'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Search, 
  FileText, 
  ChevronRight, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Types for our data structure
interface Book {
  no: number;
  subject: string;
  bookName: string;
  notebooks: string;
  important?: boolean;
}

interface ClassData {
  id: string;
  className: string;
  books: Book[];
}

export default function BooklistPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Hardcoded Data
  const bookListData: ClassData[] = [
    {
      id: "class-1",
      className: "Class 1",
      books: [
        { no: 1, subject: "Hindi", bookName: "Rimjhim", notebooks: "2 copy 5 line" },
        { no: 2, subject: "Hindi Grammar", bookName: "Kiran Hindi Vyakaran", notebooks: "" },
        { no: 3, subject: "English", bookName: "Celebrate", notebooks: "2 copy 4 line" },
        { no: 4, subject: "English Grammar", bookName: "New Grammar Magic", notebooks: "" },
        { no: 5, subject: "Maths", bookName: "Tip Top Toe / Targeting Mathematics", notebooks: "2 copy square", important: true },
        { no: 6, subject: "EVS", bookName: "Nature Window", notebooks: "1 copy 4 line" },
        { no: 7, subject: "M.V", bookName: "Value Education", notebooks: "" },
        { no: 8, subject: "Art", bookName: "Drawing Book", notebooks: "Drawing notebook" },
        { no: 9, subject: "Cursive Writing", bookName: "Cursive Practice", notebooks: "" },
      ]
    },
    {
      id: "class-2",
      className: "Class 2",
      books: [
        { no: 1, subject: "Hindi", bookName: "रिमझिम", notebooks: "2 copy 5 line" },
        { no: 2, subject: "Hindi Grammar", bookName: "किरण हिंदी व्याकरण", notebooks: "" },
        { no: 3, subject: "English", bookName: "Celebrate", notebooks: "2 copy 4 line" },
        { no: 4, subject: "English Grammar", bookName: "New Grammar Magic", notebooks: "" },
        { no: 5, subject: "Maths", bookName: "Targeting Mathematics", notebooks: "2 copy square", important: true },
        { no: 6, subject: "EVS", bookName: "Nature Window", notebooks: "1 copy 4 line" },
        { no: 7, subject: "GK", bookName: "Superstars", notebooks: "" },
      ]
    },
    {
      id: "class-3-4",
      className: "Class 3–4",
      books: [
        { no: 1, subject: "Hindi", bookName: "रिमझिम", notebooks: "As per requirement" },
        { no: 2, subject: "Hindi Grammar", bookName: "किरण हिंदी व्याकरण", notebooks: "" },
        { no: 3, subject: "English", bookName: "Celebrate", notebooks: "As per requirement" },
        { no: 4, subject: "English Grammar", bookName: "New Grammar Magic", notebooks: "" },
        { no: 5, subject: "Maths", bookName: "Targeting Mathematics", notebooks: "As per requirement", important: true },
        { no: 6, subject: "EVS", bookName: "Nature Window", notebooks: "" },
      ]
    },
    {
      id: "class-5",
      className: "Class 5",
      books: [
        { no: 1, subject: "Hindi", bookName: "रिमझिम", notebooks: "As per requirement" },
        { no: 2, subject: "Hindi Grammar", bookName: "किरण हिंदी व्याकरण", notebooks: "" },
        { no: 3, subject: "English", bookName: "Celebrate", notebooks: "" },
        { no: 4, subject: "English Grammar", bookName: "New Grammar Magic", notebooks: "" },
        { no: 5, subject: "Maths", bookName: "Targeting Mathematics", notebooks: "", important: true },
        { no: 6, subject: "EVS", bookName: "World Around Me", notebooks: "" },
      ]
    },
    {
      id: "class-6-8",
      className: "Class 6–8",
      books: [
        { no: 1, subject: "Hindi", bookName: "वसंत (NCERT)", notebooks: "1 copy single line" },
        { no: 2, subject: "Hindi Grammar", bookName: "शुद्ध हिंदी व्याकरण", notebooks: "" },
        { no: 3, subject: "English", bookName: "Honeysuckle / Honeycomb / It So Happened", notebooks: "1 copy single line" },
        { no: 4, subject: "English Grammar", bookName: "Syntax", notebooks: "" },
        { no: 5, subject: "Maths", bookName: "Manjeet Singh (Mathematics)", notebooks: "Long notebook", important: true },
        { no: 6, subject: "Sanskrit", bookName: "Sanskrit Vedika", notebooks: "" },
        { no: 7, subject: "Science", bookName: "New Lakhmir Singh Science", notebooks: "" },
        { no: 8, subject: "Computer", bookName: "AI & Python Book", notebooks: "" },
      ]
    },
    {
      id: "class-9-10",
      className: "Class 9–10",
      books: [
        { no: 1, subject: "Hindi", bookName: "NCERT Kritika / Kshitiz", notebooks: "Single line register" },
        { no: 2, subject: "English", bookName: "Beehive / Moments / First Flight", notebooks: "Single line register" },
        { no: 3, subject: "English Grammar", bookName: "Applied English Grammar", notebooks: "" },
        { no: 4, subject: "Maths", bookName: "Manjeet Singh / NCERT", notebooks: "Maths register", important: true },
        { no: 5, subject: "SST", bookName: "Democratic Politics + Economics + History + Geography", notebooks: "" },
        { no: 6, subject: "Science", bookName: "NCERT Science", notebooks: "" },
      ]
    },
    {
      id: "class-11-12",
      className: "Class 11–12",
      books: [
        { no: 1, subject: "English", bookName: "Hornbill / Flamingo / Vistas", notebooks: "Register" },
        { no: 2, subject: "Maths", bookName: "R.S. Aggarwal", notebooks: "Register", important: true },
        { no: 3, subject: "Biology", bookName: "NCERT Biology (All in One)", notebooks: "Register" },
        { no: 4, subject: "Physics", bookName: "Nootan Physics by Kumar Mittal", notebooks: "Physics Register", important: true },
        { no: 5, subject: "Chemistry", bookName: "Nootan Chemistry by H.C. Srivastava", notebooks: "Chemistry Register", important: true },
        { no: 6, subject: "Economics", bookName: "V.K. Publication", notebooks: "" },
        { no: 7, subject: "Accounts", bookName: "D.K. Goel", notebooks: "" },
        { no: 8, subject: "Computer", bookName: "Computer Application", notebooks: "" },
      ]
    },
    {
      id: "practical-manuals",
      className: "Practical Manuals",
      books: [
        { no: 1, subject: "Biology", bookName: "Rohit / Ringus / Summer", notebooks: "" },
        { no: 2, subject: "Chemistry", bookName: "Rohit / Ringus / Summer", notebooks: "" },
        { no: 3, subject: "Physics", bookName: "Rohit / Ringus / Summer", notebooks: "" },
      ]
    }
  ];

  const categories = ["All", "Class 1", "Class 2", "Class 3–4", "Class 5", "Class 6–8", "Class 9–10", "Class 11–12"];

  // Filtering Logic
  const filteredData = useMemo(() => {
    return bookListData.filter(section => {
      const matchesTab = activeTab === 'All' || section.className.includes(activeTab) || (activeTab === "Practical Manuals" && section.id === "practical-manuals");
      const matchesSearch = section.books.some(book => 
        book.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (searchQuery) {
        return matchesSearch;
      }
      return matchesTab;
    });
  }, [activeTab, searchQuery, bookListData]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pb-20">
        {/* Header Section */}
        <header className="bg-white border-b py-16 md:py-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0ab99d]/10 text-[#0ab99d] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              Academic Resources
            </div>
            <h1 className="font-headline text-4xl md:text-6xl text-slate-900 font-bold mb-4">
              Book List - Session 2025-26
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Comprehensive list of all text books and notebooks required for Classes 1 to 12.
            </p>
            <div className="w-24 h-1 bg-[#0ab99d] mx-auto mt-8 rounded-full" />
          </div>
        </header>

        {/* Filter & Search Bar */}
        <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b py-4 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Class Filter - Horizontal Scroll on Mobile */}
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

            {/* Search Bar */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input 
                placeholder="Search subject or book..." 
                className="pl-10 h-10 border-slate-200 rounded-full bg-slate-50 focus:bg-white transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Book List Cards Content */}
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {filteredData.map((section) => (
                <div key={section.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in-up">
                  {/* Card Header */}
                  <div className="bg-slate-50/50 px-8 py-6 border-b flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0ab99d] rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-headline font-bold text-slate-900">{section.className}</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Session 2025–2026</p>
                      </div>
                    </div>
                    <ChevronRight className="h-6 w-6 text-slate-300 hidden sm:block" />
                  </div>

                  {/* Table Section - Scrollable on Mobile */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-50/50">
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 w-20">No.</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Subject</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Name of Books</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Notebooks / Copies</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.books.map((book, idx) => (
                          <tr 
                            key={idx} 
                            className={cn(
                              "border-t border-slate-50 transition-colors hover:bg-slate-50/50",
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/20",
                              book.important && "bg-yellow-50/40"
                            )}
                          >
                            <td className="px-8 py-4 text-sm font-bold text-slate-400">{book.no}</td>
                            <td className="px-8 py-4">
                              <span className="text-sm font-bold text-slate-800">{book.subject}</span>
                            </td>
                            <td className="px-8 py-4">
                              <span className={cn(
                                "text-sm text-slate-600 font-medium",
                                book.important && "text-[#0ab99d]"
                              )}>
                                {book.bookName}
                              </span>
                            </td>
                            <td className="px-8 py-4">
                              <span className="text-sm text-slate-500 italic">
                                {book.notebooks || "—"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Card Footer Tips */}
                  <div className="p-6 bg-slate-50/30 border-t flex flex-wrap gap-4 items-center text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0ab99d]" />
                      Latest Edition Books
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0ab99d]" />
                      NCERT Compliant
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Search className="h-12 w-12 text-slate-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800">No books found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or category filters.</p>
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
        <section className="max-w-screen-xl mx-auto px-6 mt-12">
          <div className="bg-[#0ab99d] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-headline font-bold mb-2">Need a Physical Copy?</h3>
                <p className="text-white/80 max-w-md">Download the complete book list in PDF format or visit our school office for the printed version.</p>
              </div>
              <Button size="lg" className="bg-white text-[#0ab99d] hover:bg-slate-100 font-bold uppercase tracking-widest text-[10px] px-8 h-12 rounded-full shadow-xl">
                Download PDF
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

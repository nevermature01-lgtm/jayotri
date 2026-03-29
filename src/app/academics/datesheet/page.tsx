'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CalendarDays, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DatesheetPage() {
  const datesheetImage = "/ACADEMICS/DATESHEET/DATE-SHEET-ANUUAL-EXAM-2024-25-1-scaled-1-600x892.webp";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#0ab99d]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#0ab99d]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0ab99d]/10 text-[#0ab99d] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <CalendarDays className="h-3.5 w-3.5" />
              Examinations
            </div>
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Datesheet
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Annual Examination 2024-25
            </p>
            <div className="w-24 h-1 bg-[#0ab99d] mx-auto mt-8 rounded-full" />
          </div>
        </section>

        {/* Datesheet Image Display Section */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden relative group">
            <div className="relative w-full aspect-[600/892]">
              <Image
                src={datesheetImage}
                alt="Annual Exam Datesheet 2024-25"
                fill
                className="object-contain p-4 md:p-8"
                priority
              />
            </div>
            
            {/* Overlay Actions on Hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Click to expand or download</p>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-800">Save for Reference</h3>
              <p className="text-sm text-slate-500 max-w-md">Download the full-resolution datesheet to keep track of your examination schedule.</p>
            </div>
            <Button size="lg" className="bg-[#0ab99d] text-white hover:bg-[#08967f] font-bold uppercase tracking-widest text-xs px-10 h-14 rounded-full shadow-xl flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Datesheet (PDF)
            </Button>
          </div>
        </section>

        {/* Important Instructions Section */}
        <section className="py-20 bg-slate-50 border-t">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0ab99d]" />
                  Reporting Time
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Students must report to the examination hall at least 15 minutes before the commencement of the exam.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0ab99d]" />
                  Uniform & ID
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Proper school uniform and ID cards are mandatory for all students appearing in the examinations.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0ab99d]" />
                  Stationery
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Students must bring their own required stationery. Borrowing items inside the exam hall is strictly prohibited.
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

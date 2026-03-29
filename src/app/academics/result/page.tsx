'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Award, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResultPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pb-20">
        {/* Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100 print:py-8">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#0ab99d]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#0ab99d]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6 print:hidden">
              <div className="w-20 h-20 bg-[#0ab99d]/10 rounded-full flex items-center justify-center">
                <Award className="h-10 w-10 text-[#0ab99d]" />
              </div>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Examination Results
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Academic Excellence at Jayotri Academy
            </p>
            <div className="w-24 h-1 bg-[#0ab99d] mx-auto mt-8 rounded-full print:hidden" />
          </div>
        </section>

        {/* Actions Bar */}
        <section className="max-w-screen-xl mx-auto px-6 py-8 print:hidden">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              onClick={handlePrint}
              variant="outline" 
              className="rounded-full border-[#0ab99d] text-[#0ab99d] hover:bg-[#0ab99d]/5 font-bold uppercase tracking-widest text-[10px] px-8 h-12"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print Results
            </Button>
            <Button className="bg-[#0ab99d] text-white hover:bg-[#08967f] rounded-full font-bold uppercase tracking-widest text-[10px] px-8 h-12 shadow-lg shadow-[#0ab99d]/20">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </section>

        {/* Result Image Section */}
        <section className="max-w-5xl mx-auto px-6 print:px-0">
          <div className="relative w-full bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden print:shadow-none print:border-none print:rounded-none">
            <Image
              src="/ACADEMICS/RESULT/RESULT-.webp"
              alt="Examination Results"
              width={1200}
              height={1600}
              className="w-full h-auto block"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </section>

        {/* Closing Note */}
        <section className="max-w-2xl mx-auto px-6 mt-16 text-center print:mt-8">
          <p className="text-slate-500 italic text-lg">
            "We congratulate all our students for their hard work and dedication. Achievement is the result of preparation, hard work, and learning from failure."
          </p>
          <div className="mt-8">
            <p className="text-slate-900 font-headline text-2xl font-bold">Principal – Jayotri Academy</p>
          </div>
        </section>
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
          main {
            padding-bottom: 0 !important;
          }
          .shadow-2xl {
            box-shadow: none !important;
          }
          .rounded-3xl {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, Printer, CalendarDays, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ExamSchedule {
  class: string;
  dates: {
    [key: string]: string;
  };
}

export default function DatesheetPage() {
  const examDates = [
    "07/03/2025",
    "08/03/2025",
    "10/03/2025",
    "12/03/2025",
    "17/03/2025",
    "18/03/2025",
    "20/03/2025"
  ];

  const scheduleData: ExamSchedule[] = [
    { class: "Class I", dates: { "07/03/2025": "G.K", "08/03/2025": "Drawing", "10/03/2025": "EVS", "12/03/2025": "English", "17/03/2025": "Hindi", "18/03/2025": "Math", "20/03/2025": "—" } },
    { class: "Class II", dates: { "07/03/2025": "G.K", "08/03/2025": "Drawing", "10/03/2025": "Computer", "12/03/2025": "Math", "17/03/2025": "EVS", "18/03/2025": "English", "20/03/2025": "Hindi" } },
    { class: "Class III", dates: { "07/03/2025": "Computer", "08/03/2025": "Drawing/G.K", "10/03/2025": "Hindi", "12/03/2025": "Social Studies", "17/03/2025": "English", "18/03/2025": "Math", "20/03/2025": "Science" } },
    { class: "Class IV", dates: { "07/03/2025": "Computer", "08/03/2025": "Drawing/G.K", "10/03/2025": "Hindi", "12/03/2025": "Social Studies", "17/03/2025": "Science", "18/03/2025": "Math", "20/03/2025": "English" } },
    { class: "Class V", dates: { "07/03/2025": "Computer", "08/03/2025": "Drawing/G.K", "10/03/2025": "Hindi", "12/03/2025": "Social Studies", "17/03/2025": "English", "18/03/2025": "Math", "20/03/2025": "Science" } },
    { class: "Class VI", dates: { "07/03/2025": "Sanskrit", "08/03/2025": "Computer/G.K", "10/03/2025": "Hindi", "12/03/2025": "Math", "17/03/2025": "Science", "18/03/2025": "English", "20/03/2025": "Social Studies" } },
    { class: "Class VII", dates: { "07/03/2025": "Sanskrit", "08/03/2025": "Computer/G.K", "10/03/2025": "Hindi", "12/03/2025": "Math", "17/03/2025": "English", "18/03/2025": "Social Studies", "20/03/2025": "Science" } },
    { class: "Class VIII", dates: { "07/03/2025": "Sanskrit", "08/03/2025": "Computer/G.K", "10/03/2025": "Hindi", "12/03/2025": "Science", "17/03/2025": "Social Studies", "18/03/2025": "Math", "20/03/2025": "English" } },
    { class: "Class IX", dates: { "07/03/2025": "Computer", "08/03/2025": "Hindi", "10/03/2025": "English", "12/03/2025": "Social Studies", "17/03/2025": "Math", "18/03/2025": "Science", "20/03/2025": "—" } },
    { class: "Class XI", dates: { "07/03/2025": "English", "08/03/2025": "P.E/Computer Sci", "10/03/2025": "Chem/Accountancy", "12/03/2025": "Phys/Bus Studies", "17/03/2025": "Math/Bio/Eco", "18/03/2025": "—", "20/03/2025": "—" } },
  ];

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
            <div className="flex justify-center mb-6 print:hidden">
              <div className="w-20 h-20 bg-[#0ab99d]/10 rounded-full flex items-center justify-center">
                <CalendarDays className="h-10 w-10 text-[#0ab99d]" />
              </div>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold mb-4 tracking-tight">
              Annual Examination Date Sheet 2024-25
            </h1>
            <p className="text-[#0ab99d] text-xl md:text-2xl font-bold uppercase tracking-widest">
              Jayotri Academy, Bharthana (Etawah)
            </p>
            <div className="w-24 h-1 bg-[#0ab99d] mx-auto mt-8 rounded-full print:hidden" />
          </div>
        </header>

        <section className="max-w-screen-2xl mx-auto px-6 -mt-10 print:mt-0">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-end mb-6 print:hidden">
            <Button 
              onClick={handlePrint}
              variant="outline" 
              className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50 font-bold uppercase tracking-widest text-[10px] h-11 rounded-full px-6 shadow-sm"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print Schedule
            </Button>
            <Button className="bg-[#0ab99d] text-white hover:bg-[#08967f] font-bold uppercase tracking-widest text-[10px] h-11 rounded-full px-8 shadow-lg shadow-[#0ab99d]/20">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left min-w-[1000px]">
                <thead>
                  <tr className="bg-[#0ab99d] text-white">
                    <th className="px-6 py-6 font-bold uppercase tracking-widest text-xs border-r border-white/10 sticky left-0 z-10 bg-[#0ab99d]">
                      Class
                    </th>
                    {examDates.map((date) => (
                      <th key={date} className="px-6 py-6 font-bold uppercase tracking-widest text-xs text-center border-r border-white/10 last:border-r-0">
                        {date}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {scheduleData.map((row, idx) => (
                    <tr 
                      key={row.class} 
                      className={cn(
                        "border-b border-slate-50 transition-colors hover:bg-slate-50/50",
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                      )}
                    >
                      <td className="px-6 py-5 font-bold text-slate-900 border-r border-slate-100 sticky left-0 z-10 bg-inherit whitespace-nowrap">
                        {row.class}
                      </td>
                      {examDates.map((date) => (
                        <td key={date} className="px-6 py-5 text-sm font-medium text-center border-r border-slate-100 last:border-r-0 italic whitespace-nowrap">
                          <span className={cn(
                            row.dates[date] === "—" ? "text-slate-300" : "text-slate-600"
                          )}>
                            {row.dates[date]}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-slate-50 border-t flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-[#0ab99d]">
                <Clock className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-widest">
                  Note: Students must arrive 15 minutes before exam time
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Authenticated By</p>
                <p className="text-slate-900 font-headline text-2xl font-bold">Principal – Jayotri Academy</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-start gap-3 p-6 bg-amber-50 rounded-2xl border border-amber-100 print:hidden">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900 text-sm">Important Instructions</h4>
              <p className="text-xs text-amber-800 leading-relaxed">
                Proper school uniform and ID cards are mandatory. Borrowing stationery is not permitted in the exam hall. Please check with your class teacher for specific subject-wise requirements.
              </p>
            </div>
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
          .max-w-screen-2xl {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .shadow-2xl {
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


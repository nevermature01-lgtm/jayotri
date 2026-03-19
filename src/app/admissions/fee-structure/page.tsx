'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info } from 'lucide-react';

export default function FeeStructurePage() {
  const fees = [
    { class: "PG to UKG", registration: "300 /-", admission: "3500 /-", annual: "2500 /-", composite: "1200 × 12 = 14,400 /-" },
    { class: "I to II", registration: "300 /-", admission: "3500 /-", annual: "2500 /-", composite: "1350 × 12 = 16,200 /-" },
    { class: "III to V", registration: "300 /-", admission: "3500 /-", annual: "2500 /-", composite: "1450 × 12 = 17,400 /-" },
    { class: "VI to VIII", registration: "300 /-", admission: "3500 /-", annual: "2500 /-", composite: "1550 × 12 = 18,600 /-" },
    { class: "IX to X", registration: "300 /-", admission: "3500 /-", annual: "3500 /-", composite: "1850 × 12 = 22,200 /-" },
    { class: "XI to XII", registration: "300 /-", admission: "3500 /-", annual: "4000 /-", composite: "2200 × 12 = 26,400 /-" },
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
              Fee Structure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Session 2025–26
            </p>
          </div>
        </section>

        {/* Fee Table Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm mb-12">
            <Table>
              <TableHeader className="bg-[#FCF9F4]">
                <TableRow>
                  <TableHead className="font-bold text-slate-800">Class</TableHead>
                  <TableHead className="font-bold text-slate-800">Registration Fee (One Time)</TableHead>
                  <TableHead className="font-bold text-slate-800">Admission Fee (One Time)</TableHead>
                  <TableHead className="font-bold text-slate-800">Annual Fee (Yearly)</TableHead>
                  <TableHead className="font-bold text-slate-800">Composite Fee (Monthly)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fees.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.class}</TableCell>
                    <TableCell>{row.registration}</TableCell>
                    <TableCell>{row.admission}</TableCell>
                    <TableCell>{row.annual}</TableCell>
                    <TableCell className="font-bold text-[#00b2a9]">{row.composite}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="bg-[#FCF9F4] p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-6 text-[#00b2a9]">
              <Info className="h-6 w-6" />
              <h2 className="text-xl font-bold">Important Notes</h2>
            </div>
            
            <p className="font-bold text-slate-800 mb-6 border-b pb-4">Note: No admission fee for girl child (PG to XII).</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-bold text-slate-700">1. Fee shall be deposited quarterly:</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex justify-between border-b pb-1"><span>By April 7:</span> <span className="font-medium">April, May, June</span></li>
                  <li className="flex justify-between border-b pb-1"><span>By July 7:</span> <span className="font-medium">July, August, September</span></li>
                  <li className="flex justify-between border-b pb-1"><span>By October 7:</span> <span className="font-medium">October, November, December</span></li>
                  <li className="flex justify-between border-b pb-1"><span>By January 7:</span> <span className="font-medium">January, February, March</span></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <li><span className="font-bold text-slate-800">2.</span> Monthly tuition fee shall be deposited quarterly by 7th of the month. If fee is not deposited before 7th, the student will be considered defaulter.</li>
                  <li><span className="font-bold text-slate-800">3.</span> Rs.300/- per month will be charged as fine if student is defaulter.</li>
                  <li><span className="font-bold text-slate-800">4.</span> The school does not bear responsibility of sending reminders. Date of payment is pre-stipulated and not liable to change.</li>
                  <li><span className="font-bold text-slate-800">5.</span> Bus fee will be charged for 11 months.</li>
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

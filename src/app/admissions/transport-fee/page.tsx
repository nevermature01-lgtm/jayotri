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
import { Bus } from 'lucide-react';

export default function TransportFeePage() {
  const transportData = [
    { sno: 1, place: "BHARTHANA", fee: "600" },
    { sno: 2, place: "BAKEWAR", fee: "850" },
    { sno: 3, place: "LAKHANA", fee: "950" },
    { sno: 4, place: "USRAHAR", fee: "1050" },
    { sno: 5, place: "KUDARKOT", fee: "1050" },
    { sno: 6, place: "BHARTIYA KOTHI", fee: "950" },
    { sno: 7, place: "GARWANA", fee: "950" },
    { sno: 8, place: "MOHAMDABAD", fee: "1050" },
    { sno: 9, place: "BHULAIPUR", fee: "1050" },
    { sno: 10, place: "KHITAURA", fee: "950" },
    { sno: 11, place: "BAIBAHA", fee: "950" },
    { sno: 12, place: "SAMAHON", fee: "950" },
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
              Transport Fee
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Session 2025–26
            </p>
          </div>
        </section>

        {/* Table Section */}
        <section className="py-20 max-w-2xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 text-[#00b2a9] justify-center">
            <Bus className="h-6 w-6" />
            <h2 className="text-2xl font-headline font-bold uppercase tracking-widest">Transport Routes</h2>
          </div>

          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-20 font-bold text-slate-800 text-center">S.NO</TableHead>
                  <TableHead className="font-bold text-slate-800">PLACE</TableHead>
                  <TableHead className="font-bold text-slate-800 text-right">FEE OF MONTH</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transportData.map((row) => (
                  <TableRow key={row.sno} className="hover:bg-slate-50/50">
                    <TableCell className="text-center text-slate-500">{row.sno}</TableCell>
                    <TableCell className="font-medium text-slate-700">{row.place}</TableCell>
                    <TableCell className="text-right font-bold text-[#00b2a9]">{row.fee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-12 p-6 bg-[#FCF9F4] rounded-xl border border-slate-100 text-sm text-slate-500 text-center italic">
            "Transport fees are charged for 11 months of the academic session. Please contact the school office for GPRS tracking and bus route details."
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

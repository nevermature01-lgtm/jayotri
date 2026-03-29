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
import { Users, Star } from 'lucide-react';

export default function PTAPage() {
  const members = [
    { sno: 1, name: "Neeta Porwal", designation: "President" },
    { sno: 2, name: "Yogendra Nath Mishra", designation: "Secretary" },
    { sno: 3, name: "Salit Tripathi", designation: "Teacher Representative (Senior Section)" },
    { sno: 4, name: "Kehar Singh Rajpoot", designation: "Teacher Representative (Senior Section)" },
    { sno: 5, name: "Puneet Yadav", designation: "Teacher Representative (Secondary Section)" },
    { sno: 6, name: "Pradeep Singh Bhadauriya", designation: "Teacher Representative (Middle Section)" },
    { sno: 7, name: "Sheela Mishra", designation: "Teacher Representative (Primary Section)" },
    { sno: 8, name: "Gaurav Porwal", designation: "Parent Representative" },
    { sno: 9, name: "Abhinay Porwal", designation: "Parent Representative" },
    { sno: 10, name: "Dr. Pradeep Yadav", designation: "Parent Representative" },
    { sno: 11, name: "Ankit Porwal", designation: "Parent Representative" },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="h-4 w-4 fill-[#00b2a9]" />
              The School
            </div>
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Parents Teachers Association
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Welcome to Jayotri Academy
            </p>
          </div>
        </section>

        {/* Members Table Section */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 text-[#00b2a9] justify-center">
            <Users className="h-8 w-8" />
            <h2 className="text-3xl font-headline font-bold text-slate-800">Members of Parents Teachers’ Association</h2>
          </div>

          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-20 font-bold text-slate-800 text-center">S. No</TableHead>
                  <TableHead className="font-bold text-slate-800">Name</TableHead>
                  <TableHead className="font-bold text-slate-800">Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.sno} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="text-center text-slate-500 font-medium">{member.sno}</TableCell>
                    <TableCell className="font-bold text-slate-700">{member.name}</TableCell>
                    <TableCell className="text-[#00b2a9] font-medium">{member.designation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-12 p-8 bg-[#FCF9F4] rounded-2xl border border-slate-100 text-slate-600 leading-relaxed italic text-center">
            "The Parents Teachers Association at Jayotri Academy serves as a vital bridge between home and school, ensuring a collaborative environment for our students' growth and success."
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

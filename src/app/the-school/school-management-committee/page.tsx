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
import { Users, ShieldCheck, Landmark } from 'lucide-react';

export default function SchoolManagementCommitteePage() {
  const members = [
    { 
      sno: 1, 
      name: "Mrs. Nita Porwal", 
      relation: "Shri Rajeev Porwal", 
      address: "11 Katra Abu Mummad, Bharthana – Etawah", 
      profile: "President", 
      occupation: "Social Worker" 
    },
    { 
      sno: 2, 
      name: "Dr. Nitin Porwal", 
      relation: "Shri Manoj Porwal", 
      address: "11 Katra Abu Mummad, Bharthana – Etawah", 
      profile: "Secretary", 
      occupation: "Business" 
    },
    { 
      sno: 3, 
      name: "Mrs. Vartika Gupta", 
      relation: "Dr. Nitin Porwal", 
      address: "11 Katra Abu Mummad, Bharthana – Etawah", 
      profile: "Treasurer", 
      occupation: "Business" 
    },
    { 
      sno: 4, 
      name: "Shri Rajeev Porwal", 
      relation: "Shri Jay Gopal Porwal", 
      address: "11 Katra Abu Mummad, Bharthana – Etawah", 
      profile: "Nominated Member", 
      occupation: "Service" 
    },
    { 
      sno: 5, 
      name: "Mrs. Malika Porwal", 
      relation: "Shri Manoj Porwal", 
      address: "11 Katra Abu Mummad, Bharthana – Etawah", 
      profile: "Nominated Member", 
      occupation: "Service" 
    },
    { 
      sno: 6, 
      name: "Shri Subhash Chandra Porwal", 
      relation: "Shri Kailash Chandra Porwal", 
      address: "184 Vidhi Chandra – Auriya", 
      profile: "Nominated Member", 
      occupation: "Service" 
    },
    { 
      sno: 7, 
      name: "Shri Shurabh Porwal", 
      relation: "Shri Santosh Kumar Porwal", 
      address: "77 Gurhayi – Auriya", 
      profile: "Nominated Member", 
      occupation: "Service" 
    },
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
              <Landmark className="h-4 w-4" />
              The School
            </div>
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              School Management Committee
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Welcome to Jayotri Academy
            </p>
          </div>
        </section>

        {/* Institution Detail Header */}
        <section className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h2 className="text-[#00b2a9] font-bold text-lg md:text-xl uppercase tracking-widest mb-2">
              SHRI JAY GOPAL GAYTRI DEVI LOK KALYAN TRUST
            </h2>
            <p className="text-slate-400 font-medium text-sm">BHARTHANA – ETAWAH</p>
            <div className="w-24 h-1 bg-slate-100 mx-auto mt-6 rounded-full" />
          </div>
        </section>

        {/* Members Table Section */}
        <section className="py-12 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-3 text-[#00b2a9]">
              <Users className="h-8 w-8" />
              <h3 className="text-3xl font-headline font-bold text-slate-800">Committee Members</h3>
            </div>
            <div className="bg-[#FCF9F4] px-6 py-2 rounded-full border border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Session 2024–25</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-20 font-bold text-slate-800 text-center">S. No</TableHead>
                  <TableHead className="font-bold text-slate-800">Name</TableHead>
                  <TableHead className="font-bold text-slate-800">Father / Spouse Name</TableHead>
                  <TableHead className="font-bold text-slate-800">Address</TableHead>
                  <TableHead className="font-bold text-slate-800">Profile</TableHead>
                  <TableHead className="font-bold text-slate-800">Occupation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.sno} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="text-center text-slate-500 font-medium">{member.sno}</TableCell>
                    <TableCell className="font-bold text-slate-900">{member.name}</TableCell>
                    <TableCell className="text-slate-600 text-sm">{member.relation}</TableCell>
                    <TableCell className="text-slate-500 text-xs max-w-[200px] leading-relaxed">{member.address}</TableCell>
                    <TableCell className="text-[#00b2a9] font-bold text-sm">{member.profile}</TableCell>
                    <TableCell className="text-slate-600 font-medium text-sm">{member.occupation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-10 w-10 text-accent shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">Institutional Integrity</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                  The School Management Committee ensures the highest standards of governance, focusing on student welfare and institutional growth under the guidance of our esteemed trust members.
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

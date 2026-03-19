'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  FileText, 
  ClipboardCheck, 
  Users, 
  Calendar, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function AdmissionProcedurePage() {
  const documents = [
    "Proof of Date of Birth",
    "Latest Progress Report of the Student",
    "Transfer Certificate",
    "Aadhaar Card of Parents & Child"
  ];

  const points = [
    "Discipline, performance, and regularity are considered.",
    "Interview and counselling are compulsory for selected students.",
    "Alternate stream may be allotted in Class XI.",
    "Admission is subject to management discretion.",
    "Seat cancels if admission is not taken within 7 days.",
    "No admission in Classes X and XII.",
    "Refund-related cases are not subject to litigation.",
    "Fees and rules may be revised by the school.",
    "Free admission for eligible RTE students."
  ];

  const eligibility = [
    { class: "Play Group", age: "2 Years 6 Months" },
    { class: "LKG", age: "3 Years 6 Months" },
    { class: "UKG", age: "4 Years 6 Months" },
    { class: "Class I", age: "5 Years 6 Months" },
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
              Admission Procedure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Join the Jayotri Academy Community
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Core Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-slate max-w-none">
                <div className="flex items-center gap-3 mb-6 text-[#00b2a9]">
                  <FileText className="h-8 w-8" />
                  <h2 className="text-3xl font-headline font-bold m-0">General Guidelines</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The School Prospectus and Admission Forms are available from the school office during the months of February, March, April, and June for the current year.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
                    <Calendar className="h-6 w-6 text-[#00b2a9] shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800 mb-1">Testing Periods</p>
                      <p className="text-sm text-slate-600">Tests are normally held in February, March, and June.</p>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
                    <AlertCircle className="h-6 w-6 text-red-500 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800 mb-1">Restricted Classes</p>
                      <p className="text-sm text-slate-600">No new admission into Classes X and XII is permitted.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 text-[#00b2a9]">
                  <ClipboardCheck className="h-8 w-8" />
                  <h2 className="text-3xl font-headline font-bold">Required Documents</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-[#FCF9F4] rounded-xl border border-slate-100">
                      <CheckCircle2 className="h-5 w-5 text-[#00b2a9]" />
                      <span className="font-medium text-slate-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 mt-4">
                  <p className="text-sm text-amber-800 leading-relaxed italic">
                    "A student’s name and date of birth recorded in the Transfer Certificate are official and cannot be changed later. No child will be admitted without a Transfer Certificate from the previous school."
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 text-[#00b2a9]">
                  <Info className="h-8 w-8" />
                  <h2 className="text-3xl font-headline font-bold">Important Clauses</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00b2a9] shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">Age Eligibility</h3>
                </div>
                <div className="space-y-6">
                  {eligibility.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-medium">{item.class}</span>
                      <span className="text-accent font-bold">{item.age}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs text-white/60 italic leading-relaxed">
                  * Age is calculated as of the start of the academic session.
                </p>
              </div>

              <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Registration Fee</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A registration fee is payable with the submission of the registration form. This fee is non-refundable and non-adjustable. Payment does not guarantee admission.
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

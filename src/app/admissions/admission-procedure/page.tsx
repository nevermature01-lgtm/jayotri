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
  AlertCircle,
  ShieldCheck,
  Languages,
  Clock,
  Banknote,
  Scale
} from 'lucide-react';

export default function AdmissionProcedurePage() {
  const documents = [
    "Birth Certificate (Copy)",
    "Previous Class Marksheet",
    "Transfer Certificate (Original)",
    "Student’s Aadhaar Card (Copy)",
    "Mother’s Aadhaar Card (Copy)",
    "Father’s Aadhaar Card (Copy)",
    "Passport Size Photographs (Student & Parents)"
  ];

  const rules = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Attendance",
      points: [
        "90% attendance is mandatory for all students.",
        "Regular attendance is essential for academic progress.",
        "Extended absence must be supported with proper documentation."
      ]
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Discipline & Conduct",
      points: [
        "Use of mobile phones or electronic gadgets is strictly prohibited.",
        "Physical violence or misconduct is not permitted.",
        "Damage to school property must be compensated by parents."
      ]
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Leave Policy",
      points: [
        "Written permission must be taken for any leave.",
        "Exam absence requires proper applications and documents."
      ]
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Language Policy",
      points: [
        "The medium of instruction is English.",
        "Communication in English or standard Hindi is encouraged."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#002046]/10 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#002046]/5 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold mb-4">
              Admission Procedure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Fairness, Transparency, and Equal Opportunity
            </p>
          </div>
        </section>

        {/* Admission Overview */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <FileText className="h-4 w-4" />
                Admission Overview
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                A Supportive and Inspiring Environment
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  At Jayotri Academy, the admission process is designed to ensure fairness, transparency, and equal opportunity for every learner. We welcome students into a nurturing environment that promotes Multidimensional Education and holistic development.
                </p>
                <p>
                  Admissions are granted purely on merit and availability of seats. We aim to create a balanced and inclusive learning environment where every child is encouraged to grow with confidence and clarity. The new academic session begins in April.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  Admission Criteria
                </h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="font-bold text-accent mb-2">Foundational Classes (Play Group)</p>
                    <ul className="text-sm space-y-2 text-white/80">
                      <li>• Child should be at least 3 years old as on 31st March.</li>
                      <li>• No formal written test for Play Group.</li>
                      <li>• Informal interaction with parents and child.</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="font-bold text-accent mb-2">Higher Classes</p>
                    <ul className="text-sm space-y-2 text-white/80">
                      <li>• Admission based on availability of seats.</li>
                      <li>• Passed previous class from a recognized school.</li>
                      <li>• Interaction / assessment conducted where required.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <ClipboardCheck className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-headline font-bold text-slate-800">Required Documents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-slate-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 italic">
                Note: Incomplete or incorrect information may lead to cancellation of admission.
              </p>
            </div>
          </div>

          {/* Fee and Guidelines Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
              <h3 className="font-headline text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <Banknote className="h-6 w-6 text-primary" />
                Admission Fee Structure
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="text-slate-600">Registration Fee (Non-refundable)</span>
                  <span className="font-bold text-primary">₹300</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="text-slate-600">Admission Fee</span>
                  <span className="font-bold text-primary">₹3500</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Mode of Payment</p>
                  <div className="flex flex-wrap gap-2">
                    {['Cash', 'Cheque', 'UPI', 'Card'].map(mode => (
                      <span key={mode} className="px-3 py-1 bg-white border rounded-full text-xs font-bold text-slate-600">
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="font-headline text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <Info className="h-6 w-6 text-primary" />
                Important Guidelines
              </h3>
              <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  Admission must be completed within the specified time.
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  If not confirmed within timeline, the seat will be offered to the next candidate.
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  The admission process ensures equal opportunity to all applicants.
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  Not securing a seat does not reflect the caliber of the child.
                </li>
              </ul>
            </div>
          </div>

          {/* School Rules & Expectations */}
          <div className="mb-12">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-800 mb-4">School Rules & Expectations</h2>
              <p className="text-slate-500">Maintaining discipline and academic excellence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rules.map((rule, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    {rule.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{rule.title}</h3>
                  <ul className="space-y-3">
                    {rule.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-sm text-slate-600 flex items-start gap-3">
                        <div className="h-1 w-1 rounded-full bg-accent shrink-0 mt-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#002046] rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Banknote className="h-6 w-6 text-accent" />
                  Fee Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• Fees should be deposited Quarterly or Annually.</li>
                  <li>• Late fee of ₹400 per month will be applicable after due date.</li>
                  <li>• Detailed info should be obtained from school fee counter.</li>
                </ul>
              </div>
              <div className="p-8 bg-accent/20 rounded-3xl border border-accent/30">
                <h3 className="text-xl font-bold text-primary mb-4">Uniform Policy</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Students must attend school in proper school uniform. Students without prescribed uniform may not be permitted to attend classes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-24 bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-headline text-3xl font-bold text-slate-800 mb-6">
              Ready to Join Us?
            </h3>
            <p className="text-lg text-slate-500 mb-10 italic">
              "We look forward to welcoming students into a supportive and inspiring learning environment where they can grow into confident and responsible individuals."
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

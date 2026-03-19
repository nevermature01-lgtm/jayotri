'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  HelpCircle, 
  CalendarCheck, 
  UserMinus, 
  Coins, 
  AlertTriangle 
} from 'lucide-react';

export default function CancellationRefundPolicyPage() {
  const policies = [
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Before Start of Session",
      content: "The total fee deposited will be refunded after deducting 10% of admission fee as processing charges."
    },
    {
      icon: <UserMinus className="h-6 w-6" />,
      title: "After Start (No Attendance)",
      content: "When the student has not attended even for a day, the total fee is refunded minus 10% of admission fee."
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "When Student Attended Class",
      content: "Only tuition fee and science fee (if applicable) will be refunded after charging for the same up to the month last attended."
    }
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Transparent Procedures for Parents
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6 text-[#00b2a9]">
              <HelpCircle className="h-8 w-8" />
              <h2 className="text-3xl font-headline font-bold">Liberal Policy Approach</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Jayotri Academy believes in helping its students and their parents as far as possible and therefore follows a liberal cancellation and refund policy. Under this policy, requests for cancellation of admission shall be lodged by parents in writing addressed to the Principal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {policies.map((policy, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#00b2a9]/30 transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#00b2a9] shadow-sm mb-6">
                  {policy.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-4">{policy.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{policy.content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 bg-[#FCF9F4] rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-6 text-[#00b2a9]">
                <ShieldCheck className="h-6 w-6" />
                <h3 className="text-xl font-bold">Wrongly Deposited Amounts</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <li><span className="font-bold">Refund:</span> Excess deposit, double deposit, or fee deposited but not due will be refunded after a written request and due verification from records.</li>
                <li><span className="font-bold">Adjustment:</span> If parents prefer adjustment in the subsequent quarter, a written request with proof of excess deposit must be submitted.</li>
                <li><span className="font-bold">Other Cases:</span> Any other amount not covered will be considered only upon receipt of a written request to the school office.</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6 text-accent">
                <AlertTriangle className="h-6 w-6" />
                <h3 className="text-xl font-bold">Policy Limitations</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    If the transaction has declined due to any reason after debit of amount from the parent's account, then no refund shall be permissible.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    No refund of convenience fee shall be admissible under any circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

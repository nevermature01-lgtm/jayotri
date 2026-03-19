'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Undo2, 
  FileWarning, 
  ShieldAlert, 
  HandCoins,
  ArrowRight
} from 'lucide-react';

export default function WithdrawalProcedurePage() {
  const steps = [
    {
      icon: <Undo2 className="h-6 w-6" />,
      title: "Notice Period",
      content: "Parents wishing to withdraw their child must inform the Principal in writing with a clear one month's notice."
    },
    {
      icon: <FileWarning className="h-6 w-6" />,
      title: "Absence of Notice",
      content: "In the absence of a written one-month notice, full tuition fees for the ongoing session shall be payable."
    },
    {
      icon: <HandCoins className="h-6 w-6" />,
      title: "Dues Settlement",
      content: "The Transfer Certificate will be issued only after all dues payable to the school have been cleared by the parents."
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
              Withdrawal Procedure
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Policies and Required Steps
            </p>
          </div>
        </section>

        {/* Withdrawal Content */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#00b2a9]/10 rounded-xl flex items-center justify-center text-[#00b2a9] mb-6">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4 p-8 bg-amber-50 rounded-2xl border border-amber-100">
              <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
              <div className="space-y-4">
                <h4 className="font-bold text-amber-900">Non-Refundable Policy</h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  If a parent decides not to send his/her child to the school after depositing the admission and registration fees, no refund shall be admissible and the parent will be liable to pay three months' tuition fees in lieu of notice.
                </p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The registration fee and the admission fee are non-refundable and non-adjustable under any circumstances. Once paid, fees will not be refunded in any case.
                </p>
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-accent" />
                Additional Conditions
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                  Cases pertaining to refund of fees will not be subject to litigation.
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                  Disciplinary action will be taken against students found using unfair means in tests or examinations. Repetition of such offences may lead to withdrawal.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

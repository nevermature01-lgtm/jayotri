"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Inquiry Received",
      description: "Our admissions advisors will contact you shortly.",
    });
    setEmail('');
  };

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-screen-2xl mx-auto px-8 text-center">
        <h2 className="font-headline text-4xl md:text-6xl mb-8">Begin Your Editorial Journey.</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/70 mb-12">
          Our admissions advisors are ready to help you navigate the next chapter of your academic career.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-accent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button className="h-12 bg-accent text-primary px-10 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors">
            Request Info
          </Button>
        </form>
        <div className="mt-8 flex justify-center gap-6">
          <Button variant="ghost" className="text-white hover:bg-white/10 font-bold uppercase tracking-widest text-xs">
            Speak to an Advisor
          </Button>
        </div>
      </div>
    </section>
  );
}

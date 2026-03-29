"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

export default function Navigation() {
  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about-us',
      subItems: [
        { name: 'Our School', href: '/about-us/our-school' },
        { name: 'Vision & Values', href: '/about-us/vision-values' },
        { name: 'Principal Message', href: '/about-us/principal-message' },
        { name: 'Managing Director Message', href: '/about-us/managing-director-message' },
        { name: 'Secretary Message', href: '/about-us/secretary-message' },
        { name: 'Academic Advisor', href: '/about-us/our-academic-advisor' },
        { name: 'Infrastructure', href: '/about-us/infrastructure' },
        { name: 'Facilities', href: '/about-us/school-facilities' },
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      subItems: [
        { name: 'fee Structure', href: '/admissions/fee-structure' },
        { name: 'Admission Procedure', href: '/admissions/admission-procedure' },
        { name: 'Withdrawal Procedure', href: '/admissions/withdrawal-procedure' },
        { name: 'Transport Fee', href: '/admissions/transport-fee' },
        { name: 'Cancellation and Refund Policy', href: '/admissions/cancellation-and-refund-policy' },
        { name: 'School Prospectus', href: '/admissions/school-prospectus' },
        { name: 'School Information', href: '/admissions/school-information' },
        { name: 'Affiliation Letter', href: '/admissions/affiliation-letter' },
      ]
    },
    { 
      name: 'Academics', 
      href: '/academics',
      subItems: [
        { name: 'Booklist', href: '/academics/booklist' },
        { name: 'Datesheet', href: '/academics/datesheet' },
        { name: 'Syllabus', href: '/academics/syllabus' },
        { name: 'Holiday HW', href: '/academics/holiday-homework' },
        { name: 'Result', href: '/academics/result' },
      ]
    },
    { 
      name: 'The School', 
      href: '/the-school',
      subItems: [
        { name: 'Safety Certificates', href: '/the-school/building-safety-certificate' },
        { name: 'Recognition', href: '/the-school/recognition-certificate' },
        { name: 'NOC', href: '/the-school/no-objection-certificate' },
        { name: 'Society Renewal', href: '/the-school/society-renewal-certificate' },
        { name: 'Water & Sanitation', href: '/the-school/safe-water-and-sanitation-certificate' },
        { name: 'Fire Safety', href: '/the-school/fire-safety-certificate' },
        { name: 'Self Clarification', href: '/the-school/self-clarification' },
        { name: 'PTA', href: '/the-school/parents-teachers-association' },
        { name: 'Management', href: '/the-school/school-management-committee' },
      ]
    },
    { 
      name: 'Gallery', 
      href: '/gallery',
      subItems: [
        { name: 'Media', href: '/gallery/media' },
      ]
    },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/20">
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Desktop Logo & Mobile Spacer */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="hidden md:flex items-center">
            <img
              src="/jayotri_logo_upscaled.png"
              alt="Jayotri Academy Logo"
              className="site-logo"
            />
          </Link>
          <div className="md:hidden w-12" /> 
        </div>

        {/* Center Section: Desktop Nav / Mobile Logo */}
        <div className="flex-1 md:flex-[2] flex justify-center items-center">
          <Link href="/" className="md:hidden flex items-center justify-center">
            <img
              src="/jayotri_logo_upscaled.png"
              alt="Jayotri Academy Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav (Centered with Hover Dropdowns) */}
          <div className="hidden md:flex items-center space-x-6 whitespace-nowrap">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="group relative h-20 flex items-center">
                  <button className="flex items-center gap-1.5 text-slate-700 font-headline font-bold hover:text-primary transition-colors text-[13px] uppercase tracking-wider outline-none">
                    {item.name} <ChevronDown className="h-4 w-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Dropdown Menu Container */}
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                    <div className="min-w-[220px] p-2 bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl rounded-xl overflow-hidden">
                      <div className="flex flex-col">
                        {item.subItems.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="w-full text-[11px] font-body font-bold uppercase tracking-widest px-4 py-3 hover:bg-primary/10 hover:text-primary transition-all rounded-lg"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-slate-700 font-headline font-bold hover:text-primary transition-colors text-[13px] uppercase tracking-wider h-20"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Right Section: Desktop Actions & Mobile Menu Trigger */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <Button className="hidden sm:flex bg-[#00b2a9] text-white px-6 font-bold text-[10px] uppercase tracking-[0.2em] rounded-none h-11">
            Apply Now
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-sm hover:bg-white/50 active:scale-95 transition-all duration-200"
                >
                  <Menu className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] overflow-y-auto bg-white/80 backdrop-blur-xl border-l border-white/20">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle>
                    <img
                      src="/jayotri_logo_upscaled.png"
                      alt="Jayotri Academy Logo"
                      className="h-10 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <Accordion type="single" collapsible className="w-full">
                  {navItems.map((item) => (
                    item.subItems ? (
                      <AccordionItem key={item.name} value={item.name} className="border-none">
                        <AccordionTrigger className="text-[13px] font-headline font-bold text-slate-700 uppercase tracking-wider py-4 hover:no-underline">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 pl-4 pt-1 pb-4">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-[11px] font-body font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-[13px] font-headline font-bold text-slate-700 uppercase tracking-wider py-4 block"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </Accordion>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  );
}

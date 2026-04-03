"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
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
        { name: 'Fee Structure', href: '/admissions/fee-structure' },
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
        { name: 'Academic Structure', href: '/academics/academic-structure' },
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
      name: 'Campus Life', 
      href: '/gallery',
      subItems: [
        { name: 'Gallery', href: '/gallery' },
        { name: 'Media', href: '/gallery/media' },
      ]
    },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100">
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
        <div className="flex-1 md:flex-[3] flex justify-center items-center">
          <Link href="/" className="md:hidden flex items-center justify-center">
            <img
              src="/jayotri_logo_upscaled.png"
              alt="Jayotri Academy Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav (Centered with Hover Dropdowns) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4 whitespace-nowrap">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="group relative h-20 flex items-center">
                  <button className="flex items-center gap-1.5 px-3 py-2 text-slate-700 font-headline font-bold hover:text-primary transition-all text-[13px] uppercase tracking-wider outline-none rounded-md hover:bg-slate-50">
                    {item.name} <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Dropdown Menu Container */}
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                    <div className="min-w-[240px] p-2 bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden">
                      <div className="flex flex-col">
                        {item.subItems.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="w-full text-xs font-body font-bold uppercase tracking-widest px-4 py-3 hover:bg-primary/5 hover:text-primary transition-all rounded-lg"
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
                  className="flex items-center px-3 py-2 text-slate-700 font-headline font-bold hover:text-primary hover:bg-slate-50 transition-all text-[13px] uppercase tracking-wider rounded-md h-auto"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Right Section: Mobile Menu Trigger */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-11 w-11 rounded-full bg-slate-100/50 hover:bg-slate-100 active:scale-95 transition-all duration-200"
                >
                  <Menu className="h-6 w-6 text-primary" strokeWidth={2} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[350px] overflow-y-auto bg-white border-l border-slate-100 p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b border-slate-50 flex flex-row items-center justify-between">
                    <SheetTitle>
                      <img
                        src="/jayotri_logo_upscaled.png"
                        alt="Jayotri Academy Logo"
                        className="h-10 w-auto"
                      />
                    </SheetTitle>
                    <SheetClose className="rounded-full p-2 hover:bg-slate-100">
                      <X className="h-5 w-5 text-slate-500" />
                    </SheetClose>
                  </SheetHeader>
                  
                  <div className="flex-1 px-6 py-4 overflow-y-auto">
                    <Accordion type="single" collapsible className="w-full">
                      {navItems.map((item) => (
                        item.subItems ? (
                          <AccordionItem key={item.name} value={item.name} className="border-b border-slate-50">
                            <AccordionTrigger className="text-sm font-headline font-bold text-slate-800 uppercase tracking-widest py-5 hover:no-underline">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-1 pb-4">
                              {item.subItems.map((sub) => (
                                <SheetClose asChild key={sub.name}>
                                  <Link
                                    href={sub.href}
                                    className="text-[11px] font-body font-bold text-slate-500 hover:text-primary transition-all uppercase tracking-[0.15em] py-3 px-4 rounded-lg hover:bg-slate-50"
                                  >
                                    {sub.name}
                                  </Link>
                                </SheetClose>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <div key={item.name} className="border-b border-slate-50">
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="text-sm font-headline font-bold text-slate-800 uppercase tracking-widest py-5 block"
                              >
                                {item.name}
                              </Link>
                            </SheetClose>
                          </div>
                        )
                      ))}
                    </Accordion>
                  </div>

                  <div className="p-6 bg-slate-50 border-t border-slate-100">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-primary text-white font-bold uppercase tracking-widest text-[10px] h-12">
                        <Link href="/admissions/admission-procedure">Apply Now</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  );
}
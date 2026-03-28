"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Menu, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        { name: 'Vision', href: '/about-us/vision' },
        { name: 'Values', href: '/about-us/values' },
        { name: 'Principal Message', href: '/about-us/principal-message' },
        { name: 'Managing Director Message', href: '/about-us/managing-director-message' },
        { name: 'Secretary Message', href: '/about-us/secretary-message' },
        { name: 'Our Academic Advisor', href: '/about-us/our-academic-advisor' },
        { name: 'Infrastructure', href: '/about-us/infrastructure' },
        { name: 'School Facilities', href: '/about-us/school-facilities' },
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
        { name: 'Booklist', href: '/academics/booklist' },
        { name: 'Datesheet', href: '/academics/datesheet' },
        { name: 'Syllabus', href: '/academics/syllabus' },
        { name: 'Holiday Homework', href: '/academics/holiday-homework' },
        { name: 'Result', href: '/academics/result' },
      ]
    },
    { 
      name: 'The School', 
      href: '/the-school',
      subItems: [
        { name: 'Building Safety Certificate', href: '/the-school/building-safety-certificate' },
        { name: 'Recognition Certificate', href: '/the-school/recognition-certificate' },
        { name: 'No Objection Certificate', href: '/the-school/no-objection-certificate' },
        { name: 'Society Renewal Certificate', href: '/the-school/society-renewal-certificate' },
        { name: 'Safe Water & Sanitation Certificate', href: '/the-school/safe-water-and-sanitation-certificate' },
        { name: 'Fire Safety Certificate', href: '/the-school/fire-safety-certificate' },
        { name: 'Self Clarification', href: '/the-school/self-clarification' },
        { name: 'Parents Teachers Association', href: '/the-school/parents-teachers-association' },
        { name: 'School Management Committee', href: '/the-school/school-management-committee' },
      ]
    },
    { 
      name: 'Gallery', 
      href: '/gallery',
      subItems: [
        { name: 'Media', href: '/gallery/media' },
        { name: 'Video Gallery', href: '/gallery/video-gallery' },
      ]
    },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(28,28,25,0.06)] border-b border-black/5">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/jayotri_logo_upscaled.png"
              alt="Jayotri Academy Logo"
              className="site-logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.subItems ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-slate-700 dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors text-xs uppercase tracking-wide outline-none">
                  {item.name} <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="max-h-[70vh] overflow-y-auto w-64 p-2 bg-white/95 backdrop-blur-md">
                  {item.subItems.map((sub) => (
                    <DropdownMenuItem key={sub.name} asChild>
                      <Link href={sub.href} className="w-full text-[10px] uppercase tracking-wide py-2 cursor-pointer">
                        {sub.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors text-xs uppercase tracking-wide"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <button className="text-muted-foreground hover:bg-slate-100/50 p-2 rounded-full transition-all duration-300">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          
          <Button className="hidden sm:flex bg-[#00b2a9] text-white px-6 py-2 rounded-md font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
            Apply Now
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src="/jayotri_logo_upscaled.png"
                    alt="Jayotri Academy Logo"
                    className="site-logo h-8"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[80vh] pr-2">
                <Accordion type="single" collapsible className="w-full">
                  {navItems.map((item) => (
                    item.subItems ? (
                      <AccordionItem key={item.name} value={item.name} className="border-none">
                        <AccordionTrigger className="text-sm font-medium text-slate-700 hover:text-primary transition-colors uppercase tracking-wider py-2">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 pl-4 pt-2 pb-4">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-[11px] font-medium text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
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
                        className="text-sm font-medium text-slate-700 hover:text-primary transition-colors uppercase tracking-wider py-4 block"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </Accordion>
                <div className="pt-6 border-t">
                  <Button className="w-full bg-[#00b2a9] text-white font-bold tracking-wide py-6">
                    Apply Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

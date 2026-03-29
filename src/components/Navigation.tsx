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
        { name: 'Withdrawal', href: '/admissions/withdrawal-procedure' },
        { name: 'Transport Fee', href: '/admissions/transport-fee' },
        { name: 'Refund Policy', href: '/admissions/cancellation-and-refund-policy' },
        { name: 'Prospectus', href: '/admissions/school-prospectus' },
        { name: 'Information', href: '/admissions/school-information' },
        { name: 'Affiliation', href: '/admissions/affiliation-letter' },
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
        { name: 'Video Gallery', href: '/gallery/video-gallery' },
      ]
    },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
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
          {/* Spacer for mobile to balance the right menu trigger, ensuring perfect centering */}
          <div className="md:hidden w-12" /> 
        </div>

        {/* Center Section: Desktop Nav / Mobile Logo */}
        <div className="flex-1 md:flex-[2] flex justify-center items-center">
          {/* Mobile Logo */}
          <Link href="/" className="md:hidden flex items-center justify-center">
            <img
              src="/jayotri_logo_upscaled.png"
              alt="Jayotri Academy Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav (Centered) */}
          <div className="hidden md:flex items-center space-x-6 whitespace-nowrap">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1.5 text-slate-600 font-bold hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em] outline-none h-20">
                    {item.name} <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="min-w-[200px] p-2 bg-white/95 backdrop-blur-md">
                    {item.subItems.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link href={sub.href} className="w-full text-[9px] font-bold uppercase tracking-widest py-2.5 cursor-pointer">
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
                  className="flex items-center text-slate-600 font-bold hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em] h-20"
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

          {/* Mobile Menu Trigger (Right Aligned, Stylish) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:bg-slate-100 active:scale-95 transition-all duration-200"
                >
                  <Menu className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] overflow-y-auto">
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
                        <AccordionTrigger className="text-[11px] font-bold text-slate-700 uppercase tracking-[0.2em] py-4 hover:no-underline">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 pl-4 pt-1 pb-4">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-[10px] font-medium text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
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
                        className="text-[11px] font-bold text-slate-700 uppercase tracking-[0.2em] py-4 block"
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
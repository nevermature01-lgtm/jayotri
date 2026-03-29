"use client";

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <img
                src="/jayotri_logo_upscaled.png"
                alt="Jayotri Academy Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Jayotri Academy is dedicated to nurturing young minds through value-based education, character building, and academic excellence since 2008.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/about-us/our-school" className="hover:text-accent transition-colors">Our School</Link></li>
              <li><Link href="/admissions/admission-procedure" className="hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link href="/academics/result" className="hover:text-accent transition-colors">Examination Result</Link></li>
              <li><Link href="/academics/syllabus" className="hover:text-accent transition-colors">Academic Syllabus</Link></li>
              <li><Link href="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Compliance Links */}
          <div>
            <h4 className="font-headline text-xl font-bold mb-6">Compliance</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/the-school/building-safety-certificate" className="hover:text-accent transition-colors">Safety Certificates</Link></li>
              <li><Link href="/the-school/parents-teachers-association" className="hover:text-accent transition-colors">PTA Members</Link></li>
              <li><Link href="/the-school/school-management-committee" className="hover:text-accent transition-colors">SMC Committee</Link></li>
              <li><Link href="/admissions/fee-structure" className="hover:text-accent transition-colors">Fee Structure</Link></li>
              <li><Link href="/gallery/media" className="hover:text-accent transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-headline text-xl font-bold mb-6">Contact Info</h4>
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <p className="text-sm text-white/70">Bidhuna Road, Bharathana, Dist: Etawah – 206242</p>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <div className="text-sm text-white/70">
                <p>9557558008 (Principal)</p>
                <p>8650332851 (Director)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <p className="text-sm text-white/70">jayotriacademy2015@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <p>© 2025 Jayotri Academy. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

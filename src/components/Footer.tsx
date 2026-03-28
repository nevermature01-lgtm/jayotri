
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'campus-map');

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/jayotri_logo_upscaled.png" 
                alt="Jayotri Academy Logo" 
                width={48} 
                height={48} 
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="font-body text-2xl font-black tracking-widest uppercase inline-block">
                Jayotri Academy
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Nurturing young minds through quality education, character building, and holistic development since 2008. We believe in excellence through tradition and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-accent">About Academy</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about-us/our-school" className="text-white/60 hover:text-accent transition-colors">Our School</Link></li>
              <li><Link href="/about-us/vision" className="text-white/60 hover:text-accent transition-colors">Vision & Mission</Link></li>
              <li><Link href="/about-us/principal-message" className="text-white/60 hover:text-accent transition-colors">Principal's Message</Link></li>
              <li><Link href="/about-us/infrastructure" className="text-white/60 hover:text-accent transition-colors">Infrastructure</Link></li>
              <li><Link href="/about-us/school-facilities" className="text-white/60 hover:text-accent transition-colors">Facilities</Link></li>
            </ul>
          </div>

          {/* Admissions Links */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-accent">Admissions</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/admissions/fee-structure" className="text-white/60 hover:text-accent transition-colors">Fee Structure</Link></li>
              <li><Link href="/admissions/admission-procedure" className="text-white/60 hover:text-accent transition-colors">Admission Procedure</Link></li>
              <li><Link href="/admissions/transport-fee" className="text-white/60 hover:text-accent transition-colors">Transport Fee</Link></li>
              <li><Link href="/admissions/cancellation-and-refund-policy" className="text-white/60 hover:text-accent transition-colors">Refund Policy</Link></li>
              <li><Link href="/admissions/school-information" className="text-white/60 hover:text-accent transition-colors">School Information</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-accent">Contact Us</h5>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <p>Etawah - Bharthana Road,<br />Uttar Pradesh, India</p>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <p>+91 (000) 000-0000</p>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <p>info@jayotriacademy.com</p>
              </div>
            </div>
            {mapImage && (
              <div className="relative w-full h-24 overflow-hidden rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 mt-4 border border-white/10">
                <Image 
                  src={mapImage.imageUrl}
                  alt="Campus Map"
                  fill
                  className="object-cover"
                  data-ai-hint="map"
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <p>© 2024 Jayotri Academy. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/about-us/school-facilities" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

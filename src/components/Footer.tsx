import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'campus-map');

  return (
    <footer className="bg-surface-container-low dark:bg-slate-900 w-full pt-16 pb-8 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <div className="font-headline text-xl font-bold text-primary dark:text-white mb-6">
            Academia Horizon
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Dedicated to the meticulous curation of knowledge and the fostering of academic integrity since 1892.
          </p>
          <div className="flex gap-4">
            <Facebook className="h-5 w-5 text-primary cursor-pointer hover:opacity-70" />
            <Instagram className="h-5 w-5 text-primary cursor-pointer hover:opacity-70" />
            <Twitter className="h-5 w-5 text-primary cursor-pointer hover:opacity-70" />
          </div>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-primary dark:text-white mb-6">Navigation</h5>
          <ul className="space-y-4 text-sm">
            <li><Link href="/admissions" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Admissions</Link></li>
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Campus Map</Link></li>
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Directory</Link></li>
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Employment</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-primary dark:text-white mb-6">Resources</h5>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Library Portal</Link></li>
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Student Handbook</Link></li>
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-primary dark:text-white mb-6">Location</h5>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            1200 University Avenue<br />
            Academic District, Cambridge<br />
            MA 02138, USA
          </p>
          {mapImage && (
            <div className="relative w-full h-32 overflow-hidden rounded shadow-sm opacity-80 group grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-sm text-slate-500">© 2024 Academia Horizon. Excellence in Tradition.</p>
      </div>
    </footer>
  );
}

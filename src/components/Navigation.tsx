import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(28,28,25,0.06)] border-b border-black/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="font-headline text-2xl font-black text-primary dark:text-white tracking-tighter">
          Academia Horizon
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {['Admissions', 'Academics', 'Athletics', 'Arts', 'Student Life', 'Giving'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-slate-700 dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors text-sm uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="text-muted-foreground hover:bg-slate-100/50 p-2 rounded-full transition-all duration-300">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <Button className="bg-primary text-white px-6 py-2 rounded-md font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  const navItems = ['Admissions', 'Academics', 'Athletics', 'Arts', 'Student Life', 'Giving'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(28,28,25,0.06)] border-b border-black/5">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-headline text-xl md:text-2xl font-black text-primary dark:text-white tracking-tighter">
            Academia Horizon
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-slate-700 dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors text-sm uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Actions and Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-6">
          <button className="text-muted-foreground hover:bg-slate-100/50 p-2 rounded-full transition-all duration-300">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          
          <Button className="hidden sm:flex bg-primary text-white px-6 py-2 rounded-md font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
            Apply Now
          </Button>

          {/* Hamburger Menu shifted to the right for mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="font-headline text-2xl font-black text-primary tracking-tighter">
                  Academia Horizon
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-medium text-slate-700 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                ))}
                <div className="pt-6 border-t">
                  <Button className="w-full bg-primary text-white font-bold tracking-wide py-6">
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

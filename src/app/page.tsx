'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { School, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const heroSlides = [
    PlaceHolderImages.find(img => img.id === 'hero-campus'),
    PlaceHolderImages.find(img => img.id === 'student-life'),
    PlaceHolderImages.find(img => img.id === 'research-lab'),
    PlaceHolderImages.find(img => img.id === 'graduation'),
  ].filter(Boolean);

  const studentLifeImg = PlaceHolderImages.find(img => img.id === 'student-life');
  const researchImg = PlaceHolderImages.find(img => img.id === 'research-lab');
  const graduationImg = PlaceHolderImages.find(img => img.id === 'graduation');

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Slider Section */}
        <section className="relative h-[90vh] md:h-[85vh] w-full overflow-hidden">
          <Carousel 
            className="w-full h-full" 
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="h-[90vh] md:h-[85vh]">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="relative h-full w-full">
                  <div className="absolute inset-0 z-0">
                    {slide && (
                      <Image
                        src={slide.imageUrl}
                        alt={slide.description}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        data-ai-hint={slide.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
                      <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 bg-accent text-primary text-[10px] font-bold tracking-[0.2em] mb-6 rounded-sm">
                          ESTABLISHED 1892
                        </span>
                        <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl text-white font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-8 text-balance">
                          {index === 0 && <>The Pursuit of <br className="hidden sm:block"/><span className="italic font-light">Enduring Excellence</span></>}
                          {index === 1 && <>Community & <br className="hidden sm:block"/><span className="italic font-light">Vibrant Growth</span></>}
                          {index === 2 && <>Innovation at <br className="hidden sm:block"/><span className="italic font-light">The Vanguard</span></>}
                          {index === 3 && <>Legacy of <br className="hidden sm:block"/><span className="italic font-light">Global Impact</span></>}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-body max-w-xl mb-10 leading-relaxed">
                          Join a community where tradition meets the vanguard of research. We shape thinkers who rewrite the future of global society.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                          <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-slate-100 font-bold uppercase tracking-widest text-xs px-8 h-14">
                            Discover Programs
                          </Button>
                          <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white backdrop-blur-md hover:bg-white/10 font-bold uppercase tracking-widest text-xs px-8 h-14 shadow-2xl">
                            Visit Campus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-12 right-12 flex gap-4 z-20">
              <CarouselPrevious className="relative left-0 translate-y-0 bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20 hover:text-white" />
              <CarouselNext className="relative right-0 translate-y-0 bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20 hover:text-white" />
            </div>
          </Carousel>
        </section>

        {/* Quick Links / Bento Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured Link */}
              <div className="md:col-span-8 group relative overflow-hidden aspect-[16/9] md:aspect-auto rounded-xl bg-white shadow-[0_12px_40px_rgba(28,28,25,0.06)] min-h-[400px]">
                {studentLifeImg && (
                  <Image
                    src={studentLifeImg.imageUrl}
                    alt={studentLifeImg.description}
                    fill
                    className="absolute inset-0 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint={studentLifeImg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h3 className="font-headline text-3xl md:text-4xl text-white mb-2">Student Life</h3>
                  <p className="text-white/70 max-w-md mb-6 text-sm md:text-base">Beyond the lecture hall, find your community in over 200 student-led organizations.</p>
                  <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore the Campus <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Side Links Stack */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="flex-1 p-8 bg-muted/30 rounded-xl group hover:bg-primary transition-colors duration-500 cursor-pointer">
                  <School className="h-10 w-10 text-primary group-hover:text-accent mb-6 transition-colors" />
                  <h4 className="font-headline text-2xl mb-2 group-hover:text-white">Graduate Studies</h4>
                  <p className="text-muted-foreground group-hover:text-white/70 mb-4">Advanced research opportunities in over 40 disciplines.</p>
                  <Link href="#" className="text-primary font-bold group-hover:text-white flex items-center gap-2">
                    Learn more <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
                <div className="flex-1 p-8 bg-muted/30 rounded-xl group hover:bg-accent transition-colors duration-500 cursor-pointer">
                  <Award className="h-10 w-10 text-primary group-hover:text-primary mb-6 transition-colors" />
                  <h4 className="font-headline text-2xl mb-2 group-hover:text-primary">Financial Aid</h4>
                  <p className="text-muted-foreground group-hover:text-primary/70 mb-4">92% of students receive institutional support.</p>
                  <Link href="#" className="text-primary font-bold group-hover:text-primary flex items-center gap-2">
                    View scholarships <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Announcements */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:after:mb-16">
              <div className="mb-6 md:mb-0">
                <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">Institutional Updates</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Campus Dispatches</h2>
              </div>
              <Button variant="link" className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary rounded-none px-0 pb-1 h-auto">
                View All News <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* News Card 1 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-white relative">
                  {researchImg && (
                    <Image
                      src={researchImg.imageUrl}
                      alt={researchImg.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={researchImg.imageHint}
                    />
                  )}
                </div>
                <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-3">Research</span>
                <h3 className="font-headline text-2xl font-bold mb-4 leading-snug group-hover:text-primary/70 transition-colors">Breakthrough in Neural Engineering Published in Nature</h3>
                <p className="text-muted-foreground line-clamp-3 mb-6">Our Department of Biomedical Sciences has unveiled a new methodology for interface synchronization that could redefine prosthetic mobility.</p>
                <time className="text-xs text-muted-foreground/60 font-medium">October 24, 2024</time>
              </article>
              
              {/* News Card 2 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-white relative">
                  {graduationImg && (
                    <Image
                      src={graduationImg.imageUrl}
                      alt={graduationImg.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={graduationImg.imageHint}
                    />
                  )}
                </div>
                <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-3">Campus News</span>
                <h3 className="font-headline text-2xl font-bold mb-4 leading-snug group-hover:text-primary/70 transition-colors">Global Leaders Convene for Annual Sustainability Summit</h3>
                <p className="text-muted-foreground line-clamp-3 mb-6">Next month, the university will host delegates from 40 nations to discuss the role of higher education in climate resilience.</p>
                <time className="text-xs text-muted-foreground/60 font-medium">October 20, 2024</time>
              </article>

              {/* Announcements Sidebar */}
              <div className="space-y-10">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-bold text-sm tracking-widest uppercase text-primary/70 mb-2">Important Notice</h4>
                  <p className="font-headline text-lg italic leading-tight">Spring 2025 registration is now open for all continuing education students.</p>
                </div>
                <div className="border-l-4 border-muted pl-6">
                  <h4 className="font-bold text-sm tracking-widest uppercase text-muted-foreground mb-2">Upcoming Event</h4>
                  <p className="font-headline text-lg leading-tight text-primary">President's Gala for the Arts — November 12, 7:00 PM</p>
                </div>
                <div className="border-l-4 border-muted pl-6">
                  <h4 className="font-bold text-sm tracking-widest uppercase text-muted-foreground mb-2">Athletics</h4>
                  <p className="font-headline text-lg leading-tight text-primary">Varsity Homecoming: The Annual Rivalry Match kicks off this Saturday.</p>
                </div>
                <Button variant="ghost" className="w-full py-6 text-center border-t border-muted rounded-none font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                  More Announcements
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Brain, 
  Lightbulb, 
  Trophy, 
  Users, 
  History,
  BookOpen,
  School,
  Target,
  CheckCircle2
} from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

export default function Home() {
  const [isPillarsVisible, setIsPillarsVisible] = useState(false);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPillarsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (pillarsRef.current) {
      observer.observe(pillarsRef.current);
    }

    return () => {
      if (pillarsRef.current) {
        observer.unobserve(pillarsRef.current);
      }
    };
  }, []);

  const heroSlides = [
    { 
      desktopUrl: '/7.webp', 
      mobileUrl: '/mob-1.webp', 
      description: 'Jayotri Academy Campus View', 
      imageHint: 'school campus' 
    },
    { 
      desktopUrl: '/14 (1).webp', 
      mobileUrl: '/mob-2.webp', 
      description: 'Excellence in Classroom Learning', 
      imageHint: 'classroom' 
    },
    { 
      desktopUrl: '/37 (1).webp', 
      mobileUrl: '/mob-3.webp', 
      description: 'Shaping the Thinkers of Tomorrow', 
      imageHint: 'students' 
    },
  ];

  const featureCards = [
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "Taking care of confident I & we side",
      description: "We build confident individuals and strong collaborators by nurturing self-belief, communication, and teamwork for lifelong success.",
      isDark: false,
    },
    {
      icon: <Brain className="h-8 w-8 text-[#00b2a9]" />,
      title: "Taking care of 'intellectual' side",
      description: "We strengthen the intellectual side by developing critical thinking, creativity, and problem-solving skills for lifelong learning and academic excellence.",
      isDark: true,
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Taking care of the 'inventive' side",
      description: "We nurture the inventive side by encouraging creativity, innovation, and original thinking to turn ideas into impactful solutions.",
      isDark: false,
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#00b2a9]" />,
      title: "Taking care of the 'sporty' side",
      description: "We support the sporty side by promoting physical fitness, discipline, teamwork, and a healthy competitive spirit.",
      isDark: true,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Slider Section */}
        <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
          <Carousel 
            className="w-full h-full" 
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="h-[70vh] md:h-[85vh]">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="relative h-full w-full">
                  <div className="absolute inset-0 z-0">
                    {/* Desktop Hero Image */}
                    <Image
                      src={slide.desktopUrl}
                      alt={slide.description}
                      fill
                      className="hidden md:block object-cover"
                      priority={index === 0}
                      unoptimized={true}
                    />
                    {/* Mobile Hero Image */}
                    <Image
                      src={slide.mobileUrl}
                      alt={slide.description}
                      fill
                      className="block md:hidden object-cover"
                      priority={index === 0}
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
                      <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 bg-accent text-primary text-[10px] font-bold tracking-[0.2em] mb-6 rounded-sm">
                          SINCE 2008
                        </span>
                        <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl text-white font-black tracking-tighter lineage-[0.95] md:leading-[0.9] mb-8 text-balance">
                          Jayotri Academy
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-body max-w-xl mb-10 leading-relaxed">
                          Jayotri Academy is an English medium school believing in the all-round development of a child with in a coeducational, compassionate welcoming and broadminded community. It is based on the central board of secondary Education (CBSE) curriculum.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                          <Button asChild size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-slate-100 font-bold uppercase tracking-widest text-xs px-8 h-14">
                            <Link href="/about-us/our-school">
                              Explore more
                            </Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white backdrop-blur-xl hover:bg-white/20 font-bold uppercase tracking-widest text-xs px-8 h-14 shadow-2xl transition-all duration-300">
                            <Link href="/contact-us">
                              Contact us
                            </Link>
                          </Button>
                        </div>
                        
                        {/* Navigation Buttons placed below CTA */}
                        <div className="flex justify-end gap-4 mt-8 max-w-xl">
                          <CarouselPrevious className="relative left-0 translate-y-0 bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20 hover:text-white" />
                          <CarouselNext className="relative right-0 translate-y-0 bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20 hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* Pillars Section */}
        <section ref={pillarsRef} className="relative py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-4 relative z-30">
              {featureCards.map((card, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "flex flex-col items-center text-center p-8 md:p-12 transition-all duration-1000 shadow-xl hover:-translate-y-2 hover:shadow-2xl",
                    isPillarsVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-24",
                    card.isDark 
                      ? "bg-[#00b2a9] text-white" 
                      : "bg-white text-slate-800"
                  )}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-8",
                    card.isDark ? "bg-white" : "bg-[#00b2a9]"
                  )}>
                    {card.icon}
                  </div>
                  <h3 className={cn(
                    "font-headline text-2xl font-bold mb-6 leading-tight",
                    card.isDark ? "text-white" : "text-[#00b2a9]"
                  )}>
                    {card.title}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed",
                    card.isDark ? "text-white/90" : "text-slate-500"
                  )}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#00b2a9] uppercase mb-4 block">WHO WE ARE</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                  Building strong foundations and shaping future-ready learners.
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                  We are an educational academy dedicated to nurturing young minds through strong primary instruction and advanced higher education. Our focus is on building academic excellence, critical thinking, and well-rounded development in a supportive learning environment.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Strong Primary Instruction",
                    "Advanced Higher Education Programs",
                    "Experienced & Dedicated Faculty"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9]">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-xs px-8 h-12 transition-all duration-300">
                  Discover More
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/7.webp"
                    alt="Our Campus Heritage"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full -z-10 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip Section */}
        <section className="bg-[#1c1c1c] py-16">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              {/* Stat 1 */}
              <div className="flex items-center justify-center gap-8 md:border-r border-white/10 px-4">
                <Users className="h-14 w-14 text-[#00b2a9]" />
                <div>
                  <div className="text-white text-5xl font-headline font-bold">500+</div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Students Active</div>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex items-center justify-center gap-8 md:border-r border-white/10 px-4">
                <GraduationCap className="h-14 w-14 text-[#00b2a9]" />
                <div>
                  <div className="text-white text-5xl font-headline font-bold">30+</div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Experienced Teachers</div>
                </div>
              </div>
              {/* Stat 3 */}
              <div className="flex items-center justify-center gap-8 px-4">
                <History className="h-14 w-14 text-[#00b2a9]" />
                <div>
                  <div className="text-white text-5xl font-headline font-bold">15+</div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Years of Legacy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Education Section */}
        <section className="py-24 bg-white">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Shaping Young Minds Through Quality Education
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                At Jayotri Academy, we provide strong primary instruction and higher education through structured classroom learning, experienced faculty, and a supportive academic environment focused on student success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="flex items-start gap-6 p-8 rounded-xl bg-[#f0f9f9]">
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#00b2a9] flex items-center justify-center text-white shadow-lg">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Experienced & Dedicated Faculty</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    Our qualified teachers provide clear guidance, individual attention, and strong academic support at every stage of learning.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-6 p-8 rounded-xl bg-[#f0f9f9]">
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#00b2a9] flex items-center justify-center text-white shadow-lg">
                  <School className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Structured Classroom Learning</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    We follow a well-planned curriculum that builds strong fundamentals, discipline, and conceptual clarity through offline classes.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-6 p-8 rounded-xl bg-[#f0f9f9]">
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#00b2a9] flex items-center justify-center text-white shadow-lg">
                  <Brain className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Focus on Conceptual Understanding</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    We emphasize deep understanding, critical thinking, and problem-solving skills instead of rote learning.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-start gap-6 p-8 rounded-xl bg-[#f0f9f9]">
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#00b2a9] flex items-center justify-center text-white shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Student Growth & Career Guidance</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    We support students with continuous assessment, mentoring, and guidance to prepare them for higher education and future goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />

        {/* Academy Promotion Section */}
        <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <Image
            src="/28.webp"
            alt="Academy Classroom"
            fill
            className="object-cover"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl">
                <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl text-white font-bold leading-[1.15] mb-4">
                  Join Our Academy and Shape a Successful Future
                </h2>
                <p className="text-base md:text-lg text-white/90 font-body max-w-xl mb-8 leading-relaxed">
                  At Jayotri Academy, we provide quality primary instruction and higher education through expert guidance, structured classroom learning, and a supportive academic environment.
                </p>
                <Button size="lg" className="bg-[#00b2a9] text-white hover:bg-[#00968f] font-bold uppercase tracking-widest text-[11px] px-8 h-12 rounded-none transition-all">
                  Explore Our Programs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

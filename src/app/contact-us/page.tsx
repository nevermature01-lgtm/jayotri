'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactUsPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formsubmit.co/ajax/jayotriacademy2015@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...values,
          _subject: `New Contact Form Submission: ${values.subject}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out to Jayotri Academy. We will get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong while sending your message. Please try again later.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Simple Banner Section */}
        <section className="relative py-24 md:py-32 bg-[#FCF9F4] overflow-hidden border-b border-slate-100">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#00b2a9]/20 rounded-full hidden lg:block" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#00b2a9]/10 rounded-full hidden lg:block" />
          
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="font-headline text-5xl md:text-6xl text-slate-800 font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-slate-500 font-medium italic">
              Welcome to Jayotri Academy
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-20 max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b2a9]/10 rounded-full text-[#00b2a9] text-xs font-bold uppercase tracking-widest mb-6">
                  <MessageSquare className="h-4 w-4" />
                  GET IN TOUCH
                </div>
                <h3 className="font-headline text-4xl font-bold text-slate-800 mb-6 leading-tight">Get in touch and let us know how we can help.</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                  Reach out to us for admissions, academic enquiries, or any other information. Our team is here to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Address */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9] shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Address</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      Bidhuna Road, Bharathana <br />
                      District : Etawah – 206242
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9] shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Email Address</h4>
                    <p className="text-slate-500 text-sm">jayotriacademy2015@gmail.com</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex gap-6 sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#00b2a9]/10 flex items-center justify-center text-[#00b2a9] shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">Phone Number</h4>
                    <ul className="text-slate-500 space-y-2 text-sm">
                      <li className="flex justify-between items-center border-b border-slate-50 pb-1 gap-8">
                        <span className="font-bold">Principal:</span> 
                        <span className="font-medium text-slate-700">9557558008</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-slate-50 pb-1 gap-8">
                        <span className="font-bold">Director:</span> 
                        <span className="font-medium text-slate-700">8650332851</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-slate-50 pb-1 gap-8">
                        <span className="font-bold">Account Office:</span> 
                        <span className="font-medium text-slate-700">9837221611</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-slate-50 pb-1 gap-8">
                        <span className="font-bold">Transport:</span> 
                        <span className="font-medium text-slate-700">9536438621</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 text-lg mb-6 uppercase tracking-widest text-xs">Follow our social network</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="h-5 w-5" />, href: "#" },
                    { icon: <Instagram className="h-5 w-5" />, href: "#" },
                    { icon: <Twitter className="h-5 w-5" />, href: "#" },
                    { icon: <Youtube className="h-5 w-5" />, href: "#" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      className="w-12 h-12 rounded-full bg-[#FCF9F4] border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#00b2a9] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-[#FCF9F4] p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b2a9]/5 rounded-full -mr-16 -mt-16" />
              
              <div className="relative z-10 mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
                  SEND US MESSAGE
                </div>
                <h3 className="font-headline text-3xl font-bold text-slate-800 leading-tight">Don't hesitate to contact us for more information.</h3>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#00b2a9]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter company name (optional)" className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#00b2a9]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter phone number" className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#00b2a9]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email address" className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#00b2a9]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this about?" className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#00b2a9]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="bg-white border-slate-200 min-h-[150px] rounded-2xl resize-none focus:ring-[#00b2a9]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-[#00b2a9] text-white hover:bg-[#009a92] h-14 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#00b2a9]/20 transition-all duration-300">
                    <Send className="h-4 w-4 mr-2" />
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

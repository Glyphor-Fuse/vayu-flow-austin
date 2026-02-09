import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveFlowMap from '@/components/LiveFlowMap';
import SanctuarySpaces from '@/components/SanctuarySpaces';
import Pricing from '@/components/Pricing';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Real-time Status / Trust Section */}
        <section className="py-12 border-y border-border/50 bg-white/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-sm font-bold tracking-widest uppercase">As Featured In</span>
              <div className="text-xl font-display font-semibold italic">Austin Monthly</div>
              <div className="text-xl font-display font-semibold italic">Tribeza</div>
              <div className="text-xl font-display font-semibold italic">CultureMap</div>
              <div className="text-xl font-display font-semibold italic">The Austinot</div>
            </div>
          </div>
        </section>

        <LiveFlowMap />
        
        <SanctuarySpaces />

        {/* Philosophy / Story Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
             <img src="/images/texture-rock.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-display mb-8">Austin is our studio. <br /><span className="italic text-accent">The sky is our ceiling.</span></h2>
              <p className="text-xl leading-relaxed text-primary-foreground/80 mb-10">
                We believe that yoga shouldn't be confined to four walls. By moving our practice into the city's most vibrant natural and architectural spaces, we invite you to reconnect with Austin and yourself in a single breath.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                Learn Our Story
              </Button>
            </div>
          </div>
        </section>

        <Pricing />

        {/* Newsletter / Community */}
        <section className="py-24 bg-accent/5">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-4xl font-display text-primary mb-4">Stay in the Flow</h2>
            <p className="text-muted-foreground mb-8">Be the first to know about new secret pop-up locations and early booking windows.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white border border-border px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <Button className="rounded-full px-8 bg-primary text-white">Join the Circle</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="text-2xl font-display font-bold tracking-tight text-primary mb-6 block">
                VAYU <span className="text-accent italic font-medium">FLOW</span>
              </a>
              <p className="text-muted-foreground max-w-sm mb-6">
                Redefining the urban yoga experience. Mobile pop-ups throughout Austin, TX.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-primary cursor-pointer hover:text-accent" />
                <Facebook className="w-5 h-5 text-primary cursor-pointer hover:text-accent" />
                <Twitter className="w-5 h-5 text-primary cursor-pointer hover:text-accent" />
                <Mail className="w-5 h-5 text-primary cursor-pointer hover:text-accent" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Schedule</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Private Booking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Vayu Flow</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <span>© 2024 Vayu Flow Austin. Built for the community.</span>
            <span>Made with breath in ATX</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-landscape.png" 
          alt="Austin Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase mb-6">
              Mobile Yoga • Austin, TX
            </span>
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-8 text-primary">
              Your Sanctuary, <br />
              <span className="italic">Anywhere.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Vayu Flow brings premium yoga experiences to Austin's most iconic hidden gems. From rooftop sunrises to creekside flows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90">
                Explore Schedule
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg border-primary/20 hover:bg-secondary">
                Our Philosophy
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Status Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:block absolute right-12 bottom-24 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-xs shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-white">Currently Flowing</span>
        </div>
        <h3 className="text-2xl font-display text-white mb-2">Lady Bird Lake</h3>
        <p className="text-sm text-white/70 mb-6">Sunrise Vinyasa with Elena. <br />4 spots remaining for 8:00 AM.</p>
        <Button variant="secondary" size="sm" className="w-full rounded-full bg-white text-primary">
          Join Last Minute
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
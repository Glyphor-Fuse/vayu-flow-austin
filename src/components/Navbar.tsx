import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-display font-bold tracking-tight text-primary">
            VAYU <span className="text-accent italic font-medium">FLOW</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
            <a href="#spaces" className="hover:text-primary transition-colors">Spaces</a>
            <a href="#guides" className="hover:text-primary transition-colors">Guides</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full text-xs font-semibold text-primary/80 border border-border/50">
            <MapPin className="w-3 h-3 text-accent" />
            <span>South Congress • Live</span>
          </div>
          <Button size="sm" className="hidden sm:inline-flex rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Book Class
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
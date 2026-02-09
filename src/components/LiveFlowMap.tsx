import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Map, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const classes = [
  {
    id: 1,
    title: "Grounding Hatha",
    instructor: "Elena R.",
    location: "Zilker Botanical Garden",
    neighborhood: "West Zilker",
    time: "07:30 AM",
    date: "Tue, Oct 24",
    coords: { x: '45%', y: '55%' }
  },
  {
    id: 2,
    title: "Power Flow",
    instructor: "Marcus T.",
    location: "Fairmont Rooftop",
    neighborhood: "Downtown",
    time: "12:00 PM",
    date: "Tue, Oct 24",
    coords: { x: '60%', y: '40%' }
  },
  {
    id: 3,
    title: "Yin & Sound",
    instructor: "Sarah K.",
    location: "Laguna Gloria",
    neighborhood: "Tarrytown",
    time: "06:00 PM",
    date: "Wed, Oct 25",
    coords: { x: '35%', y: '30%' }
  }
];

const LiveFlowMap = () => {
  const [view, setView] = useState<'list' | 'map'>('list');

  return (
    <section id="schedule" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Live Flow Schedule</h2>
            <p className="text-muted-foreground">Find a pop-up sanctuary in your neighborhood. We transform Austin's best spaces into temporary studios.</p>
          </div>
          
          <div className="flex bg-background p-1 rounded-full border border-border shadow-sm">
            <button 
              onClick={() => setView('list')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${view === 'list' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-primary'}`}
            >
              <Star className="w-4 h-4" /> List
            </button>
            <button 
              onClick={() => setView('map')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${view === 'map' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-primary'}`}
            >
              <MapIcon className="w-4 h-4" /> Map
            </button>
          </div>
        </div>

        <div className="min-h-[600px] relative">
          <AnimatePresence mode="wait">
            {view === 'list' ? (
              <motion.div 
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-4"
              >
                {classes.map((item) => (
                  <Card key={item.id} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="bg-primary/5 p-8 flex flex-col justify-center border-r border-border/50 md:min-w-[200px]">
                          <span className="text-accent font-bold text-sm tracking-widest uppercase mb-1">{item.date}</span>
                          <span className="text-3xl font-display text-primary">{item.time}</span>
                        </div>
                        <div className="flex-1 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                            <h3 className="text-2xl font-display text-primary mb-2">{item.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> {item.location}</span>
                              <span className="font-medium text-primary/70">• {item.neighborhood}</span>
                              <span className="font-medium text-primary/70">• Led by {item.instructor}</span>
                            </div>
                          </div>
                          <Button className="rounded-full px-8 border-primary hover:bg-primary hover:text-white" variant="outline">
                            Book Spot
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="map"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="relative w-full h-[600px] bg-slate-200 rounded-3xl overflow-hidden shadow-inner border-4 border-white"
              >
                <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                {/* Mock Map Background */}
                <div className="absolute inset-0 bg-[#f1f5f9] flex items-center justify-center">
                  <span className="text-slate-400 font-display text-4xl opacity-20">Austin Neighborhood Guide</span>
                </div>
                
                {classes.map((item) => (
                  <motion.div 
                    key={item.id}
                    className="absolute cursor-pointer group"
                    style={{ left: item.coords.x, top: item.coords.y }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-accent/20 animate-pulse" />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow-xl border border-border w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        <p className="font-display text-sm text-primary mb-1">{item.title}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LiveFlowMap;
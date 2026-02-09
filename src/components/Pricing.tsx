import React from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Single Session",
    price: "25",
    description: "Perfect for travelers or those trying Vayu Flow for the first time.",
    features: ["Access to any pop-up location", "Mat & towel rental included", "Natural spring water", "1-month expiration"],
    cta: "Buy Pass",
    highlight: false
  },
  {
    name: "Flow Member",
    price: "149",
    description: "For the dedicated practitioner seeking a variety of Austin landscapes.",
    features: ["8 classes per month", "Priority booking window", "Guest passes (2/month)", "Discount on Vayu workshops", "Austin community events"],
    cta: "Join Community",
    highlight: true
  },
  {
    name: "Unlimited",
    price: "220",
    description: "Total freedom to flow anywhere we pop up in the city.",
    features: ["Unlimited classes", "Early access to new locations", "Free Vayu Flow merch", "Private session discount", "Bring a friend for free"],
    cta: "Go Unlimited",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Choose Your Pace</h2>
          <p className="text-muted-foreground">No long-term commitments, just pure flow. Select the path that fits your lifestyle in Austin.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${tier.highlight ? 'bg-primary text-primary-foreground border-primary shadow-2xl scale-105 z-10' : 'bg-white border-border hover:border-accent'}`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 tracking-tight">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">${tier.price}</span>
                  <span className={tier.highlight ? 'text-white/60 text-sm' : 'text-muted-foreground text-sm'}>/month</span>
                </div>
                <p className={`mt-4 text-sm ${tier.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 ${tier.highlight ? 'text-accent' : 'text-accent'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-full py-6 font-bold ${tier.highlight ? 'bg-white text-primary hover:bg-slate-100' : 'bg-primary text-white hover:bg-primary/90'}`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
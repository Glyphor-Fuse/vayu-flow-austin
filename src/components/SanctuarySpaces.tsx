import React from 'react';

const SanctuarySpaces = () => {
  const spaces = [
    { name: 'Laguna Gloria', image: '/images/space-1.png', type: 'Garden' },
    { name: 'Fairmont Rooftop', image: '/images/space-2.png', type: 'Skyline' },
    { name: 'Barton Springs', image: '/images/space-3.png', type: 'Waterside' },
    { name: 'Secession Lab', image: '/images/space-4.png', type: 'Industrial' },
  ];

  return (
    <section id="spaces" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">Our Sanctuary Spaces</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">We scout Austin for locations that inspire stillness. Every month, we rotate our 'studios' to keep your practice as dynamic as the city itself.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-border/50 mx-12 mb-4" />
          <a href="#" className="text-accent font-bold uppercase tracking-widest text-sm hover:underline">View All Locations</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {spaces.map((space, i) => (
            <div key={i} className={`group relative rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'md:translate-y-12' : ''}`}>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={space.image} 
                  alt={space.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{space.type}</span>
                <h3 className="text-white text-2xl font-display">{space.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SanctuarySpaces;
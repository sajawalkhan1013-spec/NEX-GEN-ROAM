import React from "react";
import { Link } from "react-router-dom";
import { COUNTRIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Countries = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore the <span className="text-gold">World</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Browse our top countries and find the perfect eSIM package for your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COUNTRIES.map((country) => (
          <Link to={`/country/${country.id}`} key={country.id} className="group relative block rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-neon-blue transition-all duration-500 hover:neon-glow-hover hover:-translate-y-2">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src={country.imageUrl} 
                alt={country.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <img src={country.flagUrl} alt={`${country.name} flag`} className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold mb-2 text-white">{country.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">From {country.packages[0].price}</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white group-hover:text-neon-blue transition-colors">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-black/40 backdrop-blur-sm border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <p className="text-xs text-center text-neon-blue font-bold tracking-widest uppercase">View Packages</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Grid of Other Countries (Placeholder) */}
      <div className="mt-24 text-center">
        <p className="text-gray-500 mb-8">Plus 100+ more countries coming soon...</p>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['Japan', 'USA', 'UK', 'Germany', 'Spain', 'Italy', 'Switzerland', 'UAE'].map(c => (
                <div key={c} className="p-4 border border-white/10 rounded-xl text-sm font-medium">{c}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;

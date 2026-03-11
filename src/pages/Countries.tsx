import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES } from "@/lib/data";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore the <span className="text-gold">World</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-12">Browse 195+ countries and find the perfect eSIM package for your next adventure.</p>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-gold transition-colors" />
          <Input
            type="text"
            placeholder="Search countries..."
            className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl text-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredCountries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCountries.map((country) => (
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
                  <h3 className="text-2xl font-bold mb-2 text-white">{country.name}</h3>
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
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-500 text-xl">No countries found matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="text-gold hover:underline mt-4"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Trust Badge Section */}
      <div className="mt-32 p-12 rounded-[3rem] bg-white/5 border border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Why our eSIMs?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-gold font-bold mb-2">Instant Delivery</h4>
            <p className="text-gray-400 text-sm">Get your QR code via email immediately after purchase.</p>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-2">No Roaming Fees</h4>
            <p className="text-gray-400 text-sm">Pay local rates and avoid expensive roaming charges.</p>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-2">24/7 Support</h4>
            <p className="text-gray-400 text-sm">Our global support team is always here to help you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;

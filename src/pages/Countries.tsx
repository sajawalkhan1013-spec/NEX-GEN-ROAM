import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES } from "@/lib/data";
import { ArrowRight, Search, MapPin, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col items-center mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-gold mb-6"
        >
          <Sparkles className="h-4 w-4" />
          Global Coverage
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
        >
          Explore the <span className="text-gradient-gold">World</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mb-12 font-medium"
        >
          Choose from 195+ countries and enjoy high-speed connectivity anywhere on the planet.
        </motion.p>
        
        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-lg group"
        >
          <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-3xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-gold transition-colors duration-300" />
            <Input
              type="text"
              placeholder="Where are you going?"
              className="pl-14 h-16 bg-white/5 backdrop-blur-md border-white/10 rounded-2xl text-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 placeholder:text-gray-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="popLayout">
        {filteredCountries.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {filteredCountries.map((country) => (
              <motion.div
                key={country.id}
                variants={cardVariants}
                layout
                className="group"
              >
                <Link to={`/country/${country.id}`} className="relative block rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 hover:border-neon-blue transition-all duration-500 hover:neon-glow-hover hover:-translate-y-4 shadow-2xl">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={country.imageUrl} 
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                    
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white blur-md opacity-20 group-hover:opacity-100 transition-opacity rounded-full" />
                        <img src={country.flagUrl} alt={`${country.name} flag`} className="w-10 h-10 rounded-full border-2 border-white shadow-xl relative z-10 object-cover" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-3 w-3 text-gold" />
                        <span className="text-[10px] font-black tracking-widest text-gold uppercase opacity-0 group-hover:opacity-100 transition-opacity">Global Partner</span>
                      </div>
                      <h3 className="text-3xl font-black mb-3 text-white tracking-tighter leading-none group-hover:scale-105 transition-transform origin-left">{country.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Starts from</span>
                          <span className="text-gold font-black text-xl">{country.packages[0].price}</span>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-all duration-300 group-hover:scale-110 shadow-xl group-hover:shadow-gold/20">
                          <ArrowRight className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-neon-blue/10 backdrop-blur-md border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 text-center">
                     <p className="text-[10px] text-neon-blue font-black tracking-[0.2em] uppercase">Connect to {country.name} Network</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 glass rounded-[3rem] border-white/5"
          >
            <div className="inline-flex w-24 h-24 rounded-full bg-white/5 items-center justify-center mb-8 border border-white/10">
               <Search className="h-10 w-10 text-gray-700" />
            </div>
            <p className="text-gray-500 text-2xl font-bold mb-4">No countries found matching "{searchQuery}"</p>
            <p className="text-gray-600 mb-10 max-w-sm mx-auto">We're expanding our network daily. Check back soon for more coverage.</p>
            <Button 
              onClick={() => setSearchQuery("")}
              className="bg-gold text-black hover:bg-gold/80 rounded-2xl h-14 px-10 font-bold hover:gold-glow transition-all"
            >
              Show all countries
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-40 grid md:grid-cols-3 gap-10"
      >
        {[
          { title: "Instant QR Delivery", text: "Scan and connect. Your eSIM is delivered via email in seconds." },
          { title: "Zero Roaming Fees", text: "Enjoy high-speed data at local rates without surprise bills." },
          { title: "Global Compatibility", text: "Works seamlessly on all eSIM-enabled iPhones, Androids and iPads." }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[3rem] glass hover:border-gold/20 transition-all duration-500 group">
             <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:gold-glow transition-all">
               <Sparkles className="h-6 w-6" />
             </div>
             <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{item.title}</h3>
             <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Countries;

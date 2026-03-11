import React from "react";
import { REGIONS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Check, Globe, MessageCircle, ShoppingCart } from "lucide-react";

const Regions = () => {
  const { addToCart } = useCart();

  const handleWhatsAppOrder = (pkg: any) => {
    const text = `I want to buy ${pkg.name} please let me know whats info are you want from my side`;
    window.open(`https://wa.me/923017480703?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Region <span className="text-neon-blue">Packages</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">One eSIM for multiple countries. Ideal for cross-border travelers and digital nomads.</p>
      </div>

      <div className="space-y-24">
        {REGIONS.map((region) => (
          <div key={region.id} className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-neon-blue" />
              </div>
              <h2 className="text-3xl font-bold">{region.name}</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-neon-blue/40 to-transparent ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {region.packages.map((pkg) => (
                <div key={pkg.id} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-500 hover:neon-glow-hover flex flex-col items-start group">
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-white group-hover:text-neon-blue transition-colors">{pkg.price}</span>
                    <span className="text-gray-500 text-sm">/ {pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-10 w-full">
                    <li className="flex items-center gap-3 text-sm text-gray-400">
                      <Check className="h-4 w-4 text-neon-blue" /> {pkg.data} High-speed Data
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-400">
                      <Check className="h-4 w-4 text-neon-blue" /> Coverage in {region.name} Region
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-400">
                      <Check className="h-4 w-4 text-neon-blue" /> Valid for {pkg.duration}
                    </li>
                  </ul>

                  <div className="mt-auto space-y-4 w-full">
                    <Button 
                      onClick={() => addToCart(pkg)}
                      className="w-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 hover:bg-neon-blue hover:text-black gap-2 transition-all font-bold"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </Button>
                    <Button 
                      onClick={() => handleWhatsAppOrder(pkg)}
                      variant="ghost"
                      className="w-full text-gray-400 hover:text-white gap-2 h-10 transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Inquiry via WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;

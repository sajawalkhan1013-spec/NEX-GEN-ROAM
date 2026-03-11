import React from "react";
import { GLOBAL_PLANS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Check, Globe, MessageCircle, ShoppingCart, Star, Zap } from "lucide-react";

const Global = () => {
  const { addToCart } = useCart();

  const handleWhatsAppOrder = (pkg: any) => {
    const text = `I want to buy ${pkg.name} please let me know whats info are you want from my side`;
    window.open(`https://wa.me/923017480703?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Global <span className="text-gold">eSIM</span> Plans</h1>
        <p className="text-xl text-gray-400 max-w-2xl">One eSIM for the entire world. Unlimited roaming, zero boundaries. Stay connected in 100+ countries with a single plan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {GLOBAL_PLANS.map((pkg, idx) => (
          <div key={pkg.id} className={`relative p-10 rounded-[3rem] transition-all duration-700 hover:gold-glow hover:-translate-y-4 group flex flex-col items-center text-center ${idx === 1 ? 'bg-gradient-to-br from-gold/30 via-black to-gold/30 border-2 border-gold scale-110 shadow-2xl shadow-gold/20 z-10' : 'bg-white/5 border border-white/10 opacity-80 hover:opacity-100'}`}>
            
            {idx === 1 && (
                <div className="absolute top-0 -translate-y-1/2 bg-gold text-black px-8 py-2 rounded-full text-sm font-black tracking-widest uppercase flex items-center gap-2">
                    <Star className="h-4 w-4 fill-black" /> BEST VALUE <Star className="h-4 w-4 fill-black" />
                </div>
            )}
            
            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 ${idx === 1 ? 'bg-gold/20' : 'bg-white/10'}`}>
                <Zap className={`h-10 w-10 ${idx === 1 ? 'text-gold' : 'text-white'}`} />
            </div>

            <h3 className="text-3xl font-bold mb-2 text-white">{pkg.name}</h3>
            <p className="text-gray-400 font-medium mb-10">{pkg.duration}</p>
            
            <div className="flex items-baseline gap-2 mb-10">
                <span className={`text-6xl font-black ${idx === 1 ? 'text-gold' : 'text-white'}`}>{pkg.price}</span>
            </div>
            
            <ul className="space-y-5 mb-12 w-full text-left">
              <li className="flex items-center gap-3 text-base text-gray-300">
                <Check className="h-5 w-5 text-gold flex-shrink-0" /> {pkg.data} High-speed Data
              </li>
              <li className="flex items-center gap-3 text-base text-gray-300">
                <Check className="h-5 w-5 text-gold flex-shrink-0" /> Global Coverage (100+ Countries)
              </li>
              <li className="flex items-center gap-3 text-base text-gray-300">
                <Check className="h-5 w-5 text-gold flex-shrink-0" /> Reliable 4G/LTE Networks
              </li>
              <li className="flex items-center gap-3 text-base text-gray-300">
                <Check className="h-5 w-5 text-gold flex-shrink-0" /> Valid for {pkg.duration}
              </li>
              <li className="flex items-center gap-3 text-base text-gray-300">
                <Check className="h-5 w-5 text-gold flex-shrink-0" /> Instant Setup & Activation
              </li>
            </ul>

            <div className="mt-auto space-y-4 w-full">
                <Button 
                    onClick={() => addToCart(pkg)}
                    className={`w-full h-14 rounded-2xl text-lg font-black transition-all ${idx === 1 ? 'bg-gold text-black hover:bg-gold/80' : 'bg-white/10 text-white hover:bg-gold hover:text-black'} gap-2`}
                >
                    <ShoppingCart className="h-6 w-6" />
                    Add to Cart
                </Button>
                <Button 
                    onClick={() => handleWhatsAppOrder(pkg)}
                    className="w-full h-14 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500 hover:text-white gap-2 transition-all font-bold"
                >
                    <MessageCircle className="h-6 w-6" />
                    Order via WhatsApp
                </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 rounded-[3rem] bg-white/5 border border-white/10 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Globe className="h-32 w-32 text-gold/10 absolute -top-10 -right-10 rotate-12" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Why choose Global Plans?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Global plans are perfect for travelers visiting multiple continents in a single trip. No need to buy separate eSIMs for each country or region. One plan, one eSIM, infinite possibilities.</p>
          </div>
      </div>
    </div>
  );
};

export default Global;

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { COUNTRIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Check, MessageCircle, ShoppingCart } from "lucide-react";

const CountryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const country = COUNTRIES.find((c) => c.id === id);

  useEffect(() => {
    if (!country) {
      navigate("/countries");
    }
  }, [country, navigate]);

  if (!country) return null;

  const handleWhatsAppOrder = (pkg: any) => {
    const text = `I want to buy ${country.name} eSIM ${pkg.data} please let me know whats info are you want from my side`;
    window.open(`https://wa.me/923017480703?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-white/10 group">
        <img 
          src={country.imageUrl} 
          alt={country.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-12 left-12 flex items-center gap-6">
          <img src={country.flagUrl} alt={`${country.name} flag`} className="w-16 h-16 rounded-2xl border-2 border-gold shadow-xl shadow-gold/20" />
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">{country.name}</h1>
            <p className="text-gold text-xl font-medium tracking-wide flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold" /> Available Data Packages
            </p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {country.packages.map((pkg, idx) => (
          <div key={pkg.id} className={`relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 hover:border-gold hover:gold-glow hover:-translate-y-2 group flex flex-col items-center text-center ${idx === 1 ? 'border-gold shadow-xl shadow-gold/10 scale-105 z-10' : ''}`}>
            {idx === 1 && (
                <div className="absolute top-0 -translate-y-1/2 bg-gold text-black px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    Most Popular
                </div>
            )}
            
            <h3 className="text-3xl font-bold mb-2">{pkg.data}</h3>
            <p className="text-gray-400 font-medium mb-6">{pkg.duration}</p>
            
            <div className="text-5xl font-black text-white mb-8 group-hover:text-gold transition-colors">{pkg.price}</div>
            
            <ul className="space-y-4 mb-10 w-full text-left">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="h-4 w-4 text-gold flex-shrink-0" /> High-speed 4G/5G Connectivity
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="h-4 w-4 text-gold flex-shrink-0" /> Instant Activation (Scan QR Code)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="h-4 w-4 text-gold flex-shrink-0" /> Local IP Address included
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="h-4 w-4 text-gold flex-shrink-0" /> 24/7 Technical Support
              </li>
            </ul>

            <div className="mt-auto space-y-4 w-full">
                <Button 
                    onClick={() => addToCart(pkg)}
                    className="w-full h-12 rounded-xl bg-white/10 text-white hover:bg-gold hover:text-black gap-2 transition-all font-bold"
                >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                </Button>
                <Button 
                    onClick={() => handleWhatsAppOrder(pkg)}
                    className="w-full h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500 hover:text-white gap-2 transition-all font-bold"
                >
                    <MessageCircle className="h-5 w-5" />
                    Order via WhatsApp
                </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetail;

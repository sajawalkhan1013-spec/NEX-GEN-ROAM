import React from "react";
import { GLOBAL_PLANS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Check, Globe, MessageCircle, ShoppingCart, Star, Zap, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { motion } from "motion/react";

const Global = () => {
  const { addToCart } = useCart();

  const handleWhatsAppOrder = (pkg: any) => {
    const text = `I want to buy ${pkg.name} please let me know whats info are you want from my side`;
    window.open(`https://wa.me/923017480703?text=${encodeURIComponent(text)}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 rounded-[2rem] bg-gold/10 flex items-center justify-center mb-10 border border-gold/20 shadow-[0_0_30px_rgba(255,215,0,0.2)]"
        >
          <Trophy className="h-12 w-12 text-gold" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none"
        >
          Global <span className="text-gradient-gold drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">eSIM</span> <br />
          Plans
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-500 max-w-3xl mb-12 font-medium leading-relaxed"
        >
          One eSIM for the entire world. Unlimited roaming, zero boundaries. Stay connected in 100+ countries with a single plan.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["100+ Countries", "Unlimited Roaming", "Tier-1 Speed", "24/7 VIP Support"].map((perk, i) => (
            <div key={i} className="flex items-center gap-2 px-6 py-2 rounded-full glass border-gold/20 text-gold text-xs font-black uppercase tracking-[0.2em] shadow-xl">
               <Sparkles className="h-4 w-4" />
               {perk}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-40"
      >
        {GLOBAL_PLANS.map((pkg, idx) => (
          <motion.div 
            key={pkg.id} 
            variants={cardVariants}
            className={`relative p-12 rounded-[4rem] transition-all duration-1000 hover:-translate-y-8 group flex flex-col items-center text-center overflow-hidden h-full min-h-[700px] ${idx === 1 ? 'bg-gradient-to-br from-gold/20 via-black to-gold/20 border-2 border-gold scale-110 shadow-2xl shadow-gold/20 z-10' : 'glass border-white/10 opacity-80 hover:opacity-100 hover:border-white/20'}`}
          >
            {/* Background animated elements */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 blur-[100px] -z-10 transition-transform duration-1000 group-hover:scale-150 ${idx === 1 ? 'bg-gold/30' : 'bg-white/5'}`} />
            <div className={`absolute -bottom-20 -left-20 w-64 h-64 blur-[100px] -z-10 transition-transform duration-1000 group-hover:scale-150 ${idx === 1 ? 'bg-gold/20' : 'bg-white/5'}`} />
            
            {idx === 1 && (
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 -translate-y-1/2 bg-gold text-black px-12 py-3 rounded-full text-sm font-black tracking-[0.3em] uppercase flex items-center gap-3 shadow-2xl shadow-gold/40"
                >
                    <Star className="h-5 w-5 fill-black" /> BEST VALUE <Star className="h-5 w-5 fill-black" />
                </motion.div>
            )}
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
              className={`w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 ${idx === 1 ? 'bg-gold/20 scale-110 shadow-[0_0_40px_rgba(255,215,0,0.2)]' : 'bg-white/10'}`}
            >
                <Zap className={`h-14 w-14 ${idx === 1 ? 'text-gold' : 'text-white'}`} />
            </motion.div>

            <h3 className="text-4xl font-black mb-2 text-white tracking-tighter leading-none">{pkg.name}</h3>
            <p className="text-gray-500 font-bold mb-12 tracking-widest uppercase text-[10px]">{pkg.duration}</p>
            
            <div className="flex items-baseline gap-2 mb-16">
                <span className={`text-7xl font-black transition-colors duration-500 tracking-tighter ${idx === 1 ? 'text-gold' : 'text-white group-hover:text-gold'}`}>{pkg.price}</span>
            </div>
            
            <div className="space-y-6 mb-16 w-full text-left">
              {[
                `${pkg.data} High-speed Data`,
                "Global Coverage (100+ Countries)",
                "Elite 5G/LTE Performance",
                `Valid for ${pkg.duration}`,
                "Instant Global Activation",
                "VIP Concierge Support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5 text-gray-500 group-hover:text-gray-400 transition-colors">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${idx === 1 ? 'bg-gold text-black shadow-gold/20 shadow-lg' : 'bg-gold/20 text-gold'}`}>
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-4 w-full relative z-10">
                <Button 
                    onClick={() => addToCart(pkg)}
                    className={`w-full h-18 rounded-[2rem] text-xl font-black transition-all duration-500 shadow-2xl active:scale-95 group overflow-hidden relative ${idx === 1 ? 'bg-gold text-black hover:bg-gold/80 hover:shadow-gold/40' : 'bg-white text-black hover:bg-gold hover:shadow-gold/40'}`}
                >
                    <motion.div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                    <ShoppingCart className="h-7 w-7 relative z-10" />
                    <span className="relative z-10">Select Plan</span>
                </Button>
                <Button 
                    onClick={() => handleWhatsAppOrder(pkg)}
                    variant="ghost"
                    className="w-full h-14 rounded-[2rem] text-gray-500 hover:text-green-500 hover:bg-green-500/10 gap-3 transition-all font-black text-sm group"
                >
                    <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    Inquiry via WhatsApp
                </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Global Comparison / Trust Info */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-16 md:p-24 glass rounded-[5rem] border-white/5 relative overflow-hidden group"
      >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 blur-[100px] -z-10 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-blue/10 blur-[100px] -z-10 animate-pulse" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative z-10">
                <div className="w-16 h-16 bg-gold/20 rounded-3xl flex items-center justify-center mb-10 border border-gold/30">
                   <ShieldCheck className="h-8 w-8 text-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none">The ultimate <br />travel freedom.</h2>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">Global plans are engineered for the extreme traveler. One single configuration, zero changes needed as you cross oceans and time zones.</p>
                <div className="flex gap-10">
                   <div className="space-y-2">
                      <p className="text-white font-black text-3xl">100+</p>
                      <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px]">Territories Covered</p>
                   </div>
                   <div className="w-px h-12 bg-white/10" />
                   <div className="space-y-2">
                      <p className="text-white font-black text-3xl">∞ Plan</p>
                      <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px]">Zero Border Barriers</p>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="aspect-video glass rounded-[3.5rem] overflow-hidden relative shadow-2xl">
                   <img 
                     src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3138b9af-83d8-4da4-9191-6d88642499dc.jpg" 
                     className="w-full h-full object-cover opacity-40 transition-transform duration-1000 hover:scale-110" 
                     alt="Global City"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-40 h-40 rounded-full border border-gold/50 flex items-center justify-center"
                      >
                         <Globe className="h-16 w-16 text-gold" />
                      </motion.div>
                   </div>
                </div>
             </div>
          </div>
      </motion.div>
    </div>
  );
};

export default Global;

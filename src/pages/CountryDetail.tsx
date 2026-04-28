import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { COUNTRIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Check, MessageCircle, ShoppingCart, ArrowLeft, Star, Globe2, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const CountryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const country = COUNTRIES.find((c) => c.id === id);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

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
    <div className="max-w-7xl mx-auto px-4 py-24">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/countries")}
        className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-12 group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold tracking-tight">Back to Countries</span>
      </motion.button>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] w-full rounded-[4rem] overflow-hidden mb-24 shadow-2xl border border-white/5 group"
      >
        <motion.img 
          style={{ scale, opacity }}
          src={country.imageUrl} 
          alt={country.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold blur-2xl opacity-20 animate-pulse" />
              <img src={country.flagUrl} alt={`${country.name} flag`} className="w-24 h-24 rounded-3xl border-4 border-gold shadow-2xl relative z-10 object-cover" />
            </motion.div>
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-xs"
              >
                <Globe2 className="h-3 w-3" />
                Premium Connectivity
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
              >
                {country.name}
              </motion.h1>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/10"
          >
             <div className="text-right">
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Network Speed</p>
                <p className="text-white font-black text-2xl">4G / 5G / LTE</p>
             </div>
             <div className="w-px h-10 bg-white/20 mx-4" />
             <div className="text-right">
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Latency</p>
                <p className="text-white font-black text-2xl">Ultra-Low</p>
             </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        {country.packages.map((pkg, idx) => (
          <motion.div 
            key={pkg.id} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative p-6 rounded-[3.5rem] bg-white/5 border border-white/5 transition-all duration-500 hover:border-gold hover:gold-glow-hover hover:-translate-y-6 group flex flex-col items-center text-center overflow-hidden ${idx === 1 ? 'border-gold/30 shadow-2xl shadow-gold/10 scale-105 z-10 bg-gradient-to-br from-gold/10 to-transparent' : ''}`}
          >
            {/* Background elements for cards */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] -z-10 transition-transform duration-500 group-hover:scale-150" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-blue/5 blur-[50px] -z-10 transition-transform duration-500 group-hover:scale-150" />

            {idx === 1 && (
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 -translate-y-1/2 bg-gold text-black px-10 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-xl shadow-gold/20"
                >
                    Most Popular
                </motion.div>
            )}
            
            <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-4 transition-all duration-500 ${idx === 1 ? 'bg-gold/20 scale-110' : 'bg-white/5 group-hover:bg-gold/10 group-hover:scale-110'}`}>
                <Zap className={`h-12 w-12 ${idx === 1 ? 'text-gold' : 'text-gray-400 group-hover:text-gold transition-colors duration-500'}`} />
            </div>

            <h3 className="text-4xl font-black mb-2 tracking-tighter leading-none">{pkg.data}</h3>
            <p className="text-gray-500 font-bold mb-10 tracking-widest uppercase text-[10px]">{pkg.duration}</p>
            
            <div className="text-4xl font-black text-white mb-6 group-hover:text-gold transition-colors duration-500 tracking-tighter">{pkg.price}</div>
            
            <div className="space-y-3 mb-6 w-full text-left">
              {[
                "Instant Activation",
                "High-speed 5G Data",
                "Local IP Address",
                "24/7 VIP Support",
                "Keep your WhatsApp"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:gold-glow transition-all">
                    <CheckCircle2 className="h-3 w-3 text-gold" />
                  </div>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-4 w-full relative z-10">
                <Button 
                    onClick={() => addToCart(pkg)}
                    className="w-full h-12 rounded-[1.5rem] bg-white text-black hover:bg-gold hover:text-black gap-3 transition-all duration-300 font-black text-lg hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] active:scale-95 group overflow-hidden"
                >
                    <motion.div className="absolute inset-0 bg-gold/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                    <ShoppingCart className="h-6 w-6 relative z-10" />
                    <span className="relative z-10">Add to Cart</span>
                </Button>
                <Button 
                    onClick={() => handleWhatsAppOrder(pkg)}
                    variant="ghost"
                    className="w-full h-10 rounded-[1.5rem] text-gray-500 hover:text-green-500 hover:bg-green-500/10 gap-2 transition-all font-bold group"
                >
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    Order via WhatsApp
                </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQs / Info Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-20 items-center p-16 md:p-24 glass rounded-[4rem] border-white/5"
      >
          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Everything you need to know about <span className="text-gold">{country.name}</span> connectivity</h2>
            <div className="space-y-10">
               <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-gold" /></div>
                     How do I install it?
                  </h4>
                  <p className="text-gray-500 leading-relaxed">Simply scan the QR code we send to your email immediately after purchase. Follow the on-screen instructions on your device to activate your plan.</p>
               </div>
               <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-gold" /></div>
                     When should I activate?
                  </h4>
                  <p className="text-gray-500 leading-relaxed">We recommend installing your eSIM before you depart. The validity period only starts when you connect to a supported network in {country.name}.</p>
               </div>
               <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-gold" /></div>
                     Can I use my physical SIM?
                  </h4>
                  <p className="text-gray-500 leading-relaxed">Yes! Our eSIM works alongside your existing physical SIM card. You can keep your physical SIM for calls/SMS and use the eSIM for data.</p>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden glass border-white/10 relative">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cc79877d-f97c-41da-a5f0-b676fdee0a8d.jpg" 
                  className="w-full h-full object-cover opacity-60" 
                  alt="Network Coverage"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6">
                   <div className="w-20 h-20 rounded-3xl bg-gold/20 flex items-center justify-center backdrop-blur-md border border-gold/30">
                      <ShieldCheck className="h-10 w-10 text-gold" />
                   </div>
                   <div>
                      <p className="text-white font-bold text-xl">Tier-1 Network</p>
                      <p className="text-gray-400 text-sm">We partner with top-tier carriers in {country.name} to ensure the best coverage.</p>
                   </div>
                </div>
             </div>
             {/* Abstract blobs */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/20 blur-[80px] -z-10 rounded-full" />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-blue/10 blur-[80px] -z-10 rounded-full" />
          </div>
      </motion.div>
    </div>
  );
};

export default CountryDetail;

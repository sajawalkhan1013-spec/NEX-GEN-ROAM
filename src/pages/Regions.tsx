import React from "react";
import { Link } from "react-router-dom";
import { REGIONS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Check, Globe, MessageCircle, ShoppingCart, Sparkles, Zap, Map, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Regions = () => {
  const { addToCart } = useCart();

  const handleWhatsAppOrder = (pkg: any) => {
    const text = `I want to buy ${pkg.name} please let me know whats info are you want from my side`;
    window.open(`https://wa.me/923017480703?text=${encodeURIComponent(text)}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col items-center mb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 rounded-3xl bg-neon-blue/10 flex items-center justify-center mb-8 border border-neon-blue/20"
        >
          <Map className="h-10 w-10 text-neon-blue" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
        >
          Region <span className="text-neon-blue drop-shadow-[0_0_20px_rgba(0,243,255,0.3)]">Packages</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-500 max-w-2xl mb-12 font-medium"
        >
          One eSIM for multiple countries. Ideal for cross-border travelers and digital nomads exploring entire continents.
        </motion.p>
      </div>

      <div className="space-y-40 mb-32">
        {REGIONS.map((region, idx) => (
          <motion.div 
            key={region.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Background decoration for the region section */}
            <div className={`absolute top-0 left-0 w-full h-full -z-10 rounded-[5rem] opacity-5 bg-gradient-to-br from-neon-blue to-transparent transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`} />
            
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-12 px-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-neon-blue/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-neon-blue/30 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                  <Globe className="h-8 w-8 text-neon-blue" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{region.name}</h2>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-neon-blue/30 via-neon-blue/10 to-transparent ml-4 mb-4" />
              <div className="flex items-center gap-3 text-neon-blue font-black uppercase tracking-[0.2em] text-[10px] pb-4">
                 <Sparkles className="h-3 w-3" />
                 All Countries included
              </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {region.packages.map((pkg, pidx) => (
                <motion.div 
                  key={pkg.id} 
                  variants={itemVariants}
                  className="p-12 rounded-[3.5rem] glass hover:border-neon-blue/30 transition-all duration-700 hover:neon-glow-hover hover:-translate-y-6 flex flex-col items-start group shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 blur-[50px] -z-10 transition-transform duration-700 group-hover:scale-150" />
                  
                  <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:neon-glow transition-all duration-500">
                    <Zap className="h-6 w-6 text-neon-blue" />
                  </div>

                  <h3 className="text-3xl font-black mb-4 tracking-tighter leading-none">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black text-white group-hover:text-neon-blue transition-colors duration-500 tracking-tighter">{pkg.price}</span>
                    <span className="text-gray-600 font-bold uppercase tracking-widest text-[10px]">/ {pkg.duration}</span>
                  </div>
                  
                  <div className="space-y-5 mb-12 w-full">
                    {[
                      `${pkg.data} High-speed Data`,
                      `Coverage in ${region.name} Region`,
                      `Valid for ${pkg.duration}`,
                      "Instant activation (QR Code)",
                      "Local speed optimization"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0 group-hover:neon-glow transition-all">
                          <Check className="h-3 w-3 text-neon-blue" />
                        </div>
                        <span className="font-medium">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-4 w-full relative z-10">
                    <Button 
                      onClick={() => addToCart(pkg)}
                      className="w-full h-16 rounded-[1.5rem] bg-neon-blue text-black hover:bg-neon-blue/90 gap-3 transition-all duration-300 font-black text-lg shadow-[0_10px_30px_rgba(0,243,255,0.3)] hover:scale-[1.02] active:scale-95 group overflow-hidden"
                    >
                      <motion.div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                      <ShoppingCart className="h-6 w-6 relative z-10" />
                      <span className="relative z-10">Add to Cart</span>
                    </Button>
                    <Button 
                      onClick={() => handleWhatsAppOrder(pkg)}
                      variant="ghost"
                      className="w-full text-gray-500 hover:text-white hover:bg-white/5 h-12 transition-all font-bold rounded-xl"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Inquiry via WhatsApp
                    </Button>
                  </div>
                </motion.div>
              ))}
              
              {/* Region Perks Info Card */}
              <motion.div 
                variants={itemVariants}
                className="p-12 rounded-[3.5rem] bg-gradient-to-br from-neon-blue/10 via-black to-transparent border border-neon-blue/10 flex flex-col justify-center items-center text-center group overflow-hidden"
              >
                 <div className="relative mb-8">
                    <div className="absolute inset-0 bg-neon-blue blur-2xl opacity-10 group-hover:opacity-30 transition-opacity" />
                    <Globe className="h-16 w-16 text-neon-blue relative z-10" />
                 </div>
                 <h4 className="text-2xl font-bold mb-6 tracking-tight">Why Continental?</h4>
                 <p className="text-gray-500 leading-relaxed mb-8">Ideal for multi-country trips. One plan, zero network switches, and consistent high speeds across borders.</p>
                 <div className="flex flex-wrap justify-center gap-2">
                    {["No Borders", "High Speed", "Instant"].map((tag, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-neon-blue/10 text-neon-blue px-3 py-1.5 rounded-full border border-neon-blue/20">{tag}</span>
                    ))}
                 </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Region CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-4 py-32 mb-20 relative overflow-hidden rounded-[5rem] group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-black to-transparent -z-10" />
        <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none text-white">Exploring multiple <br />continents?</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto font-medium">Get our Global eSIM for ultimate freedom across 100+ countries worldwide.</p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-neon-blue hover:text-black px-12 h-18 rounded-2xl text-xl font-black transition-all duration-500 shadow-2xl hover:shadow-neon-blue/40 group overflow-hidden relative">
              <Link to="/global" className="flex items-center gap-3">
                 <motion.div className="absolute inset-0 bg-neon-blue/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                 <Globe className="h-6 w-6 relative z-10" />
                 <span className="relative z-10">Discover Global</span>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Regions;

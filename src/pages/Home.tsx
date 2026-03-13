import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Zap, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-40 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold/20 text-gold text-sm font-bold mb-8 shadow-[0_0_20px_rgba(255,215,0,0.1)]"
        >
          <Star className="h-4 w-4 fill-gold" />
          <span>Trust by 1M+ Global Travelers</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
        >
          Global Travel <br />
          <span className="text-gradient-gold drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">eSIM</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium"
        >
          Instant Data in 100+ Countries. Stay connected everywhere you go without changing physical SIM cards.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 px-10 text-lg font-bold h-16 rounded-2xl shadow-[0_10px_40px_rgba(255,215,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden relative">
            <Link to="/countries" className="flex items-center gap-2">
              <motion.div className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
              View Countries
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/10 glass hover:border-gold hover:text-gold px-10 text-lg font-bold h-16 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95">
            <Link to="/regions">Region Packages</Link>
          </Button>
        </motion.div>

        {/* Floating elements animation */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] hidden lg:block opacity-20"
        >
          <Globe className="h-24 w-24 text-gold" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[10%] hidden lg:block opacity-20"
        >
          <Zap className="h-24 w-24 text-neon-blue" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 glass rounded-[3rem] border-white/5">
          {[
            { label: "Countries", value: "195+" },
            { label: "Active Users", value: "1M+" },
            { label: "Connectivity", value: "99.9%" },
            { label: "Setup Time", value: "<1 min" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-gold mb-2">{stat.value}</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            { 
              icon: Zap, 
              title: "Instant Activation", 
              desc: "Scan a QR code and you're ready to go. No more waiting for delivery.",
              color: "gold"
            },
            { 
              icon: Globe, 
              title: "Global Coverage", 
              desc: "Stay connected in over 100 countries with our reliable network partners.",
              color: "neon-blue"
            },
            { 
              icon: Shield, 
              title: "Secure & Reliable", 
              desc: "Encrypted connections and 24/7 support for your peace of mind.",
              color: "white"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-10 rounded-[2.5rem] glass hover:border-gold/30 transition-all duration-500 hover:-translate-y-4 group cursor-default"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]`}>
                <feature.icon className={`h-10 w-10 ${feature.color === 'gold' ? 'text-gold' : feature.color === 'neon-blue' ? 'text-neon-blue' : 'text-white'}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* App Promo / Image Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-32 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Everything you need <br />in <span className="text-gold">one eSIM</span></h2>
            <div className="space-y-6">
              {[
                "Keep your WhatsApp number",
                "No hardware required, just QR",
                "High-speed 4G/LTE/5G data",
                "Instant purchase & delivery",
                "Flexible data packages"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-lg text-gray-400">{text}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-12 bg-white text-black hover:bg-gold hover:text-black rounded-2xl h-16 px-10 font-bold transition-all duration-300">
              <Link to="/global">Discover Global Plans</Link>
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="aspect-square glass rounded-[4rem] relative overflow-hidden border-white/5">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_12172330-b1ef-4c32-9bac-9ea5b2f62e40.jpg" 
                  className="w-full h-full object-cover opacity-50 transition-transform duration-1000 hover:scale-110" 
                  alt="Travel Tech"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2rem]">
                   <p className="text-gold font-bold mb-2">PRO TIP</p>
                   <p className="text-white text-lg">Use Global eSIM for long-term travel across multiple continents.</p>
                </div>
             </div>
             {/* Decorative orbits */}
             <div className="absolute -inset-10 border border-white/5 rounded-full -z-10 animate-spin-slow" />
             <div className="absolute -inset-20 border border-gold/5 rounded-full -z-10 animate-spin-slow-reverse" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-32 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-gold/10 via-black to-neon-blue/10 border border-white/5 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Travel the world <br />without limits.</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto font-medium">Get your eSIM now and start your journey with ultra-high-speed data in minutes.</p>
            <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 px-12 h-18 rounded-2xl text-xl font-bold hover:gold-glow transition-all duration-300">
              <Link to="/countries">Get Started Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Zap, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-blue/10 blur-[100px] rounded-full -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Global Travel <span className="bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">eSIM</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Instant Data in 100+ Countries. Stay connected everywhere you go without changing physical SIM cards.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 px-8 text-lg font-bold h-14 rounded-full neon-glow transition-all duration-300">
            <Link to="/countries">View Countries</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black px-8 text-lg font-bold h-14 rounded-full transition-all duration-300">
            <Link to="/regions">Region Packages</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white hover:text-neon-blue px-8 text-lg font-bold h-14 rounded-full gap-2 group">
            <Link to="/global" className="flex items-center gap-2">
              Global eSIM <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:gold-glow transition-all">
            <Zap className="h-8 w-8 text-gold" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Instant Activation</h3>
          <p className="text-gray-400">Scan a QR code and you're ready to go. No more waiting for delivery.</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-500 hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:neon-glow transition-all">
            <Globe className="h-8 w-8 text-neon-blue" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Global Coverage</h3>
          <p className="text-gray-400">Stay connected in over 100 countries with our reliable network partners.</p>
        </div>

        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/50 transition-all duration-500 hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Secure & Reliable</h3>
          <p className="text-gray-400">Encrypted connections and 24/7 support for your peace of mind.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 mb-12">
        <div className="relative p-12 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-black to-neon-blue/20 border border-white/10 overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to travel without limits?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">Get your eSIM now and start your journey with high-speed data.</p>
            <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 px-10 h-14 rounded-full text-lg font-bold">
              <Link to="/countries">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

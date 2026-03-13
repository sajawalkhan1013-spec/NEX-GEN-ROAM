import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Trash2, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "motion/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart, removeFromCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Countries", path: "/countries" },
    { name: "Regions", path: "/regions" },
    { name: "Global eSIM", path: "/global" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const text = `Hello! I want to buy these eSIMs:\n${cart.map(item => `- ${item.name} (${item.quantity})`).join('\n')}\nPlease let me know what info you need from my side.`;
    window.open(`https://wa.me/923017480703?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 h-16" : "bg-transparent h-20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <span className="text-2xl font-bold text-gradient-gold tracking-tighter transition-all duration-300 group-hover:scale-105">
                eSIM GLOBAL
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 nav-link-underline ${
                    isActive(link.path)
                      ? "text-gold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:text-gold transition-all duration-300 hover:scale-110">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-dark border-white/10 text-white w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="text-gold text-xl tracking-tight">Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex-1 flex flex-col h-[calc(100vh-200px)]">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-6">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        <ShoppingCart className="h-20 w-20 opacity-10" />
                      </motion.div>
                      <p className="text-lg">Your cart is empty</p>
                      <Button asChild className="bg-gold text-black hover:bg-gold/80 hover:gold-glow transition-all duration-300 rounded-xl px-8">
                        <Link to="/countries">Start Shopping</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <ScrollArea className="flex-1 pr-4">
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <motion.div 
                              layout
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              key={item.id} 
                              className="flex justify-between items-start gap-4 p-4 rounded-2xl glass hover:border-gold/30 transition-all duration-300"
                            >
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm tracking-tight">{item.name}</h4>
                                <p className="text-xs text-gray-500 mt-1">{item.data} - {item.duration}</p>
                                <p className="text-gold font-bold mt-2 text-lg">{item.price}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-[10px] text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">Qty: {item.quantity}</span>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-600 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                      <div className="pt-6 mt-auto">
                        <Separator className="bg-white/10 my-4" />
                        <div className="flex justify-between items-center text-xl font-bold mb-8">
                          <span className="text-gray-400">Total</span>
                          <span className="text-gold text-2xl">
                            ${cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0)}
                          </span>
                        </div>
                        <Button 
                          onClick={handleWhatsAppCheckout}
                          className="w-full bg-green-500 hover:bg-green-600 text-white gap-3 h-14 text-lg font-bold rounded-2xl shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-all active:scale-95 overflow-hidden relative group"
                        >
                          <motion.div 
                            className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"
                          />
                          <MessageCircle className="h-6 w-6" />
                          Order via WhatsApp
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-gold transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 rounded-2xl text-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-20" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-bold text-gradient-gold tracking-tighter">
            eSIM GLOBAL
          </Link>
          <p className="text-gray-500 leading-relaxed">
            Revolutionizing travel connectivity with instant, secure, and affordable global eSIM technology.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-500 hover:text-gold transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-500 hover:text-gold transition-colors">Countries</Link>
            <Link to="/regions" className="text-gray-500 hover:text-gold transition-colors">Regions</Link>
            <Link to="/global" className="text-gray-500 hover:text-gold transition-colors">Global</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <div className="flex flex-col space-y-4">
            <p className="text-gray-500">FAQ</p>
            <p className="text-gray-500">Contact Us</p>
            <p className="text-gray-500">Privacy Policy</p>
            <p className="text-gray-500">Terms of Service</p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-gray-500 mb-6">Stay updated on our latest global coverage expansions.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex-1 focus:border-gold outline-none transition-all"
            />
            <Button onClick={() => {}} type="button" size="icon" className="bg-gold text-black rounded-xl hover:bg-gold/80">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-sm">
          © 2026 eSIM GLOBAL. Built for travelers, by travelers.
        </p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/30 relative overflow-x-hidden font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/5 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/5 blur-[150px] rounded-full"
        />
        {/* Particle effect simulation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 1000, 
                y: Math.random() * 1000,
                opacity: Math.random()
              }}
              animate={{ 
                y: [null, -1000],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      <Navbar />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

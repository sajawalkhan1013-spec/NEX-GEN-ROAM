import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cart, removeFromCart, totalItems } = useCart();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
                eSIM GLOBAL
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-gold"
                      : "text-gray-300 hover:text-neon-blue"
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
                <Button variant="ghost" size="icon" className="relative text-white hover:text-gold transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black border-white/10 text-white w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle className="text-gold text-xl">Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex-1 flex flex-col h-[calc(100vh-200px)]">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                      <ShoppingCart className="h-16 w-16 opacity-20" />
                      <p>Your cart is empty</p>
                      <Button className="bg-gold text-black hover:bg-gold/80" asChild>
                        <Link to="/countries">Start Shopping</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <ScrollArea className="flex-1 pr-4">
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm">{item.name}</h4>
                                <p className="text-xs text-gray-400">{item.data} - {item.duration}</p>
                                <p className="text-gold font-bold mt-1">{item.price}</p>
                                <p className="text-[10px] text-gray-500 mt-1">Quantity: {item.quantity}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-500 hover:text-red-500"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                      <div className="pt-4 mt-auto">
                        <Separator className="bg-white/10 my-4" />
                        <div className="flex justify-between items-center text-lg font-bold mb-6">
                          <span>Total</span>
                          <span className="text-gold">
                            ${cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0)}
                          </span>
                        </div>
                        <Button 
                          onClick={handleWhatsAppCheckout}
                          className="w-full bg-green-500 hover:bg-green-600 text-white gap-2 h-12 text-lg font-semibold rounded-xl"
                        >
                          <MessageCircle className="h-5 w-5" />
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
                className="text-gray-300 hover:text-gold"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-gold"
                    : "text-gray-300 hover:text-neon-blue"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent mb-4">
        eSIM GLOBAL
      </h2>
      <p className="text-gray-400 max-w-md mx-auto mb-8">
        Travel the world with instant data connectivity. No roaming fees, no physical SIM cards.
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <Link to="/" className="text-gray-400 hover:text-gold">Home</Link>
        <Link to="/countries" className="text-gray-400 hover:text-gold">Countries</Link>
        <Link to="/regions" className="text-gray-400 hover:text-gold">Regions</Link>
        <Link to="/global" className="text-gray-400 hover:text-gold">Global</Link>
      </div>
      <p className="text-gray-500 text-sm">
        © 2026 eSIM GLOBAL. All rights reserved.
      </p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/30 relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-blue/5 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <Navbar />
      <main className="pt-16 min-h-[calc(100vh-300px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

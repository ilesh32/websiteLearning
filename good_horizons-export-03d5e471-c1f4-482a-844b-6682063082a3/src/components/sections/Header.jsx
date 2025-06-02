
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/03d5e471-c1f4-482a-844b-6682063082a3/fdf384afaa96d51c9cb92621f7264670.png";

const Header = ({ onApplyNow, onJoinWaitlist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#events", label: "Events" },
    { href: "#mentorship", label: "Mentorship" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={LOGO_URL} alt="AI/ML Community Logo" className="h-16 w-auto md:h-20" />
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">{link.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" onClick={onJoinWaitlist} className="border-primary text-primary hover:bg-primary/10">
              Join Waitlist
            </Button>
            <Button onClick={onApplyNow} className="gradient-bg hover:opacity-90">
              Apply Now
            </Button>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map(link => (
                 <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" onClick={() => { onJoinWaitlist(); setIsMenuOpen(false); }} className="w-full border-primary text-primary hover:bg-primary/10">
                  Join Waitlist
                </Button>
                <Button onClick={() => { onApplyNow(); setIsMenuOpen(false); }} className="gradient-bg hover:opacity-90 w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;

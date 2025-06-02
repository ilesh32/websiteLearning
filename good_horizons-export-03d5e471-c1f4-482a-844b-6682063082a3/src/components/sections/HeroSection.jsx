
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ onApplyNow, onJoinWaitlist }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient pt-24 md:pt-0">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-50">
              Accelerate Your <span className="gradient-text">AI/ML Journey</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
              Join a 12-week guided program with expert mentorship, collaborative research, startup support, and investor connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={onApplyNow}
                className="gradient-bg hover:opacity-90 text-lg px-8 py-4 pulse-glow text-primary-foreground"
              >
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={onJoinWaitlist}
                className="text-lg px-8 py-4 glass-effect border-primary text-primary hover:bg-primary/10"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-purple-500/10 rounded-full blur-xl floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-pink-500/10 rounded-full blur-xl floating-animation" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;

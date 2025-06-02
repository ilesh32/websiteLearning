
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = ({ onApplyNow, onJoinWaitlist }) => {
  return (
    <section className="py-20 hero-gradient relative">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-50">
            Ready to Shape the Future of AI?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Don't miss out on this opportunity to accelerate your AI/ML career with hands-on projects, 
            expert mentorship, and real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onApplyNow}
              className="bg-gray-50 text-brand-blue hover:bg-gray-200 text-lg px-8 py-4"
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
    </section>
  );
};

export default CtaSection;

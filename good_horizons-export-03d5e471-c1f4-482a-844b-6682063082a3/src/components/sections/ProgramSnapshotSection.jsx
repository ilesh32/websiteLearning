
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap } from 'lucide-react';

const ProgramSnapshotSection = ({ onApplyNow }) => {
  const snapshotItems = [
    { title: "Duration: 12–14 weeks", description: "Intensive learning period with structured milestones." },
    { title: "Batch Size: 15–20 Participants", description: "Small cohorts for personalized attention and collaboration." },
    { title: "Format: Hybrid (Online + Events)", description: "Flexible learning with in-person networking opportunities." },
    { title: "Team: 5–6 mentors", description: "Industry experts and researchers guiding your journey." },
  ];

  return (
    <section id="mentorship" className="py-20 bg-background/70">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-50">
              Program <span className="gradient-text">Snapshot</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Everything you need to know about our intensive AI/ML program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {snapshotItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-100">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-gray-50">Ready to Transform?</h3>
                  <p className="text-gray-300 mb-6">
                    Join the next generation of AI innovators and make your mark in the industry.
                  </p>
                  <Button 
                    onClick={onApplyNow}
                    className="gradient-bg hover:opacity-90 w-full text-lg py-3 text-primary-foreground"
                  >
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSnapshotSection;

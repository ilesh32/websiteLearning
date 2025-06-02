
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Award, Target } from 'lucide-react';

const stats = [
  { number: "12-14", label: "Weeks Duration", icon: <Clock className="w-7 h-7" /> },
  { number: "15-20", label: "Participants", icon: <Users className="w-7 h-7" /> },
  { number: "5-6", label: "Expert Mentors", icon: <Award className="w-7 h-7" /> },
  { number: "100%", label: "Hands-on Learning", icon: <Target className="w-7 h-7" /> }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background/70">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-50">
            Empowering Future <span className="gradient-text">AI Innovators</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            We are a team of AI professionals dedicated to building a strong open-source and research-driven ecosystem. 
            Our programs are designed for students and professionals looking to go beyond theory and make real impact in the AI world.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-primary to-purple-600 rounded-full text-primary-foreground">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

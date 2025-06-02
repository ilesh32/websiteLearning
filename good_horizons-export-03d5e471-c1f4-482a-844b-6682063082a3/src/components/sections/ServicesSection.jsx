
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Users, Calendar, Search as ResearchIcon, Rocket, TrendingUp, Star, ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Guided Projects",
    description: "Hands-on project-based learning aligned with open-source contributions.",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Mentorship",
    description: "Weekly sessions on AI/ML/LLM fundamentals and OSS guidance.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Sponsored Events",
    description: "Learn and network with the help of our industry sponsors.",
    color: "from-pink-500 to-red-600"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Professional Events",
    description: "Deep-dive workshops, hackathons, and AI leadership panels.",
    color: "from-red-500 to-orange-600"
  },
  {
    icon: <ResearchIcon className="w-8 h-8" />,
    title: "Research Projects",
    description: "Collaborate on real research initiatives with academic and industrial impact.",
    color: "from-orange-500 to-yellow-600"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Startup Mentorship",
    description: "Convert your ideas to prototypes with technical and business support.",
    color: "from-yellow-500 to-green-600"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Investor Connect",
    description: "Showcase your work to AI-focused investors and VCs.",
    color: "from-green-500 to-blue-600"
  }
];

const ServicesSection = ({ onLearnMore }) => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-50">
            Our <span className="gradient-text">Programs & Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning experiences designed to transform you into an AI expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 card-hover scroll-reveal flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 text-primary-foreground`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-100">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              </div>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0 self-start mt-auto"
                onClick={() => onLearnMore(service)}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

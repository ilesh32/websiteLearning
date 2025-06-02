
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/03d5e471-c1f4-482a-844b-6682063082a3/fdf384afaa96d51c9cb92621f7264670.png";

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <Github className="w-6 h-6" />, label: "GitHub" },
    { href: "#", icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
    { href: "#", icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#events", label: "Events" },
    { href: "#mentorship", label: "Mentorship" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: "hello@aimlcommunity.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-5 h-5" />, text: "San Francisco, CA" },
  ];

  return (
    <footer id="contact" className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src={LOGO_URL} alt="AI/ML Community Logo" className="h-16 w-auto" />
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Empowering the next generation of AI talent through hands-on learning, 
              mentorship, and real-world projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-lg font-semibold text-gray-100 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="text-lg font-semibold text-gray-100 mb-5">Contact Info</p>
            <ul className="space-y-3">
              {contactInfo.map(info => (
                <li key={info.text} className="flex items-center space-x-3 text-gray-400 text-sm">
                  {info.icon}
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-100 mb-5">Newsletter</p>
            <p className="text-gray-400 mb-3 text-sm">Stay updated with our latest news and program announcements.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email" className="flex-grow p-2.5 rounded-md bg-input border-border text-sm focus:ring-primary focus:border-primary" />
              <Button type="submit" className="gradient-bg hover:opacity-90 text-primary-foreground text-sm px-4 py-2.5">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI/ML Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

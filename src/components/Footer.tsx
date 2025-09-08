import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/graintheory', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/graintheory', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/graintheory', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@graintheory.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Commercial Photography', href: '#' },
        { name: 'Video Production', href: '#' },
        { name: 'Creative Direction', href: '#' },
        { name: 'Post-Production', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
        { name: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.svg" 
                alt="Grain Theory Logo" 
                className="h-8 w-auto opacity-90"
              />
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed font-body">
              Professional production house specializing in commercial photography and 
              video content that elevates brands and creates lasting impressions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 border border-border hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4 font-display">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group font-body"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline Divider */}
        <div className="my-12">
          <div className="timeline-bar h-px">
            <div className="h-full w-full bg-border" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground font-body">
            © 2024 Grain Theory. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Editor Timeline Footer */}
      <div className="editor-panel-dark border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Project Timeline</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-timeline-pulse" />
                <span>Ready for Production</span>
              </div>
            </div>
            
            <div className="timeline-bar w-32 h-1">
              <div className="h-full w-full bg-primary rounded-full playhead" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
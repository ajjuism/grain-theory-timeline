import React from 'react';
import { Button } from '@/components/ui/button';
import { Timeline } from './Timeline';
import { Mail, Phone, Calendar, ArrowRight, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Timeline Header */}
        <Timeline className="mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 editor-panel px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-timeline-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create 
              <span className="block text-primary">
                Something Amazing?
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your next project. Whether you need commercial photography, 
              video production, or creative direction, we're here to bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@graintheory.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: Calendar, label: 'Response Time', value: 'Within 24 hours' },
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-medium text-foreground">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="editor-panel p-8 hover-glow animate-fade-in">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
              <p className="text-muted-foreground">
                Tell us about your vision and we'll get back to you soon.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Select project type</option>
                  <option>Commercial Photography</option>
                  <option>Video Production</option>
                  <option>Both Photography & Video</option>
                  <option>Creative Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and goals..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2" />
                Send Project Brief
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Timeline indicator */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="timeline-bar h-1 rounded-full">
                <div className="h-full w-3/4 bg-primary rounded-full playhead" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
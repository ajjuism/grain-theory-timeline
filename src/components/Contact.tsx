import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Clock, ArrowRight, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@graintheory.com', href: 'mailto:hello@graintheory.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
              ].map((contact, index) => (
                <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-background/80 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-body">{contact.label}</div>
                        <div className="font-medium text-foreground">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/20 shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-body">{contact.label}</div>
                        <div className="font-medium text-foreground">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="group w-full">
                <Mail className="w-5 h-5 mr-2" />
                Send Quick Message
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full group">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/60 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-display font-medium mb-2">Start Your Project</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Tell us about your vision and we'll get back to you with a proposal.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 text-sm shadow-sm">
                    <option value="">Select project type</option>
                    <option value="photography">Commercial Photography</option>
                    <option value="video">Video Production</option>
                    <option value="both">Photography & Video</option>
                    <option value="creative">Creative Direction</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 resize-none placeholder:text-muted-foreground/60 text-sm shadow-sm"
                    placeholder="Brief description of your project vision and requirements..."
                  />
                </div>

                <Button variant="hero" size="default" className="w-full group text-sm py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Project Brief
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>24h response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>No commitment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
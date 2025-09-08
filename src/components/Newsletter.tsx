import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="bg-primary rounded" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="space-y-6 mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-tight">
              Stay in the <span className="text-primary">Loop</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Get insights on visual storytelling, industry trends, behind-the-scenes content, 
              and updates on our latest projects delivered to your inbox.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/50"
                />
              </div>
              <Button variant="hero" type="submit" className="group px-6 py-3">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Monthly insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

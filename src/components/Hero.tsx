import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Timeline } from './Timeline';
import { ContactDialog } from '@/components/ContactDialog';
import { ArrowRight, Play, Camera, Video, Award, Users } from 'lucide-react';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const navigate = useNavigateWithScroll();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Grain Theory Production"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Timeline Header */}
      <div className="absolute top-20 left-0 right-0 z-10 hidden md:block">
        <Timeline className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="lg:col-span-3 space-y-8 animate-fade-in">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold leading-tight">
                  <span className="block text-foreground">
                    Grain
                  </span>
                  <span className="block text-primary">
                    Theory
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Professional photography and video production for brands that demand excellence.
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
                We create compelling visual content that drives results. From concept to delivery, 
                our team brings your vision to life with precision and creativity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group text-base px-8 py-4"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  Start Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group text-base px-8 py-4"
                  onClick={() => navigate('/projects')}
                >
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Right Side - Services */}
            <div className="lg:col-span-2 space-y-6 animate-slide-in-left mb-12 lg:mb-0">
              {[
                { 
                  icon: Camera, 
                  title: 'Photography', 
                  description: 'Commercial and brand photography that captures attention.'
                },
                { 
                  icon: Video, 
                  title: 'Video Production', 
                  description: 'From concept to post-production, complete video solutions.'
                },
                { 
                  icon: Award, 
                  title: 'Creative Direction', 
                  description: 'Strategic visual storytelling aligned with your brand.'
                },
                { 
                  icon: Users, 
                  title: 'Collaboration', 
                  description: 'Working seamlessly with your team throughout the process.'
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="editor-panel p-6 hover:bg-editor-panel-dark transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-body">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
    </section>
  );
};
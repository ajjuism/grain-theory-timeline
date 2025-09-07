import React from 'react';
import { Button } from '@/components/ui/button';
import { Timeline } from './Timeline';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Grain Theory Production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Timeline Header */}
      <div className="absolute top-20 left-0 right-0 z-10">
        <Timeline className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 editor-panel px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-timeline-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Production House
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block gradient-accent bg-clip-text text-transparent">
              Grain Theory
            </span>
            <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-2 font-normal">
              Visual Storytelling Redefined
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Creating cinematic experiences that captivate audiences and elevate brands through 
            innovative photography and video production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Watch Reel
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { number: '50+', label: 'Projects' },
              { number: '25+', label: 'Clients' },
              { number: '3+', label: 'Years' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Timeline */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="timeline-bar h-2 rounded-full">
            <div className="h-full w-1/4 bg-primary rounded-full playhead" />
          </div>
        </div>
      </div>
    </section>
  );
};
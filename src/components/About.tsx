import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Video, Award, Users } from 'lucide-react';

export const About = () => {
  const services = [
    {
      icon: Camera,
      title: 'Commercial Photography',
      description: 'Professional photography for brands, products, and corporate needs',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'From concept to completion, creating compelling visual narratives',
    },
    {
      icon: Award,
      title: 'Creative Direction',
      description: 'Strategic visual storytelling that aligns with your brand vision',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working closely with your team to bring ideas to life',
    },
  ];

  return (
    <section id="about" className="pt-16 sm:pt-20 pb-12 sm:pb-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="bg-primary/20 rounded" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 editor-panel px-4 py-2 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-timeline-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-4 sm:mb-6">
              Crafting Visual 
              <span className="block text-primary">
                Excellence
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-8 leading-relaxed font-body">
              At Grain Theory, we believe every frame tells a story. Founded on the principle 
              that visual content should not just capture attention but create lasting 
              emotional connections, we specialize in high-end commercial photography and 
              video production.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-body">
              Our approach combines technical expertise with creative vision, delivering 
              content that elevates brands and drives meaningful engagement with audiences.
            </p>

          </div>

          {/* Right Content - Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:mt-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 sm:p-6 hover:border-primary/30 hover:bg-background/70 transition-all duration-300 group animate-fade-in w-full mx-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300 font-display">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
import React from 'react';
import { Button } from '@/components/ui/button';
import { Timeline } from './Timeline';
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
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="bg-primary/20 rounded" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Timeline Header */}
        <Timeline className="mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 editor-panel px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-timeline-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Crafting Visual 
              <span className="block text-primary">
                Excellence
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              At Grain Theory, we believe every frame tells a story. Founded on the principle 
              that visual content should not just capture attention but create lasting 
              emotional connections, we specialize in high-end commercial photography and 
              video production.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach combines technical expertise with creative vision, delivering 
              content that elevates brands and drives meaningful engagement with audiences.
            </p>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="editor-panel p-6 hover:bg-editor-panel-dark transition-all duration-300 hover-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', suffix: '' },
              { number: '25+', label: 'Happy Clients', suffix: '' },
              { number: '100%', label: 'Satisfaction Rate', suffix: '' },
              { number: '3+', label: 'Years Experience', suffix: '' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
    </section>
  );
};
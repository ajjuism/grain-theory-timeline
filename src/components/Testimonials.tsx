import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Modern Brands Co.",
    content: "Grain Theory transformed our brand vision into stunning visual content. Their attention to detail and creative approach exceeded our expectations. The team's professionalism and ability to capture our essence was remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "TechFlow Innovations",
    content: "Working with Grain Theory was a game-changer for our product launch. Their video production quality and storytelling ability helped us connect with our audience in ways we never imagined possible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Marketing Manager",
    company: "Sustainable Solutions",
    content: "The photography work delivered by Grain Theory elevated our entire marketing campaign. Every shot was perfectly composed and aligned with our brand values. Truly exceptional creative partners.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-mono text-primary">
            <Star className="w-4 h-4" />
            Client Stories
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Grain Theory.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="group animate-fade-in bg-card/60 backdrop-blur-sm border border-primary/15 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/60" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground font-body leading-relaxed mb-8 text-sm">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm font-display">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Happy Clients', value: '150+' },
              { label: 'Projects Completed', value: '300+' },
              { label: 'Years Experience', value: '8+' },
              { label: 'Average Rating', value: '4.9' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-display font-medium text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body">
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

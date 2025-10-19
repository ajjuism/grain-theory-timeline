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
    name: "Athul",
    role: "Head of Brand & Community",
    company: "Cult",
    content: "​​Have worked with Navaneeth on a large number of projects at cult across lifestyle shoots, event coverage & video production. He’s a top notch collaborator, and brings in a keen eye for creative expression and agility. In some of our most unstructured events involving India’s top celebrities, he has found a way to capture moments that have travelled virally on the internet. He’s quick to grasp what the brand is looking to achieve, and finds a way to transpire that into execution with minimal back & forths. Outstanding partner to have for any brand, and I wish him the very best",
    rating: 5,
    image: "/src/assets/thumbnails/atul.jpeg"
  },
  {
    id: 2,
    name: "Deepti",
    role: "Sr. Manager - Marketing, Product Strategy & Consumer Insights",
    company: "The Lalit Ashok",
    content: "Working with Navneeth was an absolute breeze. He's sharp, reliable, and genuinely makes the whole process enjoyable. The photography and videography were completely safe in his hands during our project at The Lalit Ashok, and everything from planning to delivery was perfectly on point. He's open to ideas, super easy to work with, and brings this calm, fun energy that makes everyone around him do their best. Truly someone you'd want on your team.",
    rating: 5,
    image: "/src/assets/thumbnails/deepti.jpeg"
  },
  {
    id: 3,
    name: "Krishna",
    role: "CEO & Founder",
    company: "Weavers Stores",
    content: "I'm thoroughly impressed with the photography services provided for Weavers Stores' brand catalogue and campaign shoot. The images captured are of high quality, showcasing our clothing line in a captivating and visually appealing manner. The way the clothes are presented makes them look really nice, which has significantly enhanced our website and social media presence. Navneet's attention to detail, creativity and professionalism were evident throughout the shoot. I highly recommend his services to anyone looking for exceptional product photography.",
    rating: 5,
    image: "/src/assets/thumbnails/krishna.jpeg"
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
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-primary/20 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-center"
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

      </div>
    </section>
  );
};

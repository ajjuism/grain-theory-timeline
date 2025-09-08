import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: "What types of projects do you specialize in?",
      answer: "We specialize in commercial photography, video production, and creative direction for brands, products, and corporate clients. Our expertise spans from product photography and brand campaigns to promotional videos and visual storytelling content."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Simple photography sessions typically take 1-2 weeks from concept to delivery, while comprehensive video productions can take 3-6 weeks. We provide detailed timelines during our initial consultation to ensure clear expectations."
    },
    {
      question: "Do you offer revisions on your work?",
      answer: "Yes! We include up to 3 rounds of revisions in all our project packages to ensure the final deliverables meet your vision. Additional revisions can be accommodated for a nominal fee if needed."
    },
    {
      question: "What's included in your photography packages?",
      answer: "Our photography packages include pre-production planning, the photo shoot, professional editing, color correction, and high-resolution final images in multiple formats. We also provide usage rights and can accommodate specific licensing requirements."
    },
    {
      question: "Can you work within our brand guidelines?",
      answer: "Absolutely! We have extensive experience working within established brand guidelines and can adapt our creative approach to maintain consistency with your brand identity while delivering fresh, engaging content."
    },
    {
      question: "Do you travel for projects?",
      answer: "Yes, we're available for projects nationwide and internationally. Travel costs are discussed during project planning and can be included in the overall project budget."
    },
    {
      question: "What equipment and software do you use?",
      answer: "We use professional-grade cameras, lighting equipment, and industry-standard software including Adobe Creative Suite. Our equipment is regularly updated to ensure we're delivering the highest quality results using the latest technology."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We provide custom quotes based on project scope, timeline, and deliverables. Our pricing is transparent and includes all discussed services. We're happy to work within budget constraints and can suggest alternatives to meet your needs."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 editor-panel px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
            Got <span className="text-primary">Questions?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and approach to visual content creation.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/60 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 font-display text-lg py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed font-body pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-display font-medium mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4 font-body">
                We're here to help! Reach out to us directly for personalized answers.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

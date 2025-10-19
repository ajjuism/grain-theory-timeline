import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';
import { ContactDialog } from '@/components/ContactDialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const navigate = useNavigateWithScroll();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="mb-4 -ml-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about our services, process, and policies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 py-6">
                    <span className="font-display font-medium text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 font-body">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-12 hover:border-primary/20 transition-all duration-300">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-display font-medium leading-tight">
                    Still have <span className="text-primary">questions?</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We're here to help! Get in touch with our team for personalized answers to your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="px-8 py-4 text-base"
                      onClick={() => setIsContactDialogOpen(true)}
                    >
                      Start Your Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8 py-4 text-base"
                      onClick={() => navigate('/projects')}
                    >
                      View Our Work
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <ContactDialog 
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </div>
  );
};

export default FAQ;

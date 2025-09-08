import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { BrandShowcase } from '@/components/BrandShowcase';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandShowcase />
        <ProjectShowcase />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

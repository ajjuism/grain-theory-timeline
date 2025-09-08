import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';

export const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Brand Identity Campaign',
      category: 'Photography',
      client: 'Tech Startup',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      isVideo: false,
      year: '2024'
    },
    {
      id: 2,
      title: 'Corporate Documentary',
      category: 'Video',
      client: 'Fortune 500',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      isVideo: true,
      year: '2024'
    },
    {
      id: 3,
      title: 'Product Launch Series',
      category: 'Photography',
      client: 'Consumer Brand',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      isVideo: false,
      year: '2023'
    },
    {
      id: 4,
      title: 'Executive Profiles',
      category: 'Photography',
      client: 'Investment Firm',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      isVideo: false,
      year: '2024'
    },
    {
      id: 5,
      title: 'Brand Story Film',
      category: 'Video',
      client: 'Luxury Goods',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      isVideo: true,
      year: '2023'
    },
    {
      id: 6,
      title: 'Event Documentation',
      category: 'Video',
      client: 'Conference',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      isVideo: true,
      year: '2024'
    },
  ];

  const filters = ['All', 'Photography', 'Video'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 pb-8 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="bg-primary rounded" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
            Selected <span className="text-primary">Work</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recent projects showcasing our approach to visual storytelling and brand development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex bg-muted/30 backdrop-blur-sm border border-border rounded-full p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`
                  relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === filter 
                    ? 'text-background bg-foreground shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }
                `}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="absolute inset-0 rounded-full bg-primary/10 -z-10" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                client={project.client}
                year={project.year}
                imageUrl={project.imageUrl}
                isVideo={project.isVideo}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-12 hover:border-primary/20 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-display font-medium leading-tight">
                  Ready to create something 
                  <span className="text-primary"> exceptional</span>?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how we can bring your vision to life with the same attention to detail and creative excellence.
                </p>
                <div className="pt-2">
                  <Button variant="hero" size="lg" className="group px-8 py-4 text-base">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
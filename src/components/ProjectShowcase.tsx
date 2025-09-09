import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects, categories } from '@/data/projects';

export const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filters = categories;

  const featuredProjects = projects.filter(project => project.featured).slice(0, 6);
  const displayProjects = activeFilter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
          {displayProjects.map((project, index) => (
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
                onClick={() => navigate(`/projects/${project.id}`)}
              />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-12 hover:border-primary/20 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-display font-medium leading-tight">
                  Explore our complete 
                  <span className="text-primary"> portfolio</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover more of our work across photography and video projects, with detailed case studies and behind-the-scenes insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="group px-8 py-4 text-base"
                    onClick={() => navigate('/projects')}
                  >
                    View All Projects
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 text-base"
                    onClick={() => navigate('/#contact')}
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
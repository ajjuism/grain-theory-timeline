import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Grid3X3, Filter } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

export const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Fashion Editorial',
      category: 'Photography',
      imageUrl: project1,
      isVideo: false,
    },
    {
      id: 2,
      title: 'Corporate Video',
      category: 'Video',
      imageUrl: project2,
      isVideo: true,
    },
    {
      id: 3,
      title: 'Product Showcase',
      category: 'Photography',
      imageUrl: project3,
      isVideo: false,
    },
    {
      id: 4,
      title: 'Brand Documentary',
      category: 'Video',
      imageUrl: project2,
      isVideo: true,
    },
    {
      id: 5,
      title: 'Commercial Portrait',
      category: 'Photography',
      imageUrl: project1,
      isVideo: false,
    },
    {
      id: 6,
      title: 'Event Coverage',
      category: 'Video',
      imageUrl: project3,
      isVideo: true,
    },
  ];

  const filters = ['All', 'Photography', 'Video'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 editor-panel px-4 py-2 rounded-full mb-6">
            <Grid3X3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Work</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of visual stories crafted for forward-thinking brands
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="editor-panel p-1 rounded-lg inline-flex">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "timeline" : "ghost"}
                size="sm"
                className={`transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground shadow-glow" 
                    : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                <Filter className="w-3 h-3 mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                isVideo={project.isVideo}
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <Grid3X3 className="w-4 h-4 ml-2 transition-transform group-hover:rotate-90" />
          </Button>
        </div>
      </div>
    </section>
  );
};
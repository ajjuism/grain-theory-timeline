import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  client: string;
  year: string;
  imageUrl: string;
  isVideo?: boolean;
  className?: string;
}

export const ProjectCard = ({ 
  title, 
  category, 
  client,
  year,
  imageUrl, 
  isVideo = false,
  className = "" 
}: ProjectCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300 hover-glow ${className}`}>
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Video Play Button */}
        {isVideo && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="hero" size="icon" className="rounded-full shadow-2xl">
              <Play className="w-6 h-6" />
            </Button>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="editor-panel px-3 py-1 text-xs font-medium text-foreground rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4">
          <span className="text-xs font-mono text-foreground/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
            {year}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Content */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button variant="ghost" size="sm" className="text-white hover:text-primary w-full justify-between">
            View Project
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <div className="space-y-2">
          <h3 className="font-display font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{client}</span>
            <span className="text-muted-foreground font-mono">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
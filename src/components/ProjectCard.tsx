import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  isVideo?: boolean;
  className?: string;
}

export const ProjectCard = ({ 
  title, 
  category, 
  imageUrl, 
  isVideo = false,
  className = "" 
}: ProjectCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-card border border-border hover-glow ${className}`}>
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Video Overlay */}
        {isVideo && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="hero" size="icon" className="rounded-full">
              <Play className="w-6 h-6" />
            </Button>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="editor-panel px-3 py-1 text-xs font-medium text-foreground rounded-full">
            {category}
          </span>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Project Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-muted-foreground">{category}</span>
          <Button variant="ghost" size="sm" className="text-xs">
            <Eye className="w-3 h-3 mr-1" />
            View
          </Button>
        </div>
      </div>
      
      {/* Editor-style timeline bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-editor-timeline">
        <div className="h-full w-1/3 bg-primary playhead" />
      </div>
    </div>
  );
};
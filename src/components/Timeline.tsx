import React from 'react';

interface TimelineProps {
  className?: string;
}

export const Timeline = ({ className = "" }: TimelineProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Timeline container */}
      <div className="timeline-bar h-8 p-2 flex items-center justify-between">
        {/* Timeline markers */}
        <div className="flex-1 relative">
          <div className="flex justify-between h-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-2 bg-muted-foreground/50" />
                <span className="text-xs text-muted-foreground mt-1 font-mono">
                  {String(i * 5).padStart(2, '0')}:00
                </span>
              </div>
            ))}
          </div>
          {/* Playhead */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-primary animate-timeline-pulse" />
        </div>
        
        {/* Timeline controls */}
        <div className="flex items-center gap-2 ml-4">
          <button className="w-2 h-2 rounded-full bg-muted-foreground hover:bg-primary transition-colors" />
          <button className="w-2 h-2 rounded-full bg-muted-foreground hover:bg-primary transition-colors" />
          <button className="w-2 h-2 rounded-full bg-muted-foreground hover:bg-primary transition-colors" />
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface ProjectCardSkeletonProps {
  className?: string;
  viewMode?: 'grid' | 'list';
}

export const ProjectCardSkeleton = ({ 
  className = "",
  viewMode = 'grid'
}: ProjectCardSkeletonProps) => {
  if (viewMode === 'list') {
    return (
      <div className={`group relative overflow-hidden rounded-lg bg-background border border-border ${className}`}>
        <div className="flex gap-6 p-6">
          {/* Project Image Skeleton */}
          <div className="relative aspect-[4/3] w-48 flex-shrink-0 overflow-hidden rounded-lg">
            <Skeleton className="w-full h-full" />
          </div>
          
          {/* Project Info Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-5 w-12 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-14 rounded-full" />
              <Skeleton className="h-5 w-18 rounded-full" />
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-28 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`skeleton-container group relative overflow-hidden rounded-lg bg-background border border-border ${className}`}>
      {/* Project Image Skeleton */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Skeleton className="w-full h-full" />
        
        {/* Category Badge Skeleton */}
        <div className="absolute top-4 left-4">
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>

        {/* Year Badge Skeleton */}
        <div className="absolute top-4 right-4">
          <Skeleton className="h-6 w-12 rounded" />
        </div>
      </div>
      
      {/* Project Info Skeleton */}
      <div className="p-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

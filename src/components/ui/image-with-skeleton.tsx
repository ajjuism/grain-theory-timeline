import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
  showErrorState?: boolean;
}

export const ImageWithSkeleton = ({
  src,
  alt,
  className,
  skeletonClassName,
  containerClassName,
  onLoad,
  onError,
  showErrorState = true,
  ...props
}: ImageWithSkeletonProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [src]);

  // Preload image for better performance
  useEffect(() => {
    if (!src) return;
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      setImageError(true);
      onError?.();
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton Loading State */}
      {!imageLoaded && !imageError && (
        <div 
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            skeletonClassName
          )} 
        />
      )}
      
      {/* Error State */}
      {imageError && showErrorState && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-muted-foreground text-sm text-center p-4">
            <div className="text-lg mb-1">📷</div>
            <div>Failed to load image</div>
          </div>
        </div>
      )}
      
      {/* Actual Image */}
      <img 
        src={src} 
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          imageLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};

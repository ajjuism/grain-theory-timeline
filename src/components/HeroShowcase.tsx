import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import { motion, AnimatePresence } from 'framer-motion';

interface ShowcaseImage {
  src: string;
  alt: string;
  category: string;
  client: string;
}

export const HeroShowcase = () => {
  // Combined curated image collection from all projects - moved to top
  const images: ShowcaseImage[] = [
    { src: '/assets/photography/gamekraft/DSC09914.jpg', alt: 'GameKraft Event Photography', category: 'Event', client: 'GameKraft' },
    { src: '/assets/photography/hyatt/Room 1.jpg', alt: 'Hyatt Hotel Photography', category: 'Hospitality', client: 'Hyatt' },
    { src: '/assets/photography/lalit/day(1)-11.jpg', alt: 'Lalit Hotel Photography', category: 'Hospitality', client: 'The Lalit' },
    { src: '/assets/photography/bigbang/Ambience-1.jpg', alt: 'BigBang Production', category: 'Event', client: 'BigBang' },
    { src: '/assets/photography/cultaprilfools/DSC04690.jpg', alt: 'Cult April Fools Production', category: 'Brand', client: 'Cult' },
    { src: '/assets/photography/redsheer/DSC07699.jpg', alt: 'RedSheer Production', category: 'Corporate', client: 'RedSheer' },
    { src: '/assets/photography/reset/PAT09871.jpg', alt: 'Reset Production', category: 'Brand', client: 'Reset' },
    { src: '/assets/photography/cultaprilfools/DSC05185.jpg', alt: 'Cult Creative Direction', category: 'Brand', client: 'Cult' },
    { src: '/assets/photography/gamekraft/DSC02170.jpg', alt: 'GameKraft Creative Direction', category: 'Event', client: 'GameKraft' },
    { src: '/assets/photography/bigj/BigJ-19.jpg', alt: 'BigJ Creative Direction', category: 'Portrait', client: 'BigJ' },
    { src: '/assets/photography/liquiddesign/PAT00253.jpg', alt: 'Liquid Design Photography', category: 'Corporate', client: 'Liquid Design' },
    { src: '/assets/photography/marriot/1-11.jpg', alt: 'Marriott Hotel Photography', category: 'Hospitality', client: 'Marriott' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isMobile, setIsMobile] = useState(false);
  const [cardStack, setCardStack] = useState<number[]>([]);

  const currentImage = images[currentImageIndex];
  const nextImage = images[(currentImageIndex + 1) % images.length];
  const prevImage = images[(currentImageIndex - 1 + images.length) % images.length];

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize card stack
  useEffect(() => {
    const initializeStack = () => {
      const stack = [];
      for (let i = 0; i < 5; i++) {
        stack.push((currentImageIndex + i) % images.length);
      }
      setCardStack(stack);
    };
    
    initializeStack();
  }, [currentImageIndex, images.length]);

  // Auto-advance images - optimized timing for smooth flow
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      handleNextImage();
    }, 3400); // Slightly increased for better rhythm

    return () => clearInterval(interval);
  }, [currentImageIndex, isAutoPlaying, isTransitioning]);

  const handleNextImage = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 800); // Slightly longer for smoother completion
  };

  const handlePrevImage = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setDirection('prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 3500);
    }, 800); // Slightly longer for smoother completion
  };

  const handleImageSelect = (index: number) => {
    if (index === currentImageIndex || isTransitioning) return;
    
    setIsAutoPlaying(false);
    setDirection(index > currentImageIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 3500);
    }, 800); // Slightly longer for smoother completion
  };

  // Card positions for deck effect
  const getCardPosition = (stackIndex: number) => {
    if (isMobile) {
      // Mobile horizontal layout
      const positions = [
        { x: -120, scale: 0.85, opacity: 0.6, zIndex: 1, blur: 1 }, // Left
        { x: 0, scale: 1, opacity: 1, zIndex: 3, blur: 0 },        // Center (active)
        { x: 120, scale: 0.85, opacity: 0.6, zIndex: 1, blur: 1 }, // Right
      ];
      return positions[stackIndex] || { x: 0, scale: 0.7, opacity: 0.3, zIndex: 0, blur: 2 };
    } else {
      // Desktop vertical layout
      const positions = [
        { y: -160, scale: 0.85, opacity: 0.6, zIndex: 1, blur: 1 }, // Top
        { y: 0, scale: 1, opacity: 1, zIndex: 3, blur: 0 },         // Center (active)
        { y: 160, scale: 0.85, opacity: 0.6, zIndex: 1, blur: 1 },  // Bottom
      ];
      return positions[stackIndex] || { y: 0, scale: 0.7, opacity: 0.3, zIndex: 0, blur: 2 };
    }
  };

  return (
    <div className="relative h-[700px] md:h-[700px] group">
      {/* Desktop: Vertical Stack Container */}
      <div className="relative h-full overflow-hidden hidden md:block">
        <div className="relative h-full flex flex-col items-center justify-center px-20">
          <AnimatePresence mode="popLayout">
            {cardStack.slice(0, 3).map((imageIndex, stackIndex) => {
              const image = images[imageIndex];
              const isActive = stackIndex === 1; // Middle card is active
              const position = getCardPosition(stackIndex);
              
              return (
                <motion.div
                  key={`desktop-${imageIndex}`}
                  className={`
                    absolute w-full max-w-lg cursor-pointer
                    ${isActive ? 'hover:scale-[1.02]' : 'hover:scale-[0.88] hover:opacity-80'}
                  `}
                   initial={{ 
                     y: direction === 'next' ? -180 : 180,
                     scale: 0.8,
                     opacity: 0
                   }}
                   animate={{
                     y: position.y || 0,
                     scale: position.scale,
                     opacity: position.opacity,
                     filter: `blur(${position.blur}px)`,
                   }}
                   exit={{
                     y: direction === 'next' ? 180 : -180,
                     scale: 0.8,
                     opacity: 0,
                   }}
                   transition={{
                     type: "tween",
                     ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for buttery smoothness
                     duration: 0.75
                   }}
                  style={{ zIndex: position.zIndex }}
                  onClick={() => {
                    if (!isActive) {
                      handleImageSelect(imageIndex);
                    }
                  }}
                >
                  <div className={`
                    relative h-[260px] rounded-2xl overflow-hidden transition-all duration-500
                    ${isActive 
                      ? 'bg-card border-2 border-primary/30 shadow-xl shadow-primary/20' 
                      : 'bg-card/70 border border-border/40 shadow-lg'
                    }
                  `}>
                     <ImageWithSkeleton
                       src={image.src}
                       alt={image.alt}
                       className="w-full h-full object-cover"
                       containerClassName="w-full h-full"
                       skeletonClassName="bg-muted/50"
                     />
                    
                    {/* Gradient Overlay */}
                    <div className={`
                      absolute inset-0 transition-all duration-500
                      ${isActive 
                        ? 'bg-gradient-to-t from-black/70 via-transparent to-transparent' 
                        : 'bg-gradient-to-t from-black/90 via-black/50 to-transparent'
                      }
                    `} />
                    
                    {/* Card Info - Only show on active card */}
                    {isActive && (
                       <motion.div 
                         className="absolute bottom-4 left-4 right-4"
                         initial={{ opacity: 0, y: 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ 
                           delay: 0.4,
                           type: "tween",
                           ease: [0.25, 0.46, 0.45, 0.94],
                           duration: 0.5
                         }}
                       >
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1.5 bg-primary/25 text-primary text-sm font-medium rounded-full backdrop-blur-sm border border-primary/40">
                            {image.category}
                          </span>
                          <span className="text-white/95 text-base font-medium">
                            {image.client}
                          </span>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Non-active card overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/40" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Center Line Indicator */}
        <div className="absolute left-20 right-20 top-1/2 h-px bg-primary/30 transform -translate-y-1/2 opacity-40" />
      </div>

      {/* Mobile: Horizontal Stack Container */}
      <div className="relative h-full overflow-hidden md:hidden">
        <div className="relative h-full flex items-center justify-center px-16">
          <AnimatePresence mode="popLayout">
            {cardStack.slice(0, 3).map((imageIndex, stackIndex) => {
              const image = images[imageIndex];
              const isActive = stackIndex === 1; // Middle card is active
              const position = getCardPosition(stackIndex);
              
              return (
                <motion.div
                  key={`mobile-${imageIndex}`}
                  className={`
                    absolute h-full max-h-[450px] w-[300px] cursor-pointer
                    ${isActive ? 'hover:scale-[1.02]' : 'hover:scale-[0.88] hover:opacity-80'}
                  `}
                   initial={{ 
                     x: direction === 'next' ? -180 : 180,
                     scale: 0.8,
                     opacity: 0
                   }}
                   animate={{
                     x: position.x || 0,
                     scale: position.scale,
                     opacity: position.opacity,
                     filter: `blur(${position.blur}px)`,
                   }}
                   exit={{
                     x: direction === 'next' ? 180 : -180,
                     scale: 0.8,
                     opacity: 0,
                   }}
                   transition={{
                     type: "tween",
                     ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for buttery smoothness
                     duration: 0.75
                   }}
                  style={{ zIndex: position.zIndex }}
                  onClick={() => {
                    if (!isActive) {
                      handleImageSelect(imageIndex);
                    }
                  }}
                >
                  <div className={`
                    relative h-full rounded-2xl overflow-hidden transition-all duration-500
                    ${isActive 
                      ? 'bg-card border-2 border-primary/30 shadow-xl shadow-primary/20' 
                      : 'bg-card/70 border border-border/40 shadow-lg'
                    }
                  `}>
                     <ImageWithSkeleton
                       src={image.src}
                       alt={image.alt}
                       className="w-full h-full object-cover"
                       containerClassName="w-full h-full"
                       skeletonClassName="bg-muted/50"
                     />
                    
                    {/* Gradient Overlay */}
                    <div className={`
                      absolute inset-0 transition-all duration-500
                      ${isActive 
                        ? 'bg-gradient-to-t from-black/70 via-transparent to-transparent' 
                        : 'bg-gradient-to-t from-black/90 via-black/50 to-transparent'
                      }
                    `} />
                    
                    {/* Card Info - Only show on active card */}
                    {isActive && (
                       <motion.div 
                         className="absolute bottom-4 left-4 right-4"
                         initial={{ opacity: 0, y: 15 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ 
                           delay: 0.4,
                           type: "tween",
                           ease: [0.25, 0.46, 0.45, 0.94],
                           duration: 0.5
                         }}
                       >
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1.5 bg-primary/25 text-primary text-sm font-medium rounded-full backdrop-blur-sm border border-primary/40">
                            {image.category}
                          </span>
                          <span className="text-white/95 text-base font-medium">
                            {image.client}
                          </span>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Non-active card overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/40" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevImage}
            className="w-14 h-14 bg-black/40 hover:bg-black/60 text-white border border-white/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsAutoPlaying(false);
              handleNextImage();
              setTimeout(() => setIsAutoPlaying(true), 4000);
            }}
            className="w-14 h-14 bg-black/40 hover:bg-black/60 text-white border border-white/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Center Line Indicator - Vertical for mobile */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/20 transform -translate-x-1/2 opacity-30" />
      </div>
    </div>
  );
};

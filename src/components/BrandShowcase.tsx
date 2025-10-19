import React from 'react';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';

interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Brand 1",
    logo: "/assets/logos/Group 1.png",
    category: "Client"
  },
  {
    id: 2,
    name: "Brand 2",
    logo: "/assets/logos/Group 2.png",
    category: "Client"
  },
  {
    id: 3,
    name: "Brand 3",
    logo: "/assets/logos/Group 3.png",
    category: "Client"
  },
  {
    id: 4,
    name: "Brand 4",
    logo: "/assets/logos/Group 4.png",
    category: "Client"
  },
  {
    id: 5,
    name: "Brand 5",
    logo: "/assets/logos/Group 5.png",
    category: "Client"
  },
  {
    id: 7,
    name: "Brand 7",
    logo: "/assets/logos/Group 7.png",
    category: "Client"
  },
  {
    id: 9,
    name: "Brand 9",
    logo: "/assets/logos/Group 9.png",
    category: "Client"
  },
  {
    id: 10,
    name: "Brand 10",
    logo: "/assets/logos/Group 10.png",
    category: "Client"
  }
];

export const BrandShowcase = () => {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="pt-16 pb-20 bg-background border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-display font-medium text-muted-foreground">
            Trusted by leading brands
          </h2>
        </div>

        {/* Animated Logo Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8"
              >
                <ImageWithSkeleton
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  containerClassName="w-full h-full flex items-center justify-center"
                  showErrorState={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

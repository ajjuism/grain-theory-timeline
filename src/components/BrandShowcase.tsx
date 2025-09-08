import React from 'react';

interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "TechFlow",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
    category: "Technology"
  },
  {
    id: 2,
    name: "Modern Brands",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=100&fit=crop",
    category: "Fashion"
  },
  {
    id: 3,
    name: "Sustainable Solutions",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    category: "Environment"
  },
  {
    id: 4,
    name: "Creative Studio",
    logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=100&fit=crop",
    category: "Design"
  },
  {
    id: 5,
    name: "FinanceFlow",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop",
    category: "Finance"
  },
  {
    id: 6,
    name: "HealthTech",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
    category: "Healthcare"
  },
  {
    id: 7,
    name: "EcoVentures",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop",
    category: "Startups"
  },
  {
    id: 8,
    name: "Global Enterprises",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
    category: "Enterprise"
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
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center mx-8"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

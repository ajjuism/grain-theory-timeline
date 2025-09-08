import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`
      fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-background/80 backdrop-blur-md border border-border/50 shadow-lg' 
        : 'bg-background/95 backdrop-blur-sm border border-border/30'
      }
      rounded-2xl
    `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Grain Theory Logo" 
              className={`
                w-auto transition-all duration-300
                ${isScrolled ? 'h-5' : 'h-6'}
                opacity-90 hover:opacity-100
              `}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-all duration-300 relative group text-sm font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="sm" 
              className={`
                transition-all duration-300 text-sm px-6
                ${isScrolled ? 'py-2' : 'py-2.5'}
              `}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`
              md:hidden p-2 rounded-lg transition-all duration-300
              ${isScrolled 
                ? 'hover:bg-muted/80' 
                : 'hover:bg-muted/60'
              }
            `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 mt-4 animate-fade-in">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-3 w-full text-sm">
                Start Project
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
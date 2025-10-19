import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigateWithScroll } from "@/hooks/use-navigate-with-scroll";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigateWithScroll();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary)) 0%, transparent 40%),
                           radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 40%),
                           radial-gradient(circle at 40% 40%, hsl(var(--primary)) 0%, transparent 30%)`,
          backgroundSize: '800px 800px'
        }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Main 404 Content */}
        <div className="space-y-6 animate-fade-in">
          {/* Clean 404 Display */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold leading-none text-primary/15 select-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Frame Not Found
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-body">
              Looks like this shot didn't make it into our final cut. The page you're looking for 
              seems to have been moved, deleted, or never existed in our production timeline.
            </p>
            {location.pathname && (
              <div className="editor-panel p-3 max-w-sm mx-auto mt-4">
                <p className="text-xs text-muted-foreground font-mono">
                  Attempted URL: <span className="text-destructive">{location.pathname}</span>
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="default" 
              className="group px-6 py-2"
              onClick={() => navigate('/')}
            >
              <Home className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Back to Home
            </Button>
            
            <Button 
              variant="outline" 
              size="default" 
              className="group px-6 py-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
            
            <Button 
              variant="ghost" 
              size="default" 
              className="group px-6 py-2"
              onClick={() => navigate('/projects')}
            >
              <Search className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Browse Projects
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something specific? Try these popular sections:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto">
              {[
                { label: 'Portfolio', path: '/projects', icon: Search },
                { label: 'About Us', path: '/#about', icon: Home },
                { label: 'Contact', path: '/#contact', icon: Mail },
                { label: 'Home', path: '/', icon: Home },
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.path)}
                  className="editor-panel p-3 hover:bg-editor-panel-dark transition-all duration-300 group text-center"
                >
                  <link.icon className="w-5 h-5 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotFound;

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectCardSkeleton } from '@/components/ProjectCardSkeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Search, Filter, Grid, List, Play, ExternalLink } from 'lucide-react';
import { projects, categories, tags, getProjectsByCategory, getProjectsByTag } from '@/data/projects';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';

const ProjectListing = () => {
  const navigate = useNavigateWithScroll();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const filteredProjects = useMemo(() => {
    let filtered = getProjectsByCategory(selectedCategory);

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCategory, selectedTags, searchQuery]);

  // Handle initial load
  React.useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTag = (tag: string) => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 300);
  };

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 300);
  };

  const clearAllFilters = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory('All');
      setSelectedTags([]);
      setSearchQuery('');
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 300);
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our complete collection of visual storytelling projects across photography and video.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Sidebar Filters */}
              <aside className="lg:w-80 space-y-8">
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  
                  {/* Search */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Search Projects</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by title, client, or tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Categories */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={`
                            w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200
                            ${selectedCategory === category 
                              ? 'bg-primary text-primary-foreground' 
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }
                          `}
                        >
                          {category}
                          <span className="float-right text-xs opacity-60">
                            {getProjectsByCategory(category).length}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Tags */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Clear Filters */}
                  <Button 
                    variant="outline" 
                    onClick={clearAllFilters}
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                </div>
              </aside>

              {/* Projects Grid */}
              <div className="flex-1 space-y-6">
                
                {/* Toolbar */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedCategory !== 'All' || selectedTags.length > 0 || searchQuery) && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    
                    {selectedCategory !== 'All' && (
                      <Badge variant="secondary" className="gap-1">
                        Category: {selectedCategory}
                        <button 
                          onClick={() => setSelectedCategory('All')}
                          className="ml-1 hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    {selectedTags.map(tag => (
                      <Badge key={tag} variant="secondary" className="gap-1">
                        {tag}
                        <button 
                          onClick={() => toggleTag(tag)}
                          className="ml-1 hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    
                    {searchQuery && (
                      <Badge variant="secondary" className="gap-1">
                        Search: {searchQuery}
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="ml-1 hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                  </div>
                )}

                {/* Projects Display */}
                {isLoading || isInitialLoad ? (
                  <div className={`
                    ${viewMode === 'grid' 
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' 
                      : 'space-y-6'
                    }
                  `}>
                    {Array.from({ length: 6 }, (_, index) => (
                      <ProjectCardSkeleton 
                        key={`skeleton-${selectedCategory}-${selectedTags.join('-')}-${index}`}
                        viewMode={viewMode}
                      />
                    ))}
                  </div>
                ) : filteredProjects.length > 0 ? (
                  <div className={`
                    ${viewMode === 'grid' 
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' 
                      : 'space-y-6'
                    }
                  `}>
                    {filteredProjects.map((project, index) => (
                      <div
                        key={`${selectedCategory}-${selectedTags.join('-')}-${project.id}`}
                      >
                        {viewMode === 'grid' ? (
                          <ProjectCard
                            title={project.title}
                            category={project.category}
                            client={project.client}
                            year={project.year}
                            imageUrl={project.imageUrl}
                            isVideo={project.isVideo}
                            onClick={() => handleProjectClick(project.id)}
                            animationDelay={isInitialLoad ? 0 : index * 0.05}
                          />
                        ) : (
                          /* List View */
                          <div className="group relative overflow-hidden rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300 hover-glow cursor-pointer"
                               onClick={() => handleProjectClick(project.id)}>
                            <div className="flex gap-6 p-6">
                              {/* Project Image */}
                              <div className="relative aspect-[4/3] w-48 flex-shrink-0 overflow-hidden rounded-lg">
                                <img 
                                  src={project.imageUrl} 
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                
                                {/* Video Play Button */}
                                {project.isVideo && (
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button variant="hero" size="icon" className="rounded-full shadow-2xl">
                                      <Play className="w-6 h-6" />
                                    </Button>
                                  </div>
                                )}
                                
                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                                  <span className="editor-panel px-2 py-1 text-xs font-medium text-foreground rounded-full backdrop-blur-sm">
                                    {project.category}
                                  </span>
                                </div>

                                {/* Year Badge */}
                                <div className="absolute top-3 right-3">
                                  <span className="text-xs font-mono text-foreground/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                                    {project.year}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Project Info */}
                              <div className="flex-1 space-y-4">
                                <div className="space-y-2">
                                  <h3 className="font-display font-medium text-xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {project.title}
                                  </h3>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>{project.client}</span>
                                    <span className="font-mono">{project.category}</span>
                                    {project.status && (
                                      <Badge variant={project.status === 'completed' ? 'default' : 'outline'} className="text-xs">
                                        {project.status}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                
                                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                  {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.slice(0, 4).map(tag => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                  {project.tags.length > 4 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{project.tags.length - 4} more
                                    </Badge>
                                  )}
                                </div>
                                
                                <div className="flex items-center justify-between pt-2">
                                  <div className="text-xs text-muted-foreground">
                                    {project.duration && `Duration: ${project.duration}`}
                                  </div>
                                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                                    View Project
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 space-y-4">
                    <Filter className="h-12 w-12 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-semibold text-foreground">No projects found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search terms to find what you're looking for.
                    </p>
                    <Button onClick={clearAllFilters} variant="outline">
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectListing;

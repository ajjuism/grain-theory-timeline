import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import { ArrowLeft, Calendar, Clock, User, ExternalLink, Play } from 'lucide-react';
import { getProjectById, projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { LightboxGallery } from '@/components/LightboxGallery';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigateWithScroll();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const project = id ? getProjectById(id) : null;

  // Ensure page starts at top when component mounts or project changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [id]); // Re-run when project ID changes

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">Project not found</h1>
            <p className="text-muted-foreground">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={() => navigate('/projects')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Back Navigation */}
        <section className="py-6 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/projects')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div 
              className={`relative aspect-[21/9] rounded-lg overflow-hidden mb-8 ${
                project.gallery && project.gallery.length > 0 ? 'cursor-pointer group' : ''
              }`}
              onClick={() => {
                if (project.gallery && project.gallery.length > 0) {
                  // Check if hero image is in gallery, if so open at that index, otherwise at index 0
                  const heroImageIndex = project.gallery.findIndex(img => img === project.imageUrl);
                  setLightboxIndex(heroImageIndex >= 0 ? heroImageIndex : 0);
                  setLightboxOpen(true);
                }
              }}
            >
              <ImageWithSkeleton
                src={project.imageUrl} 
                alt={project.title}
                className={`w-full h-full object-cover ${
                  project.gallery && project.gallery.length > 0 ? 'group-hover:scale-105 transition-transform duration-300' : ''
                }`}
                containerClassName="w-full h-full"
              />
              {project.isVideo && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button variant="hero" size="lg" className="rounded-full shadow-2xl">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              )}
              {/* Clickable gallery indicator */}
              {project.gallery && project.gallery.length > 0 && !project.isVideo && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-4">
                    <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Project Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.featured && (
                      <Badge variant="default">Featured</Badge>
                    )}
                    <Badge 
                      variant={project.status === 'completed' ? 'default' : 'outline'}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-display font-medium leading-tight">
                    {project.title}
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Project Details */}
                {(project.challenge || project.solution || project.results) && (
                  <div className="space-y-8">
                    {project.challenge && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                    )}

                    {project.solution && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Our Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {project.results && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Results</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.results}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Videos Section */}
                {project.videos && project.videos.length > 0 && (
                  <div className="space-y-6">
                    <Separator />
                    <h3 className="text-xl font-semibold">Event Videos</h3>
                    <div className="grid grid-cols-1 gap-6">
                      {project.videos.map((videoUrl, index) => {
                        // Convert YouTube URL to embed format
                        const getEmbedUrl = (url: string) => {
                          if (url.includes('youtu.be/')) {
                            const videoId = url.split('youtu.be/')[1].split('?')[0];
                            return `https://www.youtube.com/embed/${videoId}`;
                          } else if (url.includes('youtube.com/watch?v=')) {
                            const videoId = url.split('v=')[1].split('&')[0];
                            return `https://www.youtube.com/embed/${videoId}`;
                          }
                          return url;
                        };

                        return (
                          <div key={index} className="space-y-3">
                            <div className="aspect-video rounded-lg overflow-hidden bg-black">
                              <iframe
                                src={getEmbedUrl(videoUrl)}
                                title={`${project.title} - Video ${index + 1}`}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="space-y-6">
                    <Separator />
                    <h3 className="text-xl font-semibold">Photo Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => {
                        const isVideo = image.includes('.mp4') || image.includes('.webm') || image.includes('.mov');
                        return (
                          <div 
                            key={index} 
                            className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group relative"
                            onClick={() => {
                              setLightboxIndex(index);
                              setLightboxOpen(true);
                            }}
                          >
                            <ImageWithSkeleton
                              src={image} 
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              containerClassName="w-full h-full"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                                {isVideo ? (
                                  <Play className="w-6 h-6 text-black" />
                                ) : (
                                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            {/* Video indicator */}
                            {isVideo && (
                              <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                                <Play className="w-3 h-3" />
                                Video
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Project Info */}
                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Project Details</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Client</div>
                        <div className="font-medium">{project.client}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Year</div>
                        <div className="font-medium">{project.year}</div>
                      </div>
                    </div>

                    {project.duration && (
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm text-muted-foreground">Duration</div>
                          <div className="font-medium">{project.duration}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {project.projectUrl && (
                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </Card>

                {/* Contact CTA */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="space-y-4 text-center">
                    <h3 className="font-semibold text-lg">Start Your Project</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready to create something exceptional? Let's discuss your vision.
                    </p>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => navigate('/#contact')}
                    >
                      Get In Touch
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-medium mb-4">
                  Related Projects
                </h2>
                <p className="text-muted-foreground">
                  More work in {project.category.toLowerCase()}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard
                    key={relatedProject.id}
                    title={relatedProject.title}
                    category={relatedProject.category}
                    client={relatedProject.client}
                    year={relatedProject.year}
                    imageUrl={relatedProject.imageUrl}
                    isVideo={relatedProject.isVideo}
                    onClick={() => navigate(`/projects/${relatedProject.id}`)}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/projects')}
                >
                  View All Projects
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      
      {/* Lightbox Gallery */}
      {project.gallery && (
        <LightboxGallery
          images={project.gallery}
          isOpen={lightboxOpen}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          projectTitle={project.title}
        />
      )}
    </div>
  );
};

export default ProjectDetail;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, User, ExternalLink, Play, Quote } from 'lucide-react';
import { getProjectById, projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = id ? getProjectById(id) : null;

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
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-8">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.isVideo && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button variant="hero" size="lg" className="rounded-full shadow-2xl">
                    <Play className="w-8 h-8" />
                  </Button>
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

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="space-y-6">
                    <Separator />
                    <h3 className="text-xl font-semibold">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => (
                        <div 
                          key={index} 
                          className="aspect-[4/3] rounded-lg overflow-hidden"
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="space-y-6">
                    <Separator />
                    <Card className="p-8 bg-muted/30">
                      <div className="space-y-4">
                        <Quote className="w-8 h-8 text-primary" />
                        <blockquote className="text-lg leading-relaxed italic">
                          "{project.testimonial.text}"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{project.testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">
                              {project.testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
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
    </div>
  );
};

export default ProjectDetail;

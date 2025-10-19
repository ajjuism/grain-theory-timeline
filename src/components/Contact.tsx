import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Clock, ArrowRight, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { submitForm, validateFormData, type FormData } from '@/services/formService';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
    // Clear submit status when user starts typing after success/error
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      const response = await submitForm({
        ...formData,
        source: 'contact-form'
      });

      if (response.success) {
        setSubmitStatus('success');
        setSubmitMessage(response.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          projectType: '',
          projectDetails: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(response.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@graintheory.com', href: 'mailto:hello@graintheory.com' },
                { icon: Phone, label: 'Phone', value: '+91 90360 43152', href: 'tel:+919036043152' },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
              ].map((contact, index) => (
                <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-background/80 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-body">{contact.label}</div>
                        <div className="font-medium text-foreground">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/20 shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-body">{contact.label}</div>
                        <div className="font-medium text-foreground">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Content - Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/60 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-display font-medium mb-2">Start Your Project</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Tell us about your vision and we'll get back to you with a proposal.
                </p>
              </div>

              {/* Success State */}
              {submitStatus === 'success' && (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">{submitMessage}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}

              {/* Form */}
              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error Messages */}
                  {errors.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div className="text-sm text-red-700">
                          <ul className="list-disc list-inside space-y-1">
                            {errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error State Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p className="text-sm text-red-700">{submitMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                      Project Type
                    </label>
                    <select 
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select project type</option>
                      <option value="photography">Commercial Photography</option>
                      <option value="video">Video Production</option>
                      <option value="both">Photography & Video</option>
                      <option value="creative">Creative Direction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2.5 font-body">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 resize-none placeholder:text-muted-foreground/60 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Brief description of your project vision and requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    variant="hero" 
                    size="default" 
                    disabled={isSubmitting}
                    className="w-full group text-sm py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Project Brief
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              {/* Trust Indicators */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>24h response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>No commitment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
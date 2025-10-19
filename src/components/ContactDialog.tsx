import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Send, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { submitForm, validateFormData, type FormData } from '@/services/formService';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
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
        source: 'modal'
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
        // Close dialog after 2 seconds
        setTimeout(() => {
          onOpenChange(false);
          setSubmitStatus('idle');
        }, 2000);
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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: '',
      projectDetails: '',
    });
    setErrors([]);
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  // Reset form when dialog closes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      resetForm();
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md w-[calc(100vw-2rem)] sm:w-full max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border border-primary/15">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg sm:text-xl font-display font-medium">
            Start Your Project
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground font-body">
            Tell us about your vision and we'll get back to you with a proposal.
          </DialogDescription>
        </DialogHeader>

        {/* Success State */}
        {submitStatus === 'success' && (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">Thank you!</h3>
              <p className="text-sm text-muted-foreground">{submitMessage}</p>
            </div>
          </div>
        )}

        {/* Form */}
        {submitStatus !== 'success' && (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
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
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-red-700">{submitMessage}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
                Project Type
              </label>
              <select 
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                disabled={isSubmitting}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
              <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
                Project Details
              </label>
              <textarea
                rows={3}
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                disabled={isSubmitting}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 resize-none placeholder:text-muted-foreground/60 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Brief description of your project vision and requirements..."
              />
            </div>

            <Button 
              type="submit"
              variant="hero" 
              size="default" 
              disabled={isSubmitting}
              className="w-full group text-sm py-2.5 sm:py-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Trust Indicators - only show when not in success state */}
        {submitStatus !== 'success' && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-muted-foreground">
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
        )}
      </DialogContent>
    </Dialog>
  );
};

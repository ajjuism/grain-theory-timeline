import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter, validateEmail } from '@/services/newsletterService';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
    // Clear submit status when user starts typing after success/error
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await subscribeToNewsletter(email);

      if (response.success) {
        setSubmitStatus('success');
        setSubmitMessage(response.message);
        setEmail(''); // Clear email input
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
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="bg-primary rounded" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="space-y-6 mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
              Stay in the <span className="text-primary">Loop</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-body">
              Get insights on visual storytelling, industry trends, behind-the-scenes content, 
              and updates on our latest projects delivered to your inbox.
            </p>
          </div>

          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300">
            {/* Success State */}
            {submitStatus === 'success' && (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">Welcome aboard!</h3>
                  <p className="text-muted-foreground">{submitMessage}</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4"
                >
                  Subscribe Another Email
                </Button>
              </div>
            )}

            {/* Form */}
            {submitStatus !== 'success' && (
              <>
                {/* Error Messages */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-red-700">{error}</p>
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

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <Button 
                    variant="hero" 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Monthly insights</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

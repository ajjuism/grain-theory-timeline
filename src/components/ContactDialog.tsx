import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Send, ArrowRight } from 'lucide-react';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[calc(100vw-2rem)] sm:w-full max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border border-primary/15">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg sm:text-xl font-display font-medium">
            Start Your Project
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground font-body">
            Tell us about your vision and we'll get back to you with a proposal.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 placeholder:text-muted-foreground/60 text-sm shadow-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2 font-body">
              Project Type
            </label>
            <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 text-sm shadow-sm">
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
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/60 border border-primary/10 hover:border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 resize-none placeholder:text-muted-foreground/60 text-sm shadow-sm"
              placeholder="Brief description of your project vision and requirements..."
            />
          </div>

          <Button variant="hero" size="default" className="w-full group text-sm py-2.5 sm:py-3 mt-2">
            <Send className="w-4 h-4 mr-2" />
            Send Project Brief
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        {/* Trust Indicators */}
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
      </DialogContent>
    </Dialog>
  );
};

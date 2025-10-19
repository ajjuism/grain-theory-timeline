import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';

const PrivacyPolicy = () => {
  const navigate = useNavigateWithScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="mb-4 -ml-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                
                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Grain Theory ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>Contact us through our website forms</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Request information about our services</li>
                        <li>Engage with us on social media</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may automatically collect certain information about your device and usage patterns, including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring website addresses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide and maintain our services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Analyze usage patterns and trends</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                    <li>With service providers who assist us in operating our website</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about our use of cookies, please see our <a href="/cookies" className="text-primary hover:underline">Cookies Policy</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us through our website's contact form or reach out to us directly.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

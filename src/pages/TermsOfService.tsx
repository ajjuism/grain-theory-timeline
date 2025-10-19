import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';

const TermsOfService = () => {
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
                Terms of <span className="text-primary">Service</span>
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
                  <h2 className="text-2xl font-display font-medium mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Grain Theory's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Grain Theory provides professional photography and video production services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                    <li>Commercial photography</li>
                    <li>Video production and editing</li>
                    <li>Event documentation</li>
                    <li>Brand content creation</li>
                    <li>Post-production services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Use License</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Permission is granted to temporarily download one copy of the materials on Grain Theory's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Intellectual Property Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, including but not limited to photographs, videos, text, graphics, logos, and software, is the property of Grain Theory and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When engaging our services, clients agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Obtain necessary permissions and releases</li>
                    <li>Respect our team and equipment</li>
                    <li>Make timely payments as agreed</li>
                    <li>Provide feedback and approvals in a timely manner</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Payment Terms</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Payment terms will be specified in individual service agreements. Generally:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>A deposit may be required to secure booking</li>
                      <li>Final payment is typically due upon delivery of services</li>
                      <li>Late payments may incur additional fees</li>
                      <li>All prices are subject to applicable taxes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Cancellation and Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cancellation policies will be outlined in individual service agreements. Refund eligibility depends on the timing of cancellation and work already completed. We reserve the right to cancel services due to circumstances beyond our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Grain Theory or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or services, even if we have been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which also governs your use of our services, to understand our practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Grain Theory operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to revise these terms of service at any time without notice. By using this website and our services, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us through our website's contact form or reach out to us directly.
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

export default TermsOfService;

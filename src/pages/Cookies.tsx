import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigateWithScroll } from '@/hooks/use-navigate-with-scroll';

const Cookies = () => {
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
                Cookies <span className="text-primary">Policy</span>
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
                  <h2 className="text-2xl font-display font-medium mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">How We Use Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Grain Theory uses cookies to enhance your browsing experience and to help us understand how our website is being used. We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>To remember your preferences and settings</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To improve website functionality and performance</li>
                    <li>To provide personalized content and recommendations</li>
                    <li>To enable social media features and functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages. This information helps us improve how our website works.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies allow our website to remember choices you make (such as your preferred language or region) and provide enhanced, more personal features.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use analytics cookies to understand how visitors interact with our website. This helps us analyze data about web page traffic and improve our website to better serve our users.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Third-Party Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may also use third-party services that set cookies on our website. These may include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for sharing functionality</li>
                    <li>Content delivery networks for improved performance</li>
                    <li>Marketing and advertising platforms</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    These third parties have their own privacy policies and cookie policies, which we encourage you to review.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Managing Your Cookie Preferences</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      You have several options for managing cookies:
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-2">Browser Settings</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Most web browsers allow you to control cookies through their settings. You can usually find these options in the "Options" or "Preferences" menu of your browser. You can:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>Block all cookies</li>
                        <li>Allow only first-party cookies</li>
                        <li>Delete existing cookies</li>
                        <li>Set your browser to notify you when cookies are being set</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-2">Opt-Out Links</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For analytics and advertising cookies, you can often opt out directly through the service provider's website:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>Google Analytics: <span className="text-primary">tools.google.com/dlpage/gaoptout</span></li>
                        <li>Network Advertising Initiative: <span className="text-primary">optout.networkadvertising.org</span></li>
                        <li>Digital Advertising Alliance: <span className="text-primary">optout.aboutads.info</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Impact of Disabling Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please note that disabling cookies may affect the functionality of our website. Some features may not work properly, and you may not be able to access certain parts of the site. We recommend keeping cookies enabled for the best user experience.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Cookie Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Different cookies have different lifespans:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                    <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                    <li><strong>Third-party cookies:</strong> Managed according to the third party's retention policy</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Updates to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about our use of cookies or this Cookies Policy, please contact us through our website's contact form or reach out to us directly. For more information about how we handle your personal data, please see our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
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

export default Cookies;

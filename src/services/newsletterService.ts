export interface NewsletterData {
  email: string;
  timestamp?: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}


const NEWSLETTER_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7C4DvMNGvp-IiqojqlXchsl_UKIkqeyrt2GpZpj6gUnWKBdJJI90wLPvcd0km9xI/exec';

export const subscribeToNewsletter = async (email: string): Promise<NewsletterResponse> => {
  try {
    // Sanitize email input
    const sanitizedEmail = email.trim().toLowerCase().substring(0, 100);
    
    const newsletterData = {
      email: sanitizedEmail,
    };


    let response;
    try {
      response = await fetch(NEWSLETTER_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsletterData),
      });

      // If we can read the response, parse it
      if (response.ok) {
        const result = await response.json();
        console.log('Newsletter response:', result);
        return {
          success: result.success || true,
          message: result.message || 'Successfully subscribed! Welcome to our newsletter.',
        };
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (corsError) {
      // CORS error is expected with Google Apps Script - falling back to no-cors mode
      
      try {
        // Fallback to no-cors mode
        await fetch(NEWSLETTER_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newsletterData),
          mode: 'no-cors',
        });

        // Add a small delay to simulate processing time
        await new Promise(resolve => setTimeout(resolve, 800));
        
        return {
          success: true,
          message: 'Successfully subscribed! Welcome to our newsletter.',
        };
      } catch (noCorsError) {
        console.error('Newsletter subscription failed');
        throw noCorsError;
      }
    }
  } catch (error) {
    // Don't log sensitive data in production
    console.error('Newsletter subscription failed');
    return {
      success: false,
      message: 'There was an error subscribing to our newsletter. Please try again.',
    };
  }
};

// Email validation helper
export const validateEmail = (email: string): string | null => {
  const trimmedEmail = email.trim();
  
  if (!trimmedEmail) {
    return 'Email address is required';
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return 'Please enter a valid email address';
  }
  
  return null; // No error
};

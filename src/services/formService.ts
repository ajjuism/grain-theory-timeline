export interface FormData {
  name: string;
  email: string;
  projectType: string;
  projectDetails: string;
  source: 'modal' | 'contact-form';
  phone?: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
}

// Replace this URL with your actual Google Apps Script Web App URL
// Reverted to working URL - update this once new script is properly deployed
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9jA2Zm6LsCH5WgtnMQYviDN08rq0jPrzgJoiZXWiYeMf-zL-x91TqrabUHmKt8SE/exec';

export const submitForm = async (formData: FormData): Promise<FormResponse> => {
  try {
    // Sanitize form data
    const sanitizedData = {
      ...formData,
      name: formData.name.trim().substring(0, 100), // Limit length
      email: formData.email.trim().toLowerCase().substring(0, 100),
      projectType: formData.projectType.trim().substring(0, 50),
      projectDetails: formData.projectDetails.trim().substring(0, 1000),
    };

    // console.log('Sending contact form data:', sanitizedData); // Debug log

    // First try without no-cors to see if we can get a response
    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        const result = await response.json();
        // console.log('Contact form response:', result);
        return {
          success: result.success || true,
          message: result.message || 'Form submitted successfully! We\'ll get back to you within 24 hours.',
        };
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (corsError) {
      // CORS error is expected with Google Apps Script - falling back to no-cors mode
      
      // Fallback to no-cors mode
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
        mode: 'no-cors',
      });

      // console.log('Contact form sent in no-cors mode');

      // With no-cors, we can't read the response, so we assume success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        success: true,
        message: 'Form submitted successfully! We\'ll get back to you within 24 hours.',
      };
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'There was an error submitting your form. Please try again or contact us directly.',
    };
  }
};

// Validation helper
export const validateFormData = (formData: Partial<FormData>): string[] => {
  const errors: string[] = [];

  if (!formData.name?.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.projectType?.trim()) {
    errors.push('Please select a project type');
  }

  if (!formData.projectDetails?.trim()) {
    errors.push('Project details are required');
  }

  return errors;
};

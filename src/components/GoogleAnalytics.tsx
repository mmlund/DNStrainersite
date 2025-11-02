import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Google Analytics 4 component
// To activate: Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with actual Measurement ID

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only load GA if a valid Measurement ID is configured
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.log('Google Analytics not configured. Add your GA4 Measurement ID to src/components/GoogleAnalytics.tsx');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;

    return () => {
      document.head.removeChild(script1);
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (window as any).gtag) {
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Helper function to track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Helper function to track conversions
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionLabel}`,
      value: value,
    });
  }
};

export default GoogleAnalytics;

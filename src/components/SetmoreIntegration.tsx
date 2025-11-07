import { useEffect } from 'react';

const SetmoreIntegration = () => {
  useEffect(() => {
    // Reinitialize Setmore iframe integration after React renders
    const initSetmore = () => {
      if (window.setmore) {
        window.setmore.init();
      }
    };

    // Try to initialize immediately
    initSetmore();

    // Also try after a short delay to ensure DOM is ready
    const timer = setTimeout(initSetmore, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default SetmoreIntegration;

// Extend Window type for TypeScript
declare global {
  interface Window {
    setmore?: {
      init: () => void;
    };
  }
}

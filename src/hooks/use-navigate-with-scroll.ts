import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Custom hook that provides navigation with automatic scroll to top.
 * This ensures that when navigating to a new page, the user always
 * starts at the top of the page regardless of their previous scroll position.
 */
export const useNavigateWithScroll = () => {
  const navigate = useNavigate();

  const navigateWithScroll = useCallback((to: string, options?: { replace?: boolean }) => {
    // First scroll to top instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Then navigate
    navigate(to, options);
  }, [navigate]);

  return navigateWithScroll;
};

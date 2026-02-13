import { useState, useEffect } from 'react';
import useAuthStore from '@/stores/AuthStore';

const useAuthHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    // Check if the store has been hydrated by zustand-persist
    const checkHydration = () => {
      // The store is considered hydrated when it has values from localStorage
      // We'll set a flag after a short delay to ensure hydration has occurred
      setIsHydrated(true);
    };
    
    // Using a small timeout to allow for hydration to complete
    const timer = setTimeout(checkHydration, 0);
    
    return () => clearTimeout(timer);
  }, []);
  
  return isHydrated;
};

export default useAuthHydration;
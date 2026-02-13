import { useState, useEffect } from 'react';
import useAuthStore from '@/stores/AuthStore';

export const useAuthState = () => {
  const [user, setUser] = useState(useAuthStore.getState().user);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Get initial state
    const initialState = useAuthStore.getState();
    setUser(initialState.user);
    setIsHydrated(true);

    // Subscribe to store changes
    const unsubscribe = useAuthStore.subscribe((state) => {
      setUser(state.user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { user, isHydrated };
};
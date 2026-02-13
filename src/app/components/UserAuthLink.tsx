"use client"
import Link from "next/link";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import useAuthStore from "@/stores/AuthStore";
import { useAuthState } from "@/hooks/useAuthState";

const UserAuthLink = () => {
  const { user, isHydrated } = useAuthState();
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Don't render until hydrated to avoid FOUC
  if (!isHydrated) {
    return <Link href="/login">Sign in</Link>;
  }

  if (user) {
    // Debug logging to see what data we have
    console.log("User object:", user);
    
    // Use firstName if available, otherwise extract from name, fallback to email username
    let displayName = 'User';
    if (user.firstName && user.firstName.trim() !== '') {
      displayName = user.firstName;
    } else if (user.name && user.name.trim() !== '') {
      // Split the name by spaces and take the first part as first name
      const nameParts = user.name.trim().split(/\s+/);
      if (nameParts.length > 0) {
        displayName = nameParts[0];
      }
    } else if (user.email) {
      // Extract username from email if name is not available
      displayName = user.email.split('@')[0];
    }
    
    console.log("Display name:", displayName);
    
    // Additional check: if displayName is just the email prefix, try to get name from localStorage if available
    if (displayName === user.email?.split('@')[0] && typeof window !== 'undefined') {
      const storedUserData = localStorage.getItem('auth-storage');
      if (storedUserData) {
        try {
          const parsedData = JSON.parse(storedUserData);
          if (parsedData.state && parsedData.state.user && parsedData.state.user.name) {
            const storedNameParts = parsedData.state.user.name.trim().split(/\s+/);
            if (storedNameParts.length > 0) {
              displayName = storedNameParts[0];
            }
          }
        } catch (e) {
          console.log("Error parsing stored user data:", e);
        }
      }
    }
    
    return (
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-amber-600 transition-colors p-1 rounded hover:bg-gray-100"
        >
          <User className="w-4 h-4" />
          <span>{displayName}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 ring-1 ring-black ring-opacity-5">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 flex items-center gap-2 transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link href="/login">
      Sign in
    </Link>
  );
};

export default UserAuthLink;

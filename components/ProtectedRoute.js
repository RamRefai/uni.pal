// components/ProtectedRoute.js
import { useAuth } from '/components/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // User not logged in
      router.push('/'); // Redirect them to your login page
    }
  }, [user, loading, router]);

  if (loading || !user) {
 
    return (
    <>
    <div className="flex justify-center xl text-xl">Redirecting....</div>
    
    </>); // Or any other loading state
    
  }

  return children;
};

export default ProtectedRoute;

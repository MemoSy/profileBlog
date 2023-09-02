"use client"

// components/ProtectedRoute.js
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    // Redirect to login page if the user is not authenticated
    router.push('/sign-in'); // Adjust the login route as needed
    return null;
  }

  // User is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;

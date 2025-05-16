
import React, { useEffect, useState } from 'react';
import { useIsNative } from '@/hooks/use-platform';

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const isNative = useIsNative();

  useEffect(() => {
    // Simulate minimum loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, isNative ? 2000 : 500);

    return () => clearTimeout(timer);
  }, [isNative]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <div className="text-center">
          <div className="h-16 w-16 border-4 border-t-social-purple border-transparent rounded-full animate-spin mx-auto"></div>
          <h1 className="text-xl font-bold mt-6 text-social-purple">Social Media Content Generator</h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SplashScreen;

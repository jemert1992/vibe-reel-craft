
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d96824341242496ba78624433db9363b',
  appName: 'Social Media Content Generator',
  webDir: 'dist',
  server: {
    url: 'https://d9682434-1242-496b-a786-24433db9363b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always',
    preferredContentMode: 'mobile',
    scheme: 'app',
    backgroundColor: '#ffffff',
    limitsNavigationsToAppBoundDomains: true
  },
  // Ensure the app icon has the proper resolution for iOS
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      showSpinner: true,
      spinnerColor: "#9b87f5"
    }
  }
};

export default config;


import * as React from "react";

export type Platform = "ios" | "android" | "web";

export function usePlatform() {
  const [platform, setPlatform] = React.useState<Platform>("web");
  
  React.useEffect(() => {
    // Check if running in Capacitor
    const isCapacitor = Boolean(
      // @ts-ignore - Capacitor might not be defined in TypeScript
      window.Capacitor?.isNative
    );
    
    if (!isCapacitor) {
      setPlatform("web");
      return;
    }
    
    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (isIOS) {
      setPlatform("ios");
    } else {
      setPlatform("android");
    }
  }, []);
  
  return platform;
}

export function useIsIOS() {
  const platform = usePlatform();
  return platform === "ios";
}

export function useIsNative() {
  const platform = usePlatform();
  return platform !== "web";
}

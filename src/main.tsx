
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const mount = () => {
  createRoot(document.getElementById("root")!).render(<App />);
};

// Wait for device ready when running in Capacitor
// @ts-ignore - Capacitor might not be defined in TypeScript
if (window.Capacitor?.isNative) {
  document.addEventListener('deviceready', mount, false);
} else {
  mount();
}

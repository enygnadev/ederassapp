import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Firebase configuration — agora usando variáveis de ambiente sem o prefixo VITE_
// Prefer VITE_ env var (exposed to client), fallback to non-prefixed for backwards compatibility
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? import.meta.env.FIREBASE_API_KEY ?? "YOUR_API_KEY_HERE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? import.meta.env.FIREBASE_AUTH_DOMAIN ?? "your-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? import.meta.env.FIREBASE_PROJECT_ID ?? "your-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? import.meta.env.FIREBASE_STORAGE_BUCKET ?? "your-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? import.meta.env.FIREBASE_MESSAGING_SENDER_ID ?? "00000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? import.meta.env.FIREBASE_APP_ID ?? "1:00000000000:web:00000000000000",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? import.meta.env.FIREBASE_MEASUREMENT_ID
};

// Warn in dev if API key is missing so it’s easier to debug
if (import.meta.env.DEV) {
  const key = firebaseConfig.apiKey;
  if (!key || key === "YOUR_API_KEY_HERE") {
    // eslint-disable-next-line no-console
    console.warn("Firebase API key is not set. Set VITE_FIREBASE_API_KEY (preferred) or FIREBASE_API_KEY in .env.local or your host env vars.");
  }
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
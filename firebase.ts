import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Firebase configuration — agora usando variáveis de ambiente sem o prefixo VITE_
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY ?? "YOUR_API_KEY_HERE",
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN ?? "your-project.firebaseapp.com",
  projectId: import.meta.env.FIREBASE_PROJECT_ID ?? "your-project",
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET ?? "your-project.appspot.com",
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID ?? "00000000000",
  appId: import.meta.env.FIREBASE_APP_ID ?? "1:00000000000:web:00000000000000",
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
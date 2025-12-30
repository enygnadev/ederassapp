import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Lazy initialization to avoid prerendering issues
let app: any;
let auth: any;
let db: any;
let storage: any;

function initializeFirebase() {
  if (typeof window === 'undefined') {
    // Don't initialize on server-side (prerendering)
    return;
  }
  if (!app) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  }
}

export function getFirebaseAuth() {
  initializeFirebase();
  return auth;
}

export function getFirebaseDb() {
  initializeFirebase();
  return db;
}

export function getFirebaseStorage() {
  initializeFirebase();
  return storage;
}

// For backward compatibility - initialize only on client
if (typeof window !== 'undefined') {
  initializeFirebase();
}

export { auth, db, storage };

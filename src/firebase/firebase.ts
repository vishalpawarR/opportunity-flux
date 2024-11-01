import { initializeApp, FirebaseApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, Auth } from "firebase/auth"
import { getFirestore, Firestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

export const app: FirebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth: Auth = getAuth()
export const db: Firestore = getFirestore()
export const storage = getStorage()

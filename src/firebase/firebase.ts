// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, Auth } from "firebase/auth"
import { getFirestore, Firestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBcAmpfVuonsvBu2h9PNgdCefO3TzJifSw",
  authDomain: "opportunity-flux.firebaseapp.com",
  projectId: "opportunity-flux",
  storageBucket: "opportunity-flux.appspot.com",
  messagingSenderId: "422561337060",
  appId: "1:422561337060:web:0eccb126880a92f63c66f1",
  measurementId: "G-KY4S3ZJZRV",
}

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth: Auth = getAuth()
export const db: Firestore = getFirestore()
export const storage = getStorage()

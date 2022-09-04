import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCq30LS060QtfyTDx2rop0lX4QuO6ppEE4',
  appId: '1:236179184384:web:c2984e08c0d6823429f1e5',
  authDomain: 'twithor-nextjs.firebaseapp.com',
  measurementId: 'G-77FMS63KB6',
  messagingSenderId: '236179184384',
  projectId: 'twithor-nextjs',
  storageBucket: 'twithor-nextjs.appspot.com',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAuth(app)
export const db = getFirestore()

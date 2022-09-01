import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCq30LS060QtfyTDx2rop0lX4QuO6ppEE4",
  appId: "1:236179184384:web:c2984e08c0d6823429f1e5",
  authDomain: "twithor-nextjs.firebaseapp.com",
  measurementId: "G-77FMS63KB6",
  messagingSenderId: "236179184384",
  projectId: "twithor-nextjs",
  storageBucket: "twithor-nextjs.appspot.com"
};
//Initialize Firebase
const app = initializeApp(firebaseConfig)

//Auth
export const loginWithGitHub = () => {
  const auth = getAuth()
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider).then(res => {
    const user = res.user;
    console.log(user)
  }).catch(err => {
    console.log(err.message)
  })
}
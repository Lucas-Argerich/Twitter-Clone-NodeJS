import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function onUserStateChanged(onChange) {
  const auth = getAuth();
  return onAuthStateChanged(auth, user => {
    onChange(user || null)
  })
}

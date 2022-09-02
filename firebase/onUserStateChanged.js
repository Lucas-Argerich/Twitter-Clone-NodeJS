import { getAuth, onAuthStateChanged } from 'firebase/auth'
import mapUserFromFirebaseAuth from './mapUserFromFirebaseAuth'

export default function onUserStateChanged(onChange) {
  const auth = getAuth()
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user)
    onChange(normalizedUser || null)
  })
}

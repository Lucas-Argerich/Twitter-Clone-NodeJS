import { collection, getDocs } from 'firebase/firestore'
import { db } from './client'

export default async function fetchLatestThunders() {
  const querySnapshot = await getDocs(collection(db, 'thunders'))
  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })
}

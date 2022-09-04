import { collection, getDocs } from 'firebase/firestore'
import { db } from './client'

export default async function fetchLatestThunders() {
  const querySnapshot = await getDocs(collection(db, 'thunders'))
  return querySnapshot.docs.map((doc) => {
    const data = doc.data()
    data.createdAt = +data.createdAt.toDate()
    return { id: doc.id, ...data }
  })
}

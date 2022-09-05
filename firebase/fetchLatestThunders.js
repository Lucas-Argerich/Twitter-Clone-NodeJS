import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from './client'

export default async function fetchLatestThunders() {
  const querySnapshot = await getDocs(
    query(collection(db, 'thunders'), orderBy('createdAt', 'desc'))
  )
  return querySnapshot.docs.map((doc) => {
    const data = doc.data()
    data.createdAt = +data.createdAt.toDate()
    return { id: doc.id, ...data }
  })
}

import { collection, getDocs } from 'firebase/firestore'
import { db } from './client'

const timeSincePost = (milliseconds) => {
  const diffSec = Math.floor((Date.now() - new Date(milliseconds)) / 1000)
  const diffMin = Math.floor((Date.now() - new Date(milliseconds)) / 60000)
  const diffHour = Math.floor((Date.now() - new Date(milliseconds)) / 3.6e6)

  if (diffSec < 60) {
    return `${diffSec}s`
  } else if (diffMin < 60) {
    return `${diffMin}m`
  } else if (diffHour < 24) {
    return `${diffHour}h`
  } else {
    return new Intl.DateTimeFormat('es-ES').format(new Date(milliseconds))
  }
}

export default async function fetchLatestThunders() {
  const querySnapshot = await getDocs(collection(db, 'thunders'))
  return querySnapshot.docs.map((doc) => {
    const data = doc.data()
    const milliseconds = data.createdAt.seconds * 1000
    data.createdAt = timeSincePost(milliseconds)
    return { id: doc.id, ...data }
  })
}

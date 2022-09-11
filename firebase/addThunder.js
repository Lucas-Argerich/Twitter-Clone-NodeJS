import { db } from './client'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default async function addThunder({
  avatar,
  content,
  images,
  uid,
  username,
}) {
  return await addDoc(collection(db, 'thunders'), {
    avatar,
    content,
    images,
    userId: uid,
    userName: username,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

import { db } from './client'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default async function addThunder({
  avatar,
  content,
  img,
  uid,
  username,
}) {
  return await addDoc(collection(db, 'thunders'), {
    avatar,
    content,
    img,
    userId: uid,
    userName: username,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

import { db } from './client'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default async function addThunder({ avatar, content, uid, username }) {
  return await addDoc(collection(db, 'thunders'), {
    avatar,
    content,
    userId: uid,
    userName: username,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

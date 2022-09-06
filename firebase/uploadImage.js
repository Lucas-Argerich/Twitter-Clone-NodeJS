import { ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from './client'

export default function uploadImage(file) {
  const storageRef = ref(storage, `images/${file.name}`)
  return uploadBytesResumable(storageRef, file)
}

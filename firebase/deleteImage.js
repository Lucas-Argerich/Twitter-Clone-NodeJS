import { ref, deleteObject } from 'firebase/storage'
import { storage } from './client'

export default function deleteImage(path) {
  const desertRef = ref(storage, path)

  return deleteObject(desertRef)
}

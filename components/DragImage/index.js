import { useState, useEffect } from 'react'
import uploadImage from '../../firebase/uploadImage'
import { getDownloadURL } from 'firebase/storage'
import styles from './DragImage.module.css'
import ImageDisplay from 'components/ImageDisplay'

const DRAG_IMAGE_STATES = {
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
  ERROR: -1,
}

export default function DragImage({ children, handleImageArr }) {
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [arrImgs, setArrImgs] = useState(null)

  useEffect(() => {
    console.log(arrImgs)
    arrImgs && handleImageArr(arrImgs)
  }, [arrImgs])

  useEffect(() => {
    if (task) {
      const onProgress = () => {
        console.log('on progress')
      }
      const onError = (err) => {
        console.log(err)
      }
      const onComplete = () => {
        console.log(task.snapshot)
        const image = {
          ref: task.snapshot.ref,
          metadata: task.snapshot.metadata,
        }
        getDownloadURL(task.snapshot.ref).then((url) => (image.url = url))
        handleUploadedImage(image)
        setDrag(DRAG_IMAGE_STATES.COMPLETE)
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    if (e.currentTarget.contains(e.relatedTarget)) {
      setDrag(DRAG_IMAGE_STATES.NONE)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.UPLOADING)
    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  const handleUploadedImage = (image) => {
    !arrImgs ? setArrImgs([image]) : setArrImgs([...arrImgs, image])
  }

  const borderDefault = {
    border: '3px solid transparent',
  }

  const borderOnDrag = {
    border: '3px dashed var(--color-primary)',
  }

  return (
    <section
      className={styles.section}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={
        drag === DRAG_IMAGE_STATES.DRAG_OVER ? borderOnDrag : borderDefault
      }
    >
      {children}
      {arrImgs && (
        <ImageDisplay arrImgs={arrImgs} setArrImgs={setArrImgs} buttons />
      )}
    </section>
  )
}

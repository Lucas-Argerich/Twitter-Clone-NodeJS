import { useState, useEffect } from 'react'
import uploadImage from '../../firebase/uploadImage'
import { getDownloadURL } from 'firebase/storage'
import styles from './DragImage.module.css'

const DRAG_IMAGE_STATES = {
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
  ERROR: -1,
}

export default function DragImage({ children, handleImage }) {
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  useEffect(() => {
    imgURL && handleImage(imgURL)
  }, [imgURL])

  useEffect(() => {
    console.log(task)
    if (task) {
      const onProgress = () => {
        console.log('on progress')
      }
      const onError = (err) => {
        console.log(err)
      }
      const onComplete = () => {
        console.log('on complete')
        getDownloadURL(task.snapshot.ref).then(setImgURL)
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

  const borderDefault = {
    border: '3px solid transparent',
  }

  const borderOnDrag = {
    border: '3px dashed var(--color-primary)',
  }

  return (
    <div
      className={styles.div}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={
        drag === DRAG_IMAGE_STATES.DRAG_OVER ? borderOnDrag : borderDefault
      }
    >
      {children}
      {imgURL && (
        <section className={styles.section}>
          <img className={styles.img} src={imgURL} />
          <div className={styles.shadow}></div>
        </section>
      )}
    </div>
  )
}

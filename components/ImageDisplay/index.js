import deleteImage from '../../firebase/deleteImage'
import styles from './ImageDisplay.module.css'

export default function ImageDisplay({ arrImgs, setArrImgs, buttons }) {
  const handleDelete = (e, path) => {
    e.preventDefault()
    deleteImage(path).then(
      setArrImgs(arrImgs.filter((obj) => obj.metadata.fullPath !== path))
    )
  }

  return (
    <section className={styles.section}>
      {arrImgs.map((obj, index) => {
        return (
          <div className={styles.div} key={index}>
            {buttons && (
              <header>
                <button onClick={(e) => handleDelete(e, obj.metadata.fullPath)}>
                  X
                </button>
              </header>
            )}
            <img className={styles.img} src={obj.url} draggable={false} />
          </div>
        )
      })}
    </section>
  )
}

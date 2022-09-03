import styles from './Avatar.module.css'

export default function Avatar({ src, alt, text, withText }) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  )
}

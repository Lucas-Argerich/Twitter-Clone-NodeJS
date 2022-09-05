import styles from './Avatar.module.css'

export default function Avatar({ src, alt, text, size }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={src}
        alt={alt}
        title={alt}
        width={size || 49}
        height={size || 49}
      />
      {text && <strong>{text}</strong>}
    </div>
  )
}

import Avatar from 'components/Avatar'
import styles from './Thunder.module.css'

export default function Thunder({ username, avatar, name, message }) {
  console.log(username)
  return (
    <article className={styles.article}>
      <Avatar src={avatar} alt={username} />
      <section>
        <div className={styles.header}>
          <span className={styles.name}>{name}</span>
          <span className={styles.username}>@{username}</span>
        </div>
        <span className={styles.message}>{message}</span>
      </section>
    </article>
  )
}

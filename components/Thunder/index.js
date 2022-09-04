import Avatar from 'components/Avatar'
import styles from './Thunder.module.css'

export default function Thunder({ userName, avatar, name, content }) {
  return (
    <article className={styles.article}>
      <Avatar src={avatar} alt={userName} />
      <section>
        <div className={styles.header}>
          {name && <span className={styles.name}>{name}</span>}
          <span className={styles.userName}>@{userName}</span>
        </div>
        <span className={styles.content}>{content}</span>
      </section>
    </article>
  )
}

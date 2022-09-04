import Avatar from 'components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
import styles from './Thunder.module.css'

export default function Thunder({
  userName,
  avatar,
  name,
  content,
  createdAt,
}) {
  const timeAgo = useTimeAgo(createdAt)
  return (
    <article className={styles.article}>
      <Avatar src={avatar} alt={userName} />
      <section className={styles.section}>
        <div className={styles.header}>
          <span className={styles.name}>{name || 'Lucas Argerich'}</span>{' '}
          {/* temporary */}
          <span className={styles.userName}>@{userName}</span>
          <span> · </span>
          <time className={styles.time}>{timeAgo}</time>
        </div>
        <span className={styles.content}>{content}</span>
      </section>
    </article>
  )
}

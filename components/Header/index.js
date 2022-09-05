import Avatar from 'components/Avatar'
import useUser from 'hooks/useUser'
import styles from './Header.module.css'

export default function Header() {
  const user = useUser()
  console.log(user)
  return (
    <header className={styles.header}>
      {user && (
        <Avatar
          src={user.avatar}
          alt={user.username}
          title={user.username}
          size={35}
        />
      )}
      <h2>Twithor</h2>
      <img className={styles.img} src="/twithor-logo.png" />
    </header>
  )
}

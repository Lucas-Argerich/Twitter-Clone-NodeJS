import Thunder from 'components/Thunder'
import fetchLatestThunders from '../../firebase/fetchLatestThunders'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import styles from './HomePage.module.css'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestThunders().then(setTimeline)
  }, [user])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.h2}>Inicio</h2>
      </header>
      <section className={styles.section}>
        {timeline.map(
          ({ avatar, content, createdAt, id, name, userId, userName }) => {
            return (
              <Thunder
                avatar={avatar}
                content={content}
                createdAt={createdAt}
                key={id}
                name={name}
                userId={userId}
                userName={userName}
              />
            )
          }
        )}
      </section>
      <nav className={styles.nav}></nav>
    </div>
  )
}

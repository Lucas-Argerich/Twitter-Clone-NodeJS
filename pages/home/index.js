import Thunder from 'components/Thunder'
import fetchLatestThunders from '../../firebase/fetchLatestThunders'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import NavBar from 'components/NavBar'
import Header from 'components/Header'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestThunders().then(setTimeline)
  }, [user])

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.section}>
        {timeline.map(
          ({
            avatar,
            content,
            createdAt,
            id,
            images,
            name,
            userId,
            userName,
          }) => {
            return (
              <Thunder
                avatar={avatar}
                content={content}
                createdAt={createdAt}
                images={images}
                key={id}
                name={name}
                userId={userId}
                userName={userName}
              />
            )
          }
        )}
      </section>
      <NavBar />
    </div>
  )
}

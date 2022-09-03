import Thunder from 'components/Thunder'
import { useEffect, useState } from 'react'
import styles from './HomePage.module.css'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Inicio</h2>
      </header>
      <section className={styles.section}>
        {timeline.map((data) => {
          return (
            <Thunder
              key={data.id}
              username={data.username}
              avatar={data.avatar}
              name={data.name}
              message={data.message}
            />
          )
        })}
      </section>
      <nav className={styles.nav}></nav>
    </div>
  )
}

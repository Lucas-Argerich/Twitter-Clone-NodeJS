import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import GitHubIcon from '../components/Icons/GitHub'

export default function Home() {
  return (
    <section className={styles.intro}>
      <img className={styles.logo} src='/twithor-logo.png' alt='Twithor app logo' />
      <h1 className={styles.h1}>
        TwiThor
      </h1>
      <h2 className={styles.h2}>
        Where the real vikings talk
      </h2>
      <Button>Login with GitHub
        <GitHubIcon />
      </Button>
    </section>
  )
}

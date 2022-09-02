import { useState, useEffect } from 'react'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import GitHubIcon from '../components/Icons/GitHub'
import onUserStateChanged from '../firebase/onUserStateChanged'
import loginWithGitHub from '../firebase/loginWithGitHub'

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onUserStateChanged((user) => setUser(user))
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleGitHubLogin = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className={styles.intro}>
      <img
        className={styles.logo}
        src="/twithor-logo.png"
        alt="Twithor app logo"
      />
      <h1 className={styles.h1}>TwiThor</h1>
      <h2 className={styles.h2}>Where the real vikings talk</h2>
      {user === null && (
        <Button onClick={handleGitHubLogin}>
          Login with GitHub
          <GitHubIcon />
        </Button>
      )}
      {user !== undefined && user !== null && (
        <h3>Welcome, {user.displayName || 'User'}</h3>
      )}
    </section>
  )
}

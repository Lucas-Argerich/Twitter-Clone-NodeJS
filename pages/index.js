import { useState, useEffect } from 'react'
import Button from 'components/Button'
import styles from 'styles/Home.module.css'
import GitHubIcon from 'components/Icons/GitHub'
import onUserStateChanged from '../firebase/onUserStateChanged'
import loginWithGitHub from '../firebase/loginWithGitHub'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onUserStateChanged((user) => setUser(user))
  }, [])

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleGitHubLogin = () => {
    loginWithGitHub().catch((err) => {
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
      {user === undefined && (
        <img src="/spinner.gif" alt="Loading" width="100px" />
      )}
    </section>
  )
}

import Button from 'components/Button'
import GitHubIcon from 'components/Icons/GitHub'
import loginWithGitHub from '../firebase/loginWithGitHub'
import styles from 'styles/Home.module.css'
import useUser, { USER_STATES } from 'hooks/useUser'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const user = useUser()

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
      {user === USER_STATES.NOT_LOGGED && (
        <Button onClick={handleGitHubLogin}>
          Login with GitHub
          <GitHubIcon />
        </Button>
      )}
      {user === USER_STATES.NOT_KNOWN && (
        <img src="/spinner.gif" alt="Loading" width="100px" />
      )}
    </section>
  )
}

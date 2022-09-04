import Button from 'components/Button'
import addThunder from '../../../firebase/addThunder'
import styles from './PostThunderPage.module.css'
import useUser from 'hooks/useUser'
import { useState } from 'react'
import { useRouter } from 'next/router'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  ERROR: -1,
}

export default function PostThunderPage() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const router = useRouter()
  const user = useUser()

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addThunder({
      avatar: user.avatar,
      content: message,
      uid: user.uid,
      username: user.username,
    })
      .then(() => {
        router.push('/home')
      })
      .catch((err) => {
        console.log(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="¿Qué esta pasando?"
          onChange={handleChange}
        />
        <div className={styles.button}>
          <Button disabled={isButtonDisabled}>Thunder</Button>
        </div>
      </form>
    </>
  )
}

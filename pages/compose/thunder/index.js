import Button from 'components/Button'
import addThunder from '../../../firebase/addThunder'
import styles from './PostThunderPage.module.css'
import useUser from 'hooks/useUser'
import { useState } from 'react'
import { useRouter } from 'next/router'
import DragImage from 'components/DragImage'
import Avatar from 'components/Avatar'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  ERROR: -1,
}

export default function PostThunderPage() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const [imgURL, setImgURL] = useState(null)
  const router = useRouter()
  const user = useUser()

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleImage = (url) => {
    setImgURL(url)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addThunder({
      avatar: user.avatar,
      content: message,
      img: imgURL,
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
    <section className={styles.formContainer}>
      {user && (
        <section className={styles.section}>
          <Avatar src={user.avatar} alt={user.userName} />
        </section>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <DragImage handleImage={handleImage}>
          <textarea
            className={styles.textarea}
            placeholder="¿Qué esta pasando?"
            onChange={handleChange}
          />
        </DragImage>
        <div className={styles.button}>
          <Button disabled={isButtonDisabled}>Thunder</Button>
        </div>
      </form>
    </section>
  )
}

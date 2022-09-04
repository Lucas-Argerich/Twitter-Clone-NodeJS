import onUserStateChanged from '../firebase/onUserStateChanged'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const USER_STATES = {
  NOT_KNOWN: undefined,
  NOT_LOGGED: null,
}

export default function useUser() {
  const router = useRouter()
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)

  useEffect(() => {
    onUserStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/')
    console.log(user)
  }, [user])

  return user
}

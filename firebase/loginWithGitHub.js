import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'

export default async function loginWithGitHub() {
  const auth = getAuth()
  const provider = new GithubAuthProvider()
  return await signInWithPopup(auth, provider).then((res) => res.user)
}

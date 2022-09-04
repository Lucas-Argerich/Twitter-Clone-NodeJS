export default function mapUserFromFirebaseAuth(user) {
  const { displayName, email, photoURL, uid } = user
  return {
    username: displayName || 'Unnamed User',
    email,
    avatar: photoURL,
    uid,
  }
}

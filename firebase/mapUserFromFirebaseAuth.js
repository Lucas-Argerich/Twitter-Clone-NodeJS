export default function mapUserFromFirebaseAuth(user) {
  const { displayName, email, photoURL } = user
  return {
    username: displayName,
    email,
    avatar: photoURL
  }
}

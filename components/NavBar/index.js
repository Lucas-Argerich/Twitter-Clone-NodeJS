import Create from 'components/Icons/Create'
import Home from 'components/Icons/Home'
import Link from 'next/link'
import Search from 'components/Icons/Search'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/home">
        <a>
          <Home className={styles.icon} />
        </a>
      </Link>
      <Link href="/explore">
        <a>
          <Search className={styles.icon} />
        </a>
      </Link>
      <Link href="/compose/thunder">
        <a>
          <Create className={styles.icon} />
        </a>
      </Link>
    </nav>
  )
}

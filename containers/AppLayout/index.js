import styles from './AppLayout.module.css'

export default function AppLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
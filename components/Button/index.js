import styles from './Button.module.css'

export default function Button({ children, onClick }) {
  return (
    <>
      <button class={styles.button} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
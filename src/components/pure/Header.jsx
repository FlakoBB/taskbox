import Image from 'next/image'
import styles from '@/styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Image src='/logo.png' alt='Logo de TaskBox' width='570' height='200' />
      </figure>
      <div className={styles.actions}>
        <span>FlakoBB</span>
        <button type='button'>Salir</button>
      </div>
    </header>
  )
}
export default Header

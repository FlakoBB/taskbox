import styles from '@/styles/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Creado por <Link href='https://bit.ly/follow-flako'>FlakoBB</Link></p>
      <p>Acerca de <span>TaskBox</span></p>
    </footer>
  )
}
export default Footer

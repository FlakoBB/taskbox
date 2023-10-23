'use client'
import Image from 'next/image'
import styles from '@/styles/header.module.scss'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const username = typeof window !== 'undefined' && localStorage.getItem('TBS')

  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('TBS')
    router.push('/acceder')
  }

  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo de TaskBox' width='570' height='200' />
        </Link>
      </figure>
      <div className={styles.actions}>
        <Link className={styles.link} href={pathname !== '/' ? '/' : '/perfil'}>
          {pathname === '/' ? username : 'Volver'}
        </Link>
        <button type='button' onClick={logout}>Salir</button>
      </div>
    </header>
  )
}
export default Header

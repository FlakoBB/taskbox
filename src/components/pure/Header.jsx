'use client'
import Image from 'next/image'
import styles from '@/styles/header.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const username = 'FlakoBB' // ToDo: get username from API

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
        <button type='button'>Salir</button>
      </div>
    </header>
  )
}
export default Header

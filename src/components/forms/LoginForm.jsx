'use client'
import styles from '@/styles/registerForm.module.scss'
import Link from 'next/link'
import { useId } from 'react'

const LoginForm = () => {
  const usernameID = useId()
  const passwordID = useId()

  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor={usernameID}>Usuario:<span>*</span></label>
        <input id={usernameID} type='text' required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={passwordID}>Contraseña:<span>*</span></label>
        <input id={passwordID} type='password' required />
      </div>
      <button>Acceder</button>
      <p>¿No tienes una cuenta? <Link href='/registrar'>Registrate</Link>.</p>
    </form>
  )
}
export default LoginForm

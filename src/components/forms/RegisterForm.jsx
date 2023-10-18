'use client'
import styles from '@/styles/registerForm.module.scss'
import Link from 'next/link'
import { useId } from 'react'

const RegisterForm = () => {
  const nameID = useId()
  const surnameID = useId()
  const usernameID = useId()
  const passwordID = useId()

  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor={nameID}>Nombre:</label>
        <input id={nameID} type='text' />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={surnameID}>Apellido:</label>
        <input id={surnameID} type='text' />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={usernameID}>Usuario:<span>*</span></label>
        <input id={usernameID} type='text' required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={passwordID}>Contraseña:<span>*</span></label>
        <input id={passwordID} type='password' required />
      </div>
      <button>Registrar</button>
      <p>¿Ya tienes una cuenta? <Link href='/acceder'>Inicia sesión</Link>.</p>
    </form>
  )
}
export default RegisterForm

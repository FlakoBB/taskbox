'use client'
import { registerUser } from '@/api/users'
import styles from '@/styles/registerForm.module.scss'
import Link from 'next/link'
import { useId, useState } from 'react'

const RegisterForm = () => {
  const nameID = useId()
  const surnameID = useId()
  const usernameID = useId()
  const passwordID = useId()

  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(newUser)
    try {
      await registerUser(newUser)
      console.log('Usuario registrado!')
      event.target.reset()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor={nameID}>Nombre:</label>
        <input id={nameID} type='text' name='name' onChange={handleChange} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={surnameID}>Apellido:</label>
        <input id={surnameID} type='text' name='surname' onChange={handleChange} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={usernameID}>Usuario:<span>*</span></label>
        <input id={usernameID} type='text' name='username' onChange={handleChange} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={passwordID}>Contraseña:<span>*</span></label>
        <input id={passwordID} type='password' name='password' onChange={handleChange} required />
      </div>
      <button type='submit'>Registrar</button>
      <p>¿Ya tienes una cuenta? <Link href='/acceder'>Inicia sesión</Link>.</p>
    </form>
  )
}
export default RegisterForm

'use client'
import { loginUser } from '@/api/users'
import { useActiveSession } from '@/hooks/activeSession'
import styles from '@/styles/registerForm.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useId, useState } from 'react'

const LoginForm = () => {
  const usernameID = useId()
  const passwordID = useId()

  const router = useRouter()

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const [, , , createSession] = useActiveSession()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await loginUser(loginData)
      createSession(loginData.username)
      router.push('/')
      event.target.reset()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor={usernameID}>Usuario:<span>*</span></label>
        <input id={usernameID} type='text' name='username' onChange={handleChange} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor={passwordID}>Contraseña:<span>*</span></label>
        <input id={passwordID} type='password' name='password' onChange={handleChange} required />
      </div>
      <button type='submit'>Acceder</button>
      <p>¿No tienes una cuenta? <Link href='/registrar'>Registrate</Link>.</p>
    </form>
  )
}
export default LoginForm

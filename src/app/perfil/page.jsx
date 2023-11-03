'use client'
import { getSingleUser, updateUser } from '@/api/users'
import SectionContainer from '@/components/SectionContainer'
import { EditIcon, SaveIcon } from '@/components/icons/icons'
import Footer from '@/components/pure/Footer'
import Header from '@/components/pure/Header'
import { useActiveSession } from '@/hooks/activeSession'
import styles from '@/styles/profilePage.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    surname: '',
    password: ''
  })
  const router = useRouter()

  const [username, isActiveSession] = useActiveSession()

  useEffect(() => {
    if (!isActiveSession) {
      router.push('/acceder')
    }
    const getUser = async () => {
      try {
        const data = await getSingleUser(username)
        setUserData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const [isNameEditing, setIsNameEditing] = useState(false)
  const [isSurnameEditing, setIsSurnameEditing] = useState(false)
  const [isPasswordEditing, setIsPasswordEditing] = useState(false)

  const editingSubmit = async (event) => {
    event.preventDefault()
    const formId = event.target.getAttribute('id')
    const input = event.target[0]
    const { name, value } = input

    if (input.hasAttribute('readOnly')) {
      input.removeAttribute('readOnly')
      switch (formId) {
        case 'nameForm':
          setIsNameEditing(true)
          break
        case 'descriptionForm':
          setIsSurnameEditing(true)
          break
        case 'priorityForm':
          setIsPasswordEditing(true)
          break
        default:
          console.error('Formulario Desconocido')
      }
    } else {
      try {
        await updateUser(username, {
          [name]: value
        })
        console.log(`${name}, actualizado`)
      } catch (error) {
        console.error(error)
      }
      switch (formId) {
        case 'nameForm':
          setIsNameEditing(false)
          break
        case 'descriptionForm':
          setIsSurnameEditing(false)
          break
        case 'priorityForm':
          setIsPasswordEditing(false)
          break
        default:
          console.error('Formulario Desconocido')
      }
      input.setAttribute('readOnly', true)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SectionContainer title='Datos del Usuario'>
          <div className={styles.container}>
            <div className={styles.fieldContainer}>
              <label>Usuario:</label>
              <div className={styles.field}>
                <input type='text' value={userData.username} readOnly />
                {/* <button> // ToDo: Hacer comprobacion con contraseña para poder editar
                  <EditIcon />
                </button> */}
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Nombre:</label>
              <form id='nameForm' className={styles.field} onSubmit={editingSubmit}>
                <input type='text' name='name' value={userData.name} onChange={handleChange} readOnly />
                <button type='submit'>
                  {
                    isNameEditing ? <SaveIcon /> : <EditIcon />
                  }
                </button>
              </form>
            </div>
            <div className={styles.fieldContainer}>
              <label>Apellido:</label>
              <div className={styles.field}>
                <input type='text' name='surname' value={userData.surname} onChange={handleChange} readOnly />
                <button type='submit'>
                  {
                    isSurnameEditing ? <SaveIcon /> : <EditIcon />
                  }
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Contraseña:</label>
              <div className={styles.field}>
                <input type='password' name='password' value={userData.password} onChange={handleChange} readOnly />
                <button type='submit'>
                  {
                    isPasswordEditing ? <SaveIcon /> : <EditIcon />
                  }
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer title='Zona de peligro' danger>
          <div className={styles.container}>
            <button className={styles.btnDanger}>Borrar todas las tarea</button>
            <button className={styles.btnDanger}>Eliminar cuenta</button>
            <button className={styles.btnDanger}>Destruir toda la página</button>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
export default ProfilePage

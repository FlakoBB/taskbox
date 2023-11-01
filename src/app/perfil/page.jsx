'use client'
import { getSingleUser } from '@/api/users'
import SectionContainer from '@/components/SectionContainer'
import { EditIcon } from '@/components/icons/icons'
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
                <button>
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Nombre:</label>
              <div className={styles.field}>
                <input type='text' value={userData.name} readOnly />
                <button>
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Apellido:</label>
              <div className={styles.field}>
                <input type='text' value={userData.surname} readOnly />
                <button>
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Contraseña:</label>
              <div className={styles.field}>
                <input type='password' value={userData.password} readOnly />
                <button>
                  <EditIcon />
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

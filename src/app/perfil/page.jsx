'use client'
import SectionContainer from '@/components/SectionContainer'
import { EditIcon } from '@/components/icons/icons'
import Footer from '@/components/pure/Footer'
import Header from '@/components/pure/Header'
import styles from '@/styles/profilePage.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const ProfilePage = () => {
  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem('TBS')
    if (!session) {
      router.push('/acceder')
    }
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
                <input type='text' value='FlakoBB' readOnly />
                <button>
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Nombre:</label>
              <div className={styles.field}>
                <input type='text' value='Joseph' readOnly />
                <button>
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Apellido:</label>
              <div className={styles.field}>
                <input type='text' value='Ryan' readOnly />
                <button>
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Contraseña:</label>
              <div className={styles.field}>
                <input type='text' value='&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;' readOnly />
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

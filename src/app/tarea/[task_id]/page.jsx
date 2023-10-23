'use client'
import { getSingleTask } from '@/api/tasks'
import SectionContainer from '@/components/SectionContainer'
import { EditIcon } from '@/components/icons/icons'
import Footer from '@/components/pure/Footer'
import Header from '@/components/pure/Header'
import styles from '@/styles/taskPage.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const TaskPage = ({ params }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: '',
    isCompleted: ''
  })

  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem('TBS')
    if (!session) {
      router.push('/acceder')
    }
    const getTaskDetails = async () => {
      try {
        const data = await getSingleTask(params.task_id)
        setTaskData({
          title: data.title,
          description: data.description,
          priority: data.priority,
          isCompleted: data.is_completed
        })
      } catch (error) {
        console.log(error)
      }
    }
    getTaskDetails()
  }, [])
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SectionContainer title='Detalles de la tarea'>
          <div className={styles.container}>
            <section className={styles.inputs}>
              <div className={styles.inputs__section}>
                <div className={styles.fieldContainer}>
                  <label>Titulo:</label>
                  <div className={styles.field}>
                    <input type='text' value={taskData.title} readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Prioridad:</label>
                  <div className={styles.field}>
                    <input type='text' value={taskData.priority} readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Estado:</label>
                  <div className={styles.field}>
                    <input type='text' value={!taskData.isCompleted ? 'Activa' : 'Completada'} readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.inputs__section}>
                <div className={styles.fieldContainer}>
                  <label>Descripcion:</label>
                  <div className={styles.field}>
                    <textarea value={taskData.description} readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.btns}>
              <button className={styles.btnComplete}>Completar</button>
              <button className={styles.btnDelete}>Borrar</button>
            </section>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
export default TaskPage

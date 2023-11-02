'use client'
import { deleteTask, getSingleTask, updateTask } from '@/api/tasks'
import SectionContainer from '@/components/SectionContainer'
import { EditIcon, SaveIcon } from '@/components/icons/icons'
import Footer from '@/components/pure/Footer'
import Header from '@/components/pure/Header'
import { useActiveSession } from '@/hooks/activeSession'
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

  const [isEditing1, setIsEditing1] = useState(false)
  const [isEditing2, setIsEditing2] = useState(false)
  const [isEditing3, setIsEditing3] = useState(false)

  const router = useRouter()

  const [, isActiveSession] = useActiveSession()

  useEffect(() => {
    if (!isActiveSession) {
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

  const editingSubmit = async (event) => {
    event.preventDefault()
    const formId = event.target.getAttribute('id')
    const input = event.target[0]
    const { name, value } = input

    if (input.hasAttribute('readOnly')) {
      input.removeAttribute('readOnly')
      switch (formId) {
        case 'titleForm':
          setIsEditing1(true)
          break
        case 'descriptionForm':
          setIsEditing2(true)
          break
        case 'priorityForm':
          setIsEditing3(true)
          break
        default:
          console.error('Formulario Desconocido')
      }
    } else {
      try {
        await updateTask(params.task_id, {
          [name]: value
        })
        console.log(`${name}, actualizado`)
      } catch (error) {
        console.error(error)
      }
      switch (formId) {
        case 'titleForm':
          setIsEditing1(false)
          break
        case 'descriptionForm':
          setIsEditing2(false)
          break
        case 'priorityForm':
          setIsEditing3(false)
          break
        default:
          console.error('Formulario Desconocido')
      }
      input.setAttribute('readOnly', true)
    }
  }

  const hanndleChange = (event) => {
    const { name, value } = event.target
    setTaskData({
      ...taskData,
      [name]: value
    })
  }

  const markCompleted = async () => {
    try {
      await updateTask(params.task_id, {
        is_completed: !taskData.isCompleted
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeTask = async () => {
    try {
      await deleteTask(params.task_id)
      console.log('eliminada')
    } catch (error) {
      console.error(error)
    }
  }

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
                  <form onSubmit={editingSubmit} className={styles.field} id='titleForm'>
                    <input type='text' name='title' value={taskData.title} readOnly onChange={hanndleChange} />
                    <button type='submit'>
                      {
                        isEditing1 ? <SaveIcon /> : <EditIcon />
                      }
                    </button>
                  </form>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Prioridad:</label>
                  <form onSubmit={editingSubmit} className={styles.field} id='priorityForm'>
                    <input name='priority' type='text' value={taskData.priority} onChange={hanndleChange} readOnly />
                    <button type='submit'>
                      {
                        isEditing3 ? <SaveIcon /> : <EditIcon />
                      }
                    </button>
                  </form>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Estado:</label>
                  <div className={styles.field}>
                    <input type='text' value={!taskData.isCompleted ? 'Activa' : 'Completada'} readOnly />
                  </div>
                </div>
              </div>
              <div className={styles.inputs__section}>
                <div className={styles.fieldContainer}>
                  <label>Descripcion:</label>
                  <form onSubmit={editingSubmit} className={styles.field} id='descriptionForm'>
                    <textarea name='description' value={taskData.description} onChange={hanndleChange} readOnly />
                    <button type='submit'>
                      {
                        isEditing2 ? <SaveIcon /> : <EditIcon />
                      }
                    </button>
                  </form>
                </div>
              </div>
            </section>
            <section className={styles.btns}>
              <button className={styles.btnComplete} onClick={markCompleted}>Completar</button>
              <button className={styles.btnDelete} onClick={removeTask}>Borrar</button>
            </section>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
export default TaskPage

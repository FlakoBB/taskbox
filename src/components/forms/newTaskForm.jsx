'use client'
import { addTask } from '@/api/tasks'
import styles from '@/styles/newTaskForm.module.scss'
import { useId, useState } from 'react'

const NewTaskForm = () => {
  const titleID = useId()
  const descriptionID = useId()

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Normal',
    user_id: typeof window !== 'undefined' && localStorage.getItem('TBS')
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(newTask)
    try {
      await addTask(newTask)
      event.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_group}>
        <label htmlFor={titleID}>Titulo:</label>
        <input id={titleID} name='title' type='text' onChange={handleChange} />
      </div>
      <div className={styles.input_group}>
        <label htmlFor={descriptionID}>Descripción:</label>
        <textarea id={descriptionID} name='description' onChange={handleChange} />
      </div>
      <div className={styles.input_group}>
        <label>Prioridad:</label>
        <select name='priority' value={newTask.priority} onChange={handleChange}>
          <option value='Normal'>Normal</option>
          <option value='Urgente'>Urgente</option>
        </select>
      </div>
      <button>Agregar</button>
    </form>
  )
}
export default NewTaskForm

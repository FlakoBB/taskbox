'use client'
import styles from '@/styles/newTaskForm.module.scss'
import { useId } from 'react'

const NewTaskForm = () => {
  const titleID = useId()
  const descriptionID = useId()

  return (
    <form className={styles.form}>
      <div className={styles.input_group}>
        <label htmlFor={titleID}>Titulo:</label>
        <input id={titleID} type='text' />
      </div>
      <div className={styles.input_group}>
        <label htmlFor={descriptionID}>Descripción:</label>
        <textarea id={descriptionID} />
      </div>
      <div className={styles.input_group}>
        <label>Prioridad:</label>
        <select>
          <option>Normal</option>
          <option>Urgente</option>
        </select>
      </div>
      <button>Agregar</button>
    </form>
  )
}
export default NewTaskForm

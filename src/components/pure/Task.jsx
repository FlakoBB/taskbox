import Link from 'next/link'
import { CheckIcon, RepeatIcon, TrashIcon } from '../icons/icons'
import styles from '@/styles/task.module.scss'
import { deleteTask, updateTask } from '@/api/tasks'

const Task = ({ data }) => {
  const isCompleted = data.is_completed
  const taskId = data.id

  const markCompleted = async () => {
    try {
      await updateTask(taskId, {
        is_completed: !isCompleted
      })
      console.log('actualizado')
    } catch (error) {
      console.log(error)
    }
  }

  const removeTask = async () => {
    try {
      await deleteTask(taskId)
      console.log('eliminada')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <article className={`${styles.container} ${isCompleted && styles.completed}`}>
      <div className={`${styles.priority} ${data.priority === 'Normal' ? styles.normal : styles.urgent}`}>
        <span>{data.priority}</span>
      </div>
      <div className={styles.content}>
        <Link className={styles.title} href={`/tarea/${taskId}`}>{data.title}.</Link>
        <div className={styles.btns}>
          <button type='button' className={styles.btn_delete} onClick={removeTask}><TrashIcon /></button>
          <button type='button' className={styles.btn_complete} onClick={markCompleted}>
            {
              isCompleted
                ? <RepeatIcon />
                : <CheckIcon />
            }
          </button>
        </div>
      </div>
    </article>
  )
}
export default Task

import Link from 'next/link'
import { CheckIcon, RepeatIcon, TrashIcon } from '../icons/icons'
import styles from '@/styles/task.module.scss'

const Task = ({ data }) => {
  const isCompleted = data.is_completed
  const taskId = data.id

  return (
    <article className={`${styles.container} ${isCompleted && styles.completed}`}>
      <div className={`${styles.priority} ${data.priority === 'Normal' ? styles.normal : styles.urgent}`}>
        <span>{data.priority}</span>
      </div>
      <div className={styles.content}>
        <Link className={styles.title} href={`/tarea/${taskId}`}>{data.title}.</Link>
        <div className={styles.btns}>
          <button type='button' className={styles.btn_delete}><TrashIcon /></button>
          <button type='button' className={styles.btn_complete}>
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

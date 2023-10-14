import { CheckIcon, RepeatIcon, TrashIcon } from '../icons/icons'
import styles from '@/styles/task.module.scss'

const Task = () => {
  const isCompleted = false

  return (
    <article className={`${styles.container} ${isCompleted && styles.completed}`}>
      <div className={`${styles.priority} ${styles.normal}`}>
        <span>Normal</span>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

import Task from './pure/Task'
import styles from '@/styles/tasksList.module.scss'

const TasksList = () => {
  return (
    <div className={styles.list}>
      <Task />
      <Task />
    </div>
  )
}
export default TasksList

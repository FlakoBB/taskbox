import { useEffect, useState } from 'react'
import Task from './pure/Task'
import styles from '@/styles/tasksList.module.scss'
import { getAllTasks } from '@/api/tasks'

const TasksList = () => {
  const [userTasks, setUserTasks] = useState([])

  useEffect(() => {
    const allTask = async () => {
      const data = await getAllTasks()
      setUserTasks(data.filter(task => task.user_id === localStorage.getItem('TBS')))
    }
    allTask()
  }, []) // ToDo: Hcaer que se vuelva a renderizar la lista al agregar una tarea

  return (
    <div className={styles.list}>
      {
        userTasks.length === 0
          ? <p>No hay tareas que mostrar</p>
          : userTasks.map(task => <Task key={task.id} data={task} />)
      }
    </div>
  )
}
export default TasksList

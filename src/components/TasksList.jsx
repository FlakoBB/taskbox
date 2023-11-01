import { useEffect, useState } from 'react'
import Task from './pure/Task'
import styles from '@/styles/tasksList.module.scss'
import { getAllTasks } from '@/api/tasks'
import { useActiveSession } from '@/hooks/activeSession'

const TasksList = () => {
  const [userTasks, setUserTasks] = useState([])

  const [username] = useActiveSession()

  useEffect(() => {
    const allTask = async () => {
      const data = await getAllTasks()
      setUserTasks(data.filter(task => task.user_id === username))
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

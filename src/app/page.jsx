'use client'
import styles from '@/styles/home.module.scss'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/pure/Header'
import Footer from '@/components/pure/Footer'
import Radio from '@/components/pure/Radio'
import { useEffect, useState } from 'react'
import NewTaskForm from '@/components/forms/newTaskForm'
import TasksList from '@/components/TasksList'
import { useRouter } from 'next/navigation'
import { useActiveSession } from '@/hooks/activeSession'

export default function Home () {
  const router = useRouter()

  const [, isActiveSession] = useActiveSession()

  useEffect(() => {
    if (!isActiveSession) {
      router.push('/acceder')
    }
  }, [])

  const [filter, setFilter] = useState('all')

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SectionContainer title='Tus Tareas'>
          <div className={styles.listContainer}>
            <div className={styles.radio_group}>
              <Radio name='tareas' label='Todas' state={filter === 'all'} onChange={() => handleFilterChange('all')} />
              <Radio name='tareas' label='Pendientes' state={filter === 'active'} onChange={() => handleFilterChange('active')} />
              <Radio name='tareas' label='Completadas' state={filter === 'completed'} onChange={() => handleFilterChange('completed')} />
              <Radio name='tareas' label='Normales' state={filter === 'normals'} onChange={() => handleFilterChange('normals')} />
              <Radio name='tareas' label='Urgentes' state={filter === 'urgents'} onChange={() => handleFilterChange('urgents')} />
            </div>
            <TasksList />
          </div>
        </SectionContainer>
        <SectionContainer title='Nueva Tarea'>
          <NewTaskForm />
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}

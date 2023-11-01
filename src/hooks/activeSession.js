'use client'
import { useState } from 'react'

export const useActiveSession = () => {
  const username = window.localStorage.getItem('TBS')
  const initialState = !!username

  const [isActiveSession, setIsActiveSession] = useState(initialState)

  const createSession = (name) => {
    window.localStorage.setItem('TBS', name)
    setIsActiveSession(true)
  }

  const deleteSession = () => {
    window.localStorage.removeItem('TBS')
    setIsActiveSession(false)
  }

  return [username, isActiveSession, setIsActiveSession, createSession, deleteSession]
}

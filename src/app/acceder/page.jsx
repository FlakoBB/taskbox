'use client'
import SectionContainer from '@/components/SectionContainer'
import LoginForm from '@/components/forms/LoginForm'
import { useActiveSession } from '@/hooks/activeSession'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginPage = () => {
  const router = useRouter()
  const [, isActiveSession] = useActiveSession()

  useEffect(() => {
    if (isActiveSession) {
      router.push('/')
    }
  }, [])

  return (
    <main className='formPage'>
      <SectionContainer title='Acceder'>
        <LoginForm />
      </SectionContainer>
    </main>
  )
}
export default LoginPage

'use client'
import SectionContainer from '@/components/SectionContainer'
import LoginForm from '@/components/forms/LoginForm'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginPage = () => {
  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem('TBS')
    if (session) {
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

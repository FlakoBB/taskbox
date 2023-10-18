import SectionContainer from '@/components/SectionContainer'
import LoginForm from '@/components/forms/LoginForm'

const LoginPage = () => {
  return (
    <main className='formPage'>
      <SectionContainer title='Acceder'>
        <LoginForm />
      </SectionContainer>
    </main>
  )
}
export default LoginPage

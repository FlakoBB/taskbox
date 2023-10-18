import SectionContainer from '@/components/SectionContainer'
import RegisterForm from '@/components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <main className='formPage'>
      <SectionContainer title='Registrar'>
        <RegisterForm />
      </SectionContainer>
    </main>
  )
}
export default RegisterPage

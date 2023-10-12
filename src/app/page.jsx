import styles from '@/styles/home.module.scss'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/pure/Header'
import Footer from '@/components/pure/Footer'

export default function Home () {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SectionContainer title='Tus Tareas'>
          <h1>TaskBox</h1>
          <p>El nuevo TaskBox</p>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}

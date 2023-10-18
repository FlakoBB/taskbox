import SectionContainer from '@/components/SectionContainer'
import { EditIcon } from '@/components/icons/icons'
import Footer from '@/components/pure/Footer'
import Header from '@/components/pure/Header'
import styles from '@/styles/taskPage.module.scss'

const TaskPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SectionContainer title='Detalles de la tarea'>
          <div className={styles.container}>
            <section className={styles.inputs}>
              <div className={styles.inputs__section}>
                <div className={styles.fieldContainer}>
                  <label>Titulo:</label>
                  <div className={styles.field}>
                    <input type='text' value='Tomar curso de Python' readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Prioridad:</label>
                  <div className={styles.field}>
                    <input type='text' value='Normal' readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Estado:</label>
                  <div className={styles.field}>
                    <input type='text' value='Activa' readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.inputs__section}>
                <div className={styles.fieldContainer}>
                  <label>Estado:</label>
                  <div className={styles.field}>
                    <textarea value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna. Vel risus commodo viverra maecenas accumsan lacus vel.' readOnly />
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.btns}>
              <button className={styles.btnComplete}>Completar</button>
              <button className={styles.btnDelete}>Borrar</button>
            </section>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
export default TaskPage

import PropTypes from 'prop-types'
import styles from '@/styles/sectionContainer.module.scss'

const SectionContainer = ({ title, children, danger }) => {
  return (
    <section className={`${styles.container} ${danger && styles.danger}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

SectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  danger: PropTypes.bool
}

SectionContainer.defaultProps = {
  title: 'Titulo',
  danger: false
}

export default SectionContainer

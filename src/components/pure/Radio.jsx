import styles from '@/styles/radio.module.scss'
import { useId } from 'react'

const Radio = ({ label, name, state, onChange }) => {
  const inputId = useId()

  return (
    <div className={styles.container}>
      <input type='radio' id={inputId} name={name} checked={state} onChange={onChange} hidden />
      <label htmlFor={inputId}>
        <div className={`${styles.radio} ${state && styles.checked}`} />
        {label}
      </label>
    </div>
  )
}
export default Radio

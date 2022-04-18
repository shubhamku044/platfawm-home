import styles from '../styles/components/TypedSection.module.scss'
import { Typewriter } from 'react-simple-typewriter'

const TypedSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__typed}>
        <div>
          Are you looking for{' '}
          <span>
            <Typewriter
              loop
              cursor
              cursorStyle={'_'}
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={3000}
              words={['Social Media?', 'Print Design?', 'Web Design?']}
            />
          </span>
        </div>
        <button>Contact &rarr;</button>
      </div>
    </div>
  )
}

export default TypedSection

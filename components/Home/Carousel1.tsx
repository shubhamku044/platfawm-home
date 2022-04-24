import styles from '../../styles/components/Home/Carousel1.module.scss'
import { Typewriter } from 'react-simple-typewriter'

const Carousel1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__home}>
        <div className={styles['container__home-text']}>
          <h5>
            Seeking <br />
            digital solutions?
          </h5>
          <h6>Say no more.</h6>
          <div>
            <p>
              Are you looking for{' '}
              <span>
                <Typewriter
                  loop
                  cursor
                  cursorStyle={'|'}
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={3000}
                  words={['Social Media?', 'Print Design?', 'Web Design?']}
                />
              </span>{' '}
              Quin is a <span>creative agency</span> built with one purpose: to
              help you <span>define your brand.</span> We offer impeccable
              service combining a nice and user-friendly design with{' '}
              <span>quality programming.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel1

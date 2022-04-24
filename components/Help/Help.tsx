import styles from '../../styles/components/Help/Help.module.scss'
import Carousel from './Carousel'

const Help = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__help}>
        <div className={styles.container__text}>
          <h3 className={styles['container__text-heading']}>
            How can <span>we help?</span>
          </h3>
          <p className={styles['container__text-para']}>
            We help premium brands <span>achieve their future</span> through
            innovation and creative perspectives.{' '}
            <span>We grow your company</span>hrough proprietary in-house ideas,
            tested and perfected <span>over the years.</span>
          </p>
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Help

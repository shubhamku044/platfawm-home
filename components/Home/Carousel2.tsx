import styles from '../../styles/components/Home/Carousel2.module.scss'

const Carousel2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__home}>
        <div className={styles['container__home-text']}>
          <h5>Crafting Digital</h5>
          <h6>Experiences</h6>
          <div>
            <p>
              We help premium brands <span>achieve their future</span> through
              innovation and creative perspectives.{' '}
              <span>We grow your company</span> through proprietary in-house
              ideas, tested and perfected <span>over the years.</span>
            </p>
          </div>
          <div className={styles['container__home-buttons']}>
            <button>Get in touch &rarr;</button>
            <button>About us &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel2

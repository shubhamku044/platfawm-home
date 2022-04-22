import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import styles from '../../styles/components/About/About.module.scss'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__about}>
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  )
}

export default About

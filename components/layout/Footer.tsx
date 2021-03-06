import styles from '../../styles/layout/Footer.module.scss'
import Link from 'next/link'
import Socials from '../Home/Socials'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.container__left}>
        <p className={styles['container__left-p1']}>Ready to do this</p>
        <p className={styles['container__left-p2']}>Let's get to work</p>
        <button>Get the offer &rarr;</button>
      </div>
      <div className={styles.container__right}>
        <div className={styles['container__right-head']}>
          <div className={styles['container__right-head-widget']}>
            <h4>Quick Links</h4>
            <div
              className={styles['container__right-head-widget-animate']}
            ></div>
            <div
              className={`${styles['container__right-head-widget-links']} ${styles['container__right-head-widget-links-left']}`}
            >
              <ul>
                <li>
                  <Link href={'#'}>
                    <a target="_blank">GDPR</a>
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <a target="_blank">Terms and conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <a target="_blank">Privacy and Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['container__right-head-widget']}>
            <h4>Say Hello</h4>
            <div
              className={styles['container__right-head-widget-animate']}
            ></div>
            <div
              className={`${styles['container__right-head-widget-links']} ${styles['container__right-head-widget-links-right']}`}
            >
              <ul>
                <li>
                  <Link href={'#'}>
                    <a target="_blank">contact@platfawm.com</a>
                  </Link>
                </li>
              </ul>
              <div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container__right-footer']}>
          <p>
            &#169; 2022. All rights reserved by <span>Platfawm</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

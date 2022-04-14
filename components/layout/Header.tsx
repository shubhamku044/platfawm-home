import { useEffect, useState } from 'react'
import styles from '../../styles/layout/Header.module.scss'

const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset)

  useEffect(() => {
    const handleControl = () => {
      setPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleControl)
  })

  return (
    <nav
      className={styles.container}
      style={
        position >= 200
          ? {
              paddingTop: '.8rem',
            }
          : {}
      }
    >
      <div className={styles.container__header}>
        <div className={styles['container__header-left']}>
          <h1 className={styles['container__header-logo']}>Platfawm.</h1>
        </div>
        <div className={styles['container__header-right']}>
          <ul>
            <li>
              <button className={`${styles['container__header-right-button']}`}>
                Button &rarr;
              </button>
            </li>
            <li>
              <button className={`${styles['container__header-right-button']}`}>
                Button &rarr;
              </button>
            </li>
            <li>world</li>
            <li>Hambuger</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

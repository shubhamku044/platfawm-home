import { useEffect, useState } from 'react'
import styles from '../../styles/layout/Header.module.scss'
import { GlobeIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import Image from 'next/image'

const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset)
  const [open, setOpen] = useState(false)

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
              backgroundColor: 'rgba(0, 0, 0, .9)',
            }
          : {
              backgroundColor: 'rgba(0, 0, 0, .86)',
            }
      }
    >
      <div className={styles.container__header}>
        <div className={styles['container__header-left']}>
          <h1 className={styles['container__header-logo_container']}>
            <div>
              <Image
                src={'/icons/PlatfawmIconWhite.svg'}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span>Platfawm</span>
          </h1>
        </div>
        <div className={styles['container__header-right']}>
          <ul>
            <li>
              <button className={`${styles['container__header-right-button']}`}>
                Our Portfolio &rarr;
              </button>
            </li>
            <li>
              <button className={`${styles['container__header-right-button']}`}>
                Start a Project &rarr;
              </button>
            </li>
            <li className={`${styles['container__header-right-globe']}`}>
              <GlobeIcon className="h-8 w-8 cursor-pointer" />
            </li>
            <li>
              <div
                className={`${styles.hamburger} ${
                  open ? styles.hamburger__active : ''
                }`}
                onClick={() => setOpen(!open)}
              >
                <span className={styles.hamburger__line}></span>
                <span className={styles.hamburger__line}></span>
                <span className={styles.hamburger__line}></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

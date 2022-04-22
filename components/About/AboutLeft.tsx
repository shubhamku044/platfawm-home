import styles from '../../styles/components/About/AboutLeft.module.scss'
import Image from 'next/image'
import { MinusIcon } from '@heroicons/react/outline'

const AboutLeft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <div className={styles['container__img-left']}>
          <div className={styles['container__img-left-1']}>
            <Image src={'/dummy.webp'} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles['container__img-right']}>
          <div className={styles['container__img-right-1']}>
            <Image src={'/dummy.webp'} layout="fill" objectFit="cover" />
          </div>
          <div className={styles['container__img-right-2']}>
            <Image src={'/dummy.webp'} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.container__text}>
          <div className={styles['container__text-num']}>12</div>
          <div className={styles['container__text-para']}>
            <div>
              <MinusIcon className="w-8" />
            </div>
            years of experience
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutLeft

import { DeviceMobileIcon } from '@heroicons/react/outline'
import styles from '../../styles/components/Help/Card.module.scss'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__parent}>
        <div className={styles['container__parent-inner']}>
          <DeviceMobileIcon className="w-12 scale-150" />
          <div className={styles['container__parent-heading']}>
            <h4>SEO Solutions</h4>
          </div>
          <div className={styles['container__parent-paragraph']}>
            <p>
              There is some SEO in everything you do online. Search engine
              optimization, or SEO, is a strategy for improving your site is
              rankings in engine results.
            </p>
          </div>
          <div className={styles['container__parent-button']}>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

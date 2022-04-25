import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/components/Home/Socials.module.scss'
import FbIcon from '../Icons/FbIcon'

const Socials = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href={'#'}>
            <a target={'_blank'}>
              <div>
                <Image
                  src={'/icons/fbCircle.svg'}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'#'}>
            <a target={'_blank'}>
              <div>
                <Image
                  src={'/icons/twCircle.svg'}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'#'}>
            <a target={'_blank'}>
              <div>
                <Image
                  src={'/icons/igCircle.svg'}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'#'}>
            <a target={'_blank'}>
              <div>
                <Image
                  src={'/icons/liCircle.svg'}
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Socials

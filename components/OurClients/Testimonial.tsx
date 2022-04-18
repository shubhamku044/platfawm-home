import styles from '../../styles/components/OurClients/Testimonial.module.scss'
import Image from 'next/image'

interface TestimonialProps {
  img: string
  personName: string
  id: number
  occupation: string
  summary: string
}

const Testimonial = ({
  img,
  personName,
  id,
  occupation,
  summary,
}: TestimonialProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <div>
          <Image src={img} objectFit={'cover'} layout={'fill'} />
        </div>
      </div>
      <div className={styles.container__testimonial}>
        <h6 className={styles['container__testimonial-name']}>{personName}</h6>
        <p className={styles['container__testimonial-occupation']}>
          {occupation}
        </p>
        <p className={styles['container__testimonial-paragraph']}>{summary}</p>
      </div>
    </div>
  )
}

export default Testimonial

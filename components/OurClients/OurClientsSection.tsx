import styles from '../../styles/components/OurClients/OurClientsSection.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('./Testimonials'), {
  ssr: false,
})

const OurClientsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <h5>
          Our <span>Clients</span>
        </h5>
        <p>
          They are just some of those who have trusted our services. Project
          delivered, happy customer with quin cms.
        </p>
      </div>
      <Testimonials />
    </div>
  )
}

export default OurClientsSection

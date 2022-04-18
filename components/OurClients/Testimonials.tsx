import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Testimonial from './Testimonial'
import { Autoplay } from 'swiper'
import { TestimonialData } from './TestimonialData'
import styles from '../../styles/components/OurClients/Testimonials.module.scss'

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={window.innerWidth >= 768 ? 2 : 1}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {TestimonialData.map(({ id, personName, occupation, summary, img }) => {
          return (
            <SwiperSlide
              key={id}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Testimonial
                id={id}
                personName={personName}
                occupation={occupation}
                summary={summary}
                img={img}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials

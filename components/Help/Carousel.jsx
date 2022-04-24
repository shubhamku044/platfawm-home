import styles from '../../styles/components/Help/Carousel.module.scss'

import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import { useCallback, useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Carousel = () => {
  const sliderRef = useRef(null)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        ref={sliderRef}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          440: {
            slidesPerView: 1.3,
          },
          540: {
            slidesPerView: 1.5,
          },
          610: {
            slidesPerView: 2,
          },
          860: {
            slidesPerView: 2.5,
          },
          991: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <div className={styles.container__buttons}>
          <div
            onClick={() => handlePrev()}
            className={`${styles['container__button']} ${styles['container__button-left']}`}
          >
            prev
          </div>
          <div
            onClick={handleNext}
            className={`${styles['container__button']} ${styles['container__button-right']}`}
          >
            next
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel

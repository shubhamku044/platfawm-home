import styles from '../../styles/components/Home/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

// import required modules
import { EffectFade, Navigation, Autoplay } from 'swiper'
import Carousel1 from './Carousel1'
import Carousel2 from './Carousel2'

const PlatfawmHome = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        modules={[EffectFade, Navigation, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        speed={1500}
      >
        <SwiperSlide>
          <Carousel1 />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel2 />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PlatfawmHome

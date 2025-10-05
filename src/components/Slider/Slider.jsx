
import Country1 from '../../assets/country-1.png'
import Country2 from '../../assets/country-2.png'
import Country3 from '../../assets/country-3.png'
import Country4 from '../../assets/country-4.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Slick = () => {
    
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={25}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { 
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><img src={Country1} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src={Country2} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src={Country3} alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img src={Country4} alt="Slide 4" /></SwiperSlide>
      <SwiperSlide><img src={Country1} alt="Slide 5" /></SwiperSlide>
      <SwiperSlide><img src={Country2} alt="Slide 6" /></SwiperSlide>
      <SwiperSlide><img src={Country3} alt="Slide 7" /></SwiperSlide>
    </Swiper>
  );
};

export default Slick
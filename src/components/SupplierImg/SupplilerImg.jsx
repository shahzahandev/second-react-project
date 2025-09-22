import Country1 from '../../assets/country-1.png'
import Country2 from '../../assets/country-2.png'
import Country3 from '../../assets/country-3.png'
import Country4 from '../../assets/country-4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SupplilerImg = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
    return (
            <Slider {...settings}>
                     <img className='px-1 md:px-4' src={Country1} alt="" />
                     <img className='px-1 md:px-4' src={Country2} alt="" />
                     <img className='px-1 md:px-4' src={Country3} alt="" />
                     <img className='px-1 md:px-4' src={Country4} alt="" />
                     <img className='px-1 md:px-4' src={Country2} alt="" />
                     <img className='px-1 md:px-4' src={Country3} alt="" />
           </Slider>
    )
}

export default SupplilerImg
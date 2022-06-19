import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { sliderData } from "../data";


SwiperCore.use([Autoplay, Pagination])

const Slider = () => {

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        "delay": 2000,
        "disableOnInteraction": false,
        "pauseOnMouseEnter": true
      }}
    >
      {sliderData.map(item => (
        <SwiperSlide style={{ backgroundColor: `${item.bg}` }} key={item.id} >
          <Link to={`${item.link}`}>
            <div className="infoContainer">
              <h1>{item.title}</h1>
              <span className="info">{item.text1}</span>
              <span className="info">{item.text2}</span>
              <span className="info">{item.text3}</span>
            </div>
            <div className="imgContainer">

              <img src={item.pic} alt="offer" />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
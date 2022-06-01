import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";


SwiperCore.use([Autoplay, Pagination])

const Slider = () => {


  const imgArr = [
    {
      pic: "/pictures/bg.jpg",
      id: 1
    },
    {
      pic: "/pictures/bg.jpg",
      id: 2
    },
    {
      pic: "/pictures/bg.jpg",
      id: 3
    },
  ]

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
      {imgArr.map(item => (
        <SwiperSlide>
          <Link to="/login">
            <div className="infoContainer">
              <h1>35% Off</h1>
              <span className="info">Get 35% off after</span>
              <span className="info">creating an account.</span>
              <span className="info">Click for more details</span>
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, FreeMode } from "swiper";
import {coffee} from "../data";
import { Link } from "react-router-dom";


SwiperCore.use([Autoplay, Pagination, FreeMode])

const MiniSlider = () => {

  return (
    <div className='miniSlider'>
      <div className="titlesContainer">
        <h1>Trending Today</h1>
        <span>See All</span>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        freeMode={true}
        loop={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false,
          "pauseOnMouseEnter": true
        }}
      >
        {coffee.map(item => (
          <SwiperSlide key={item.id}>
            <Link to={`/products/${item.id}`} className="picContainer">
              <img src={item.pic} alt="coffee" />
            </Link>
            <div className="nameContainer">
              <span className="title">{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MiniSlider
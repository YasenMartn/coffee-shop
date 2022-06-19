import Location from '../Components/Location';
import MiniSlider from '../Components/MiniSlider';
import Navbar from '../Components/Navbar';
import Offers from '../Components/Offers';
import Products from '../Components/Products';
import Slider from '../Components/Slider';
import { offersData } from '../data';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="homeContainer">
        <Slider />
        <MiniSlider />
        <Products />
        <Offers data={offersData} />
        <Location/>
      </div>
    </div>
  )
}

export default Home
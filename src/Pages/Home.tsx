import MiniSlider from '../Components/MiniSlider';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Slider from '../Components/Slider';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="homeContainer">
        <Slider />
        <MiniSlider />
        <Products />
      </div>
    </div>
  )
}

export default Home
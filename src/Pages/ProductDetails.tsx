import { FavoriteBorder, KeyboardArrowLeft, Star } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom'
import { coffee } from '../data';

const ProductDetails = () => {

  const { id } = useParams();
  const product = coffee.find(p => p.id === Number(id));

  return (
    <div className='productDetails'>

      <div className="left">
        <img src={product?.pic} alt="coffee" />
        <Link to="/" className="iconContainer" style={{ left: "20px" }}  >
          <KeyboardArrowLeft fontSize='large' />
        </Link>
        <Link to="/login" className="iconContainer" style={{ right: "20px" }}>
          <FavoriteBorder fontSize='large' />
        </Link>
      </div>


      <div className="right">
        <h1 className="title">{product?.name}</h1>
        <div className="priceRatingContainer">
          <span className="price">${product?.price}</span>
          <span className="rating"> <Star /> {product?.rating}</span>
        </div>
        <span className="desc">{product?.desc}.</span>
        <div className="itemsContainer">
          <div className="item">{product?.type} </div>
          <div className="item">{product?.food} </div>
        </div>
        <Link to="/location" className="primary">Visit Now</Link>
      </div>


    </div>
  )
}

export default ProductDetails
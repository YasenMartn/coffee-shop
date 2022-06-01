import { Star } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { coffee } from '../data'

const Products = () => {
    return (
        <div className='products'>
            <div className="titlesContainer">
                <h1>Popular Coffee</h1>
                <span>See All</span>
            </div>
            {coffee.map(coffee => (
                <div className="singleCoffee" key={coffee.id}>
                    <Link to={`/products/${coffee.id}`} className="imgContainer">
                        <img src={coffee.pic} alt="coffee" />
                    </Link>
                    <div className="infoContainer">
                        <span className="title">{coffee.name}</span>
                        <div className="extrasContainer">
                            <div className="extra"><Star className='icon'/>{coffee.rating}</div>
                            <div className="extra">{coffee.type}</div>
                            <div className="extra" style={{marginRight: "0"}}>{coffee.food}</div>
                        </div>
                        <div className="priceDiscountContainer">
                            <span className="price">${coffee.price}</span>
                            <span className="discount">20% off</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
import React from 'react'
import { Link } from 'react-router-dom'

type arrProp = {
    data: {
        id: number,
        title: string,
        desc: string
        link: string
    }[]
}

const Offers = (props: arrProp) => {
    return (
        <>
            <div className="titlesContainer">
                <h1>Offers</h1>
                <span>See All</span>
            </div>
            {props.data.map(i => (
                <Link to={`/${i.link}`} className='offers' key={i.id}>
                    <h1>{i.title}</h1>
                    <span>{i.desc}</span>
                </Link>
            ))}
        </>
    )
}

export default Offers
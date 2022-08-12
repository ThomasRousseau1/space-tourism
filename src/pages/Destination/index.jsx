import { useState } from 'react'
import data from "../../data/data.json"
import '../../sass/index.scss';

const destinations = data.destinations

function Destination() {
    const [planets] = useState(destinations)
    const [value, setValue] = useState(0)

    const {name, images, description, distance, travel} = planets[value]

    return (
        <>
        <section className='destination'>
                <div className='destination__containerLeft'>
                    <h1 className='destination__title'><span>01 </span>PICK YOUR DESTINATION</h1>
                    <img src={images.png} alt={name} title={name} className='destination__image'/>
                </div>
                <div className='destination__containerRight'>
                <div className='destination__description'>
                    {planets.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)}>
                            {item.name}
                        </button>
                    ))}
                    <h2 className='destination__title2'>{name}</h2>
                    <p className='destination__text'>{description}</p>
                </div>
                <div>
                    <p>AVG. DISTANCE {distance}</p>
                    <p> EST. TRAVEL TIME {travel}</p>
                </div>
                </div>
        </section>
        </>
    )
}   

export default Destination
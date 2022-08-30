import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import data from "../../data/data.json"
import '../../sass/index.scss';

const destinations = data.destinations

function Destination() {
    const [planets] = useState(destinations)
    const [value, setValue] = useState(0)

    const {name, images, description, distance, travel} = planets[value]
    const fadeInRef = useRef();
    const fadeInImage = useRef();

    useEffect(() => {
        gsap.from(fadeInRef.current, { opacity: "0", duration: 1 })
        gsap.to(fadeInRef.current, { opacity: "1", duration: 1 })
    })

    useEffect(() => {
        gsap.from(fadeInImage.current, { opacity: "0", duration: 1 })
        gsap.to(fadeInImage.current, { opacity: "1", duration: 1 })
    })

    return (
        <>
        <section className='destination'>
                <div className='destination__containerLeft'>
                    <h1 className='destination__title'><span>01 </span>PICK YOUR DESTINATION</h1>
                    <img src={images.png} alt={name} title={name} className='destination__image' ref={fadeInImage}/>
                </div>
                <div className='destination__containerRight'>
                <div className='destination__description'>
                    {planets.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)} className={`destination__button ${index === value && 'active'}`}>
                            {item.name}
                        </button>
                    ))}
                    <h2 className='destination__title2' ref={fadeInRef}>{name}</h2>
                    <p className='destination__text'>{description}</p>
                </div>
                <hr/>
                <div className='destination__distance'>
                    <p>AVG. DISTANCE<br/><span>{distance}</span></p>
                    <p> EST. TRAVEL TIME<br/><span>{travel}</span></p>
                </div>
                </div>
        </section>
        </>
    )
}   

export default Destination
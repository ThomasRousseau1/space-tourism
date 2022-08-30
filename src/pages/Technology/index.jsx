import { useState } from 'react'
import data from "../../data/data.json"

const technology = data.technology

function Technology() {
    const [vehicule] = useState(technology)
    const [value, setValue] = useState(0)

    const {name, images, description} = vehicule[value]

    return (
        <>
        <section className='technology'>
            <div>
            <h1 className='technology__title'><span>03 </span>SPACE LAUNCH 101</h1>
            <div className='technology__container'>
                <div className='technology__description'>
                    <h2 className='technology__subname'>The terminology...</h2>
                    <h3 className='technology__name'>{name}</h3>
                    <p className='technology__text'>{description}</p>
                </div>
                <div className='technology__selectors'>
                {vehicule.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)} className={`technology__button ${index === value && 'active-destination'}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            </div>
            <div className='technology__img'>
                <img src={images.portrait} alt={name} title={name} className='technology__image'/>
            </div>
        </section>
        </>
    )
}   

export default Technology
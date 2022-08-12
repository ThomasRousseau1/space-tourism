import { useState } from 'react'
import data from "../../data/data.json"

const technology = data.technology

function Technology() {
    const [vehicule] = useState(technology)
    const [value, setValue] = useState(0)

    const {name, images, description} = vehicule[value]

    return (
        <>
        <h1><span>03 </span>SPACE LAUNCH 101</h1>
        <section>
            <div>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <img src={images.png} alt={name} title={name}/>
            </div>
            {vehicule.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)}>
                            {item.name}
                        </button>
                    ))}
        </section>
        </>
    )
}   

export default Technology
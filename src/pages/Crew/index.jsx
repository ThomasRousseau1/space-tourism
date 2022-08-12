import { useState } from 'react'
import data from "../../data/data.json"

const crew = data.crew

function Crew() {
    const [member] = useState(crew)
    const [value, setValue] = useState(0)

    const {name, images, role, bio} = member[value]

    return (
        <>
        <section className='crew'>
                <div className='crew__container'>
                    <h1 className='crew__title'><span>02 </span>MEET YOUR CREW</h1>
                    <p className='crew__role'>{role}</p>
                    <h2 className='crew__name'>{name}</h2>
                    <p className='crew__bio'>{bio}</p>
                {member.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)} className={`crew__button ${index === value && 'active-crew'}`}>
                        </button>
                    ))}
            </div>
            <div className='crew__image'>
                <img src={images.png} alt={name} title={name} />
            </div>
        </section>
        </>
    )
}   

export default Crew
import { useState } from 'react'
import data from "../../data/data.json"

const crew = data.crew

function Crew() {
    const [member] = useState(crew)
    const [value, setValue] = useState(0)

    const {name, images, role, bio} = member[value]

    return (
        <>
        <h1><span>02 </span>MEET YOUR CREW</h1>
        <section>
            <div>
                <div>
                    <p>{role}</p>
                    <h2>{name}</h2>
                    <p>{bio}</p>
                </div>
                <img src={images.png} alt={name} title={name}/>
            </div>
            {member.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)}>
                            {item.name}
                        </button>
                    ))}
        </section>
        </>
    )
}   

export default Crew
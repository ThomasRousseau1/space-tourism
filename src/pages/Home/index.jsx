import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import '../../sass/index.scss';

function Home() {
    const spaceAnimation = useRef()

    useEffect(() => {
        gsap.from( spaceAnimation.current, { duration: 1, x: -700})
        gsap.to( spaceAnimation.current, { x: 0, duration: 1, ease: "back.out"})
    })
    return (
        <>
        <main className='main-home'>
        <section className='home'>
            <div className='home__description'>
                <h1 className='home__title' ref={spaceAnimation}>SO, YOU WANT TO TRAVEL TO<br/><span>SPACE</span></h1>
                <p className='home__text'>
                Let’s face it; if you want to go to space, you might as well<br/>
                genuinely go to outer space and not hover kind of on the<br/>
                edge of it. Well sit back, and relax because we’ll give you a<br/>
                truly out of this world experience!
                </p>
            </div>
                <Link to="/destination" class>
                <button className='home__button'>
                    EXPLORE
                </button>
                </Link>
        </section>
        </main>
        </>
    )
}

export default Home
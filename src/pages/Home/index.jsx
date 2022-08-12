import React from 'react'
import { Link } from 'react-router-dom'
import '../../sass/index.scss';

function Home() {
    return (
        <>
        <main className='main-home'>
        <section className='home'>
            <div className='home__description'>
                <h1 className='home__title'>SO, YOU WANT TO TRAVEL TO<br/><span>SPACE</span></h1>
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
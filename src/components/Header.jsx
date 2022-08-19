import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
// import logo from '../../public/assets/shared/logo.svg'
import '../sass/index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [navbarOpen, setNavBarOpen] =  useState(false)
    const handleToggle = () => {
        setNavBarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavBarOpen(false)
    }
    return (
        <>
        <header className='header'>
            <Link to="/">
                    <img src="/assets/shared/logo.svg" alt="Space Tourism" title="Space Tourism" className='header__logo'/>
            </Link>
            <div className='burger'>
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                        </button>
                <div className={`burger__nav ${navbarOpen ? "burger__show" : ""}`}>
                    <Link to="/" className='burger__link' onClick={() => closeMenu()}><p>00</p>Home</Link>
                    <Link to="/destination" className='burger__link'><p>01</p>Destination</Link>
                    <Link to="/crew" className='burger__link'><p>02</p>Crew</Link>
                    <Link to="/technology" className='burger__link'><p>03</p>Technology</Link>
                </div>
            </div>
            <div className='header__links'>
                <NavLink to="/" className='header__link'><span>00</span>Home</NavLink>
                <NavLink to="/destination" className='header__link'><span>01</span>Destination</NavLink>
                <NavLink to="/crew" className='header__link'><span>02</span>Crew</NavLink>
                <NavLink to="/technology" className='header__link'><span>03</span>Technology</NavLink>
            </div>
        </header>
        </>
    )
}

export default Header
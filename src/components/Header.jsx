import { NavLink, Link } from 'react-router-dom'
// import logo from '../../public/assets/shared/logo.svg'
import '../sass/index.scss';

function Header() {
    return (
        <>
        <header className='header'>
            <Link to="/">
                    <img src="/assets/shared/logo.svg" alt="Space Tourism" title="Space Tourism" className='header__logo'/>
            </Link>
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
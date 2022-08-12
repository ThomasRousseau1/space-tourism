import { Link } from 'react-router-dom'
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
                <Link to="/" className='header__link'><span>00</span>Home</Link>
                <Link to="/destination" className='header__link'><span>01</span>Destination</Link>
                <Link to="/crew" className='header__link'><span>02</span>Crew</Link>
                <Link to="/technology" className='header__link'><span>03</span>Technology</Link>
            </div>
        </header>
        </>
    )
}

export default Header
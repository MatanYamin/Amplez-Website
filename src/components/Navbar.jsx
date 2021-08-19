import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function Navbar() {
    return (
        <div>
            <nav>
                <Link to='main' className='logo' smooth={true} duration={1000}>
            <Link to='main' smooth={true} duration={1000}><img src={logo} alt='logo' /></Link>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='main' className="active" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to='features' smooth={true} duration={1000}>About us</Link></li>
                    <li><Link to='services' smooth={true} duration={1000}>Apps</Link></li>
                    <li><Link to='contactus' smooth={true} duration={1000}>CONTACT US</Link></li>
                </ul>
                <Link href='https://play.google.com/store/apps/dev?id=7258376585183782826&gl=IL' className='hey'>Apps</Link>
            </nav>
        </div>
    )
}

export default Navbar;
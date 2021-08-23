import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-scroll';

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1> <span>Zvi Yamin Inc</span></h1>
                <p className='details'>Israeli app development company. <br/><br/> Based in Jerusalem</p>
                <div className='header-btns'>
                    {/* <a href='#' className='cv-btn'>Hire Me</a> */}
                    {/* <a href='#' className='cv-btn1'>Download App</a> */}
                    {/* <a href='contactus' className='cv-btn'>Hire Me</a> */}
                    <Link className='cv-btn' to='contactus' smooth={true} duration={1000}>Contact us</Link>
                    <a href='https://play.google.com/store/apps/dev?id=7258376585183782826&gl=IL' className='cv-btn1'>Our Apps</a> 
                </div>
            </div>
            <div className='arrow'></div>
        </div>
    )
}

export default Header;
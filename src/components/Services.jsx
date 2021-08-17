import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services() {
    return (
        <div id='services'>
         <div className='s-heading'>
             <br/><br/><br/>
             <h1>Apps</h1>
                {/* <h1>Features</h1> */}
                <p>Check out some of our most popular apps!</p>
            </div>
            <div className='b-container'>
                <Box 
                image={image1}
                alte='image1'
                button='To App'
                link="https://play.google.com/store/apps/details?id=com.amplez.lg_remote_akb"
                title="Remote For LG webOS Smart TV"
                details="Has InfraRed mode and smart webOS mode. Simply the best remote out there for LG TVs"
                />
                <Box 
                image={image2}
                alte='image2'
                button='To App'
                link="https://play.google.com/store/apps/details?id=com.amplez.rokuremote"
                title="Remote For Roku‏"
                details="Remote For Roku TV
                | TV Volume control
                | Touch pad and keyboard
                | Works via WiFi or IRﾟ"
                />
            </div>
        </div>
    )
}

export default Services;
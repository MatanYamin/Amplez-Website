import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services() {
    return (
        <div id='services'>
         <div className='s-heading'>
             <br/><br/><br/>
             <h1>Popular Apps</h1>
                {/* <h1>Features</h1> */}
                {/* <p>Check out some of our most popular apps!</p> */}
            </div>
            <div className='b-container'>
                <Box 
                image={image1}
                alte='image1'
                button='To App'
                link="https://play.google.com/store/apps/details?id=com.amplez.lg_remote_akb"
                title="Remote For LG webOS Smart TV"
                details="Over 5,000,000 downloads."
                />
                <Box 
                image={image2}
                alte='image2'
                button='To App'
                link="https://play.google.com/store/apps/details?id=com.amplez.rokuremote"
                title="Remote For Roku‏"
                details="Over 1,000,000 downloads.ﾟ"
                />
            </div>
        </div>
    )
}

export default Services;
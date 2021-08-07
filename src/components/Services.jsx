import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services() {
    return (
        <div id='services'>
         <div className='s-heading'>
             <br/><br/>
             <h1>Services</h1>
                {/* <h1>Features</h1> */}
                <p>Here are some Services...</p>
            </div>
            <div className='b-container'>
                <Box 
                image={image1}
                alte='image1'
                button='SOMETHING'
                />
                <Box 
                image={image2}
                alte='image2'
                button='SOMETHING'
                />
            </div>
        </div>
    )
}

export default Services;
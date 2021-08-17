import React from 'react';
import featureimage from '../images/Frame 19.png';

function Features() {
    return (
        <div id='features'>
           <div className='features-model'>
                <img src={featureimage} alt='feature-image' />
           </div>
           <div className='features-text'>
               <h2>About us</h2>
               <h3>We design and develop various apps</h3>
               <p>Our headquarters located in Jerusalem, Israel.
                <br/>
               We specialize in application development.
               <br/>
               Join our hundreds of thousands of users!
               </p>
               <a href="https://play.google.com/store/apps/dev?id=7258376585183782826&gl=IL">
               <button onclick="https://play.google.com" type="button">Check out our page</button>
               </a>
           </div>
        </div>
    )
}

export default Features;
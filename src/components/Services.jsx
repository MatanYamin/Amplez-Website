import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';
import snakeImage from '../images/snakeImage.jpg';
import oculusButtonImage from '../images/availableOnOculus.png';
import discordButtonImage from '../images/discord-button.png';

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
                image={snakeImage}
                alte='snakeImage'
                regularButton={null}
                specialButton1 = {oculusButtonImage}
                specialButton2 = {discordButtonImage}
                link2="https://discord.gg/Ys6VuBgS"
                link1="https://www.oculus.com/experiences/quest/5712013818895184/?store&item_id=5712013818895184"
                title=""
                details=""
                />
                 <div class="text-overlay">
                <p>Snakes LTD</p>
                </div> 
                <Box 
                image={image1}
                alte='image1'
                regularButton='To App'
                specialButton1 = {null}
                specialButton2 = {null}
                link="https://play.google.com/store/apps/details?id=com.amplez.lg_remote_akb"
                title="Remote For LG webOS Smart TV"
                details="Over 10,000,000 downloads."
                />
                <a id ='boxThree'>
                <Box 
                image={image2}
                alte='image2'
                regularButton='To App'
                specialButton1 = {null}
                specialButton2 = {null}
                link="https://play.google.com/store/apps/details?id=com.amplez.rokuremote"
                title="Remote For Roku‏"
                details="Over 1,000,000 downloads.ﾟ"
                />
                </a>
            </div>
        </div>
    )
}

export default Services;
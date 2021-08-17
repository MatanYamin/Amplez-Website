import React from 'react';

function Box(props) {
    return (
        <div className='s-box'>
         <div className='s-b-img'>
             <img src={props.image} alt={props.alte} />
         </div>
         <div className='s-b-text'>
             <p>
                 <b>{props.title}</b>
                 <br/>
                 {props.details}
             </p>
             <a href={props.link} className='cv-btn'>{props.button}</a>
         </div>
        </div>
    )
}

export default Box;
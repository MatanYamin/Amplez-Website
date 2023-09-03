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


             {props.regularButton !== null && (
             <a href={props.link} className='cv-btn'>{props.regularButton}</a>

            )}

            {props.specialButton1 !== null && (
            <>
            <div className='SnakesLTD-btns'>
             <a href={props.link1} >
             <img src={props.specialButton1} alt="Button Image" />
             </a>
             &nbsp;&nbsp;&nbsp;&nbsp;
             <a href={props.link2} >
             <img src={props.specialButton2} alt="Button Image" />
             </a>
             </div>
             </>

            )}

             {/* <a href={props.link} className='cv-btn'>{props.button1}</a> */}
         </div>
        </div>
    )
}

export default Box;
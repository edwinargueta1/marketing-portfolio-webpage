import React from 'react';
import IconLinkedin from '../Assets/svgIcons';

export default function FooterSection(props) {
    return (
        <div className='footer'>
          <div className='footerContent'>
            <h1>{props.name}</h1>
            <p>{props.location} | {props.email}</p>
            <br />
            <div id='icons'>
              <a href='https://www.linkedin.com/in/vanessa-martin-a7352b182/'><IconLinkedin /></a>
            </div>
          </div>
        </div>
    )
  }
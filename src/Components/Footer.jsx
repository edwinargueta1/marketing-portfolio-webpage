import React from 'react';
import LinkedinIcon from '../Assets/Icons/LinkedinIcon.jsx';

export default function FooterSection(props) {
    return (
      <footer>
            <h1>{props.name}</h1>
            <p>{props.location} | {props.email}</p>
            <br />
            <div id='icons'>
              <a href={props.linkedInURL}><LinkedinIcon size="1.5rem" color={"#FF6EAB"} /></a>
            </div>
      </footer>   
    )
  }
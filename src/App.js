import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import IconLinkedin from './Assets/svgIcons';

function App() {
  return (
    <>
      <body>
        <div id='headContent'>
          <CircleProfilePhoto />
          <div id='profileTitle'>
          <h1 id='username'>Vanessa Martin Del Campo</h1>
          <h3 id='title'>PR and Marketing</h3>
          </div>

          <NavBar/>

        </div>

        <div id='bodyContent'>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/projects' element={<ProjectPage/>}/>
              <Route path='/contact' element={<SimpleContactForm/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
          </Router>
        </div>
        <footer>
          <FooterSection name="Vanessa Martin Del Campo" location="Los Angeles, CA" email="martinvanessx3@gmail.com" />
        </footer>
      </body>
    </>
  );
}

function ProjectPage(){
  return(
    <>
      <h2>Project Something</h2>
    </>
  )
}

function HomePage() {
  return (
    <>
      <div className='container'>
        <div id='summarySection'>
          <div id='summaryTitle'>
            <h3>Hello there - Vanessa here</h3>
          </div>
          <div id='summary'><p>I'm an online marketing manager, specialized in social media and content marketing. I make data-based decisions for the best performance but I'm also not afraid to let my creativity shine.</p>
            <p>With a pasion for all things marketing. I have honed my skills on creating and executing effective marketing strategies across a variety of channels.</p>
            <p>With a keen eye for detail and deep underdtanding of consumer behavior. I appreciate every project with unique perspective, tailoring their approach to each client's specific needs.</p>
            <button>Let's Chat</button>
          </div>
        </div>

        <div id='pointSection'>
          <InfoCards title="SEO" text="Optimize your pages and sites so that they show up on the top of Google every single time." />
          <InfoCards title="CRO" text="Getting alot of traffic is great. But you know what is better? When they all convert." />
          <InfoCards title="Brand Strategy" text="Establish a tone of voice, sort your visual branding and start making a marketing plan." />
        </div>

        <div id='projectSection'>
          <h2>Sneek Peek of my recent projects</h2>
          <div id='projects'>
            <ProjectCards title='Project 1' text="Description of Project on thing and stuff that are important" />
            <ProjectCards title='Beta Project' text="The second description for project 2 and its glory" />
            <ProjectCards title='Project Tres' text="The third installment of vanessa glory and acomplishment" />
          </div>
        </div>
        
      </div>
    </>
  )
}

function ErrorPage(){
  return(
    <>
      <h2>
        Error this Page does not exist!
      </h2>
    </>
  )
}

function NavBar() {
  return (
    <>
      <nav>
        <ul id="navList">
          <div id='navWrapper'>
            <li id="home" className='navButton'><a href="./">Home</a></li>
            <li id="contact" className='navButton'><a href="./contact">Contact</a></li>
            <li id="info" className='navButton'><a href='./projects'>Info</a></li>
          </div>
        </ul>
      </nav>
    </>
  )
}

function CircleProfilePhoto() {
  return (
    <>
      <div id='circleImage'>
        <img src={require("./Assets/headshot.jpg")} />
      </div>
    </>
  )
}

function InfoCards(props) {
  return (
    <>
      <div id='container'>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </>
  )
}

function ProjectCards(props) {
  return (
    <>
      <div id='container'>
        <div id='projectPhoto'>
          <img src={require("./Assets/headshot.jpg")} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </>
  )
}

function FooterSection(props) {
  return (
    <>
      <div id='footer'>
        <div id='footerContent'>
          <h2>{props.name}</h2>
          <p>{props.location} | {props.email}</p>
          <br />
          <div id='icons'>
            <a href='#linkedin'><IconLinkedin /></a>
          </div>
        </div>
      </div>
    </>
  )
}

function SimpleContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consoleMessage, setConsoleMesssage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const mail = { name, email, message };

    fetch("https://formsubmit.co/ajax/darkcloud120898@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then(response => response.json())
      .then(data => {
        setConsoleMesssage(data.message);
        return (console.log(data))
      })
      .catch(error => console.log(error));


    //Reset the values
  }

  return (
    <>
      <div id='contactSection'>
        <div id='contactDirections'>
          <h2>Get in Touch!</h2>
          <p id='contactMessage'>Please provide some information on your goals and I'll get back to you in 2 business days to schedule a call.</p>
          <p id='formConsole'>{consoleMessage}</p>
        </div>
        <form id='contactForm' onSubmit={handleSubmit}>

          <label for='contactName'>Name</label>
          <input
            id='contactName'
            type='name'
            placeholder='You Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label for='contactEmail'>Email</label>
          <input
            id='contactEmail'
            type='email'
            placeholder='name@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label for='contactMessage'>Messsage</label>
          <textarea
            id='contactMessage'
            rows='10'
            placeholder='Start typing your message here...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type='submit'>Send Mail</button>
        </form>
      </div>
    </>
  )
}

export default App;
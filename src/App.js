import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import IconLinkedin from './Assets/svgIcons';

function App() {
  return (
    <>
      <body>
        <div id='headContent'>
          <div className='container'>
          <CircleProfilePhoto link='Assets/headshot.jpg'/>
          <div id='profileTitle'>
            <h1 id='username'>Vanessa Martin Del Campo</h1>
            <h3 id='title'>PR and Marketing</h3>
          </div>

          <NavBar />

          </div>
          
        </div>

        <div id='bodyContent'>
          <Router>
            <div className='container'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<ProjectPage />} />
                <Route path='/contact' element={<SimpleContactForm />} />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </div>
          </Router>
        </div>
        <footer>
          <FooterSection name="Vanessa Martin Del Campo" location="Los Angeles, CA" email="martinvanessx3@gmail.com" />
        </footer>
      </body>
    </>
  );
}

function ProjectPage() {
  return (
    <>
      <h2>Project Something</h2>
    </>
  )
}

function HomePage() {
  return (
    <>
      <div id='summarySection'>
        <div id='summaryTitle'>
          <h3>About Me</h3>
        </div>
        <div id='summary'>
          <p>Vanessa Martin is a dedicated and skilled professional with a strong background in public relations, social media management, and content creation. With a Bachelor of Arts in Journalism and a concentration in Public Relations and Interactive Marketing from California State University of Northridge, she brings a solid educational foundation to her work. Vanessa is a collaborative team player with strong emotional intelligence, empathy, active listening skills, adaptability, and a creative mindset.</p>

          <p>In her most recent role as a Program Assistant, Social Media Manager, and Blog Editor at Polishing the Professional, Vanessa demonstrated her expertise in PR and brand-driven tasks. She effectively marketed career center services to regional centers and clients with physical and mental disabilities, utilizing her excellent communication and interpersonal skills. Vanessa's responsibilities included distributing materials to clients, cold calling prospective companies, organizing events, and managing the organization's social media accounts. Vanessa's proficiency in social media management was evident as she maintained all platforms with engaging content, managed social media calendars, and significantly increased Instagram following through organic reach.</p>

          <p>Fluent in Spanish, Vanessa possesses excellent language skills and is proficient in various computer programs, including Adobe Premiere Pro, Hootsuite, Microsoft Office 365 Tools, and SEO. She is also well-versed in networking and communication, maintaining professional relationships with clients and industry professionals.</p>

          <p>Her expertise also extends to content creation, copywriting, and editing, with a keen eye for detail in spelling, grammar, and style checks. Vanessa's ability to create compelling social media campaigns and her talent for crafting persuasive copy were essential in her role. With her comprehensive skill set and passion for effective communication, Vanessa Martin is a dedicated professional committed to delivering outstanding results in the field of public relations and social media management.</p>
        </div>
        <a className='contactButton' href='./contact'>Let's Chat</a>
      </div>

      {/* <div id='pointSection'>
        <InfoCards title="SEO" text="Optimize your pages and sites so that they show up on the top of Google every single time." />
        <InfoCards title="CRO" text="Getting alot of traffic is great. But you know what is better? When they all convert." />
        <InfoCards title="Brand Strategy" text="Establish a tone of voice, sort your visual branding and start making a marketing plan." />
      </div> */}

      <div id='projectSection'>
        <h2>Sneek Peek of my recent projects</h2>
        <div id='projects'>
          <ProjectCards title='Project 1' text="Description of Project on thing and stuff that are important" />
          <ProjectCards title='Beta Project' text="The second description for project 2 and its glory" />
          <ProjectCards title='Project Tres' text="The third installment of vanessa glory and acomplishment"  link=''/>
        </div>
      </div>
    </>
  )
}

function ErrorPage() {
  return (
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
            <li id="info" className='navButton'><a href='./projects'>Projects</a></li>
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
          <img src={require('./Assets/headshot.jpg')} />
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
            placeholder='Your Name'
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
          <button className='contactButton' type='submit'>Send Mail</button>
        </form>
      </div>
    </>
  )
}

export default App;
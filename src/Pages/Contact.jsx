import React, { useState } from "react";


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [consoleMessage, setConsoleMesssage] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      setConsoleMesssage("");
  
      // const mail = { name, email, message };
  
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
      setName("");
      setEmail("");
      setMessage("");
    }

    // function isFormValid(){
    //     if(name.length < 2 || name.length > 30){
    //         return false;
    //     }
    //     // if()


    //     return true;
    // }

    // function validEmail(){
    //     const emailRegex = /^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{2,}$/;

    //     if(email.length > 320 || email.length < 1){
    //         setConsoleMesssage("")
    //         return false;
    //     }
    // }
  
    return (
      <div className="pageWrapper">
        <div id='contactSection'>
          <div id='contactDirections'>
            <h3>Get in Touch!</h3>
            <p id='contactMessage'>Please provide some information on your goals and I'll get back to you in 2 business days to schedule a call.</p>
            <p id='formConsole'>{consoleMessage}</p>
          </div>
          <form id='contactForm' onSubmit={handleSubmit}>
  
            <label htmlFor='contactName'>Name</label>
            <input
              id='contactName'
              type='name'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor='contactEmail'>Email</label>
            <input
              id='contactEmail'
              type='email'
              placeholder='name@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor='contactMessage'>Messsage</label>
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
      </div>
    )
  }
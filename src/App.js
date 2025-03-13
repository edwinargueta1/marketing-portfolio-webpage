import { React } from 'react';
import './App.css';

//Components
// import NavBar from './Components/NavBar.jsx';
// import FooterSection from './Components/Footer.jsx';
// import { Outlet } from 'react-router-dom';




function App() {
  

  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <div className='spacer'></div> */}
      <div id="bodyContent" className="bodyContent">
        {/* <Outlet /> */}
        <p>This site is working.</p>
      </div>
      {/* <FooterSection name="Vanessa Martin" location="Los Angeles, CA" email="martinvanessax3@gmail.com" linkedInURL='https://www.linkedin.com/in/vanessa-martin-a7352b182/'/> */}
    </div>
  );
}

export default App;
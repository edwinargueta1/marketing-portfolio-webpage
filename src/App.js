import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './Pages/Home.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx'
import Error from './Pages/Error.jsx';
import ProjectPage from './Pages/ProjectPage.jsx'
import TheAbleShowPage from './Pages/TheAbleShowPage.jsx';
import PolishingTheProfessionalPage from './Pages/PolishingTheProfessional.jsx'

//Components
import NavBar from './Components/NavBar.jsx';
import FooterSection from './Components/Footer.jsx';




function App() {
  
  return (
    <div className='App'>
      <NavBar/>
      <div className='spacer'></div>
        <div className='bodyContent'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/portfolio/PolishingTheProfessional' element={<PolishingTheProfessionalPage/>} />
                <Route path='/portfolio/VanesVeggieVisits' element={<ProjectPage/>} />
                <Route path='/portfolio/ALSNetwork' element={<ProjectPage/>} />
                <Route path='/portfolio/TheAbleShow' element={<TheAbleShowPage/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
              </Routes>
        </div>
          <FooterSection name="Vanessa Martin" location="Los Angeles, CA" email="martinvanessax3@gmail.com" linkedInURL='https://www.linkedin.com/in/vanessa-martin-a7352b182/'/>
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage.js'
import About from './About.js'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
       <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
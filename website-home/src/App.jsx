

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Agenda from './components/Agenda/Agenda';


const App = () => {
  

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />

            <Route path="/agenda" element={<Agenda/>} />
          </Routes>
      </div>
      
    </Router>
  );
};

export default App;
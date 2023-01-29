import React, { Component } from 'react';
import BgClassCss from './assets/css/BgClassCss.css'

import HoverTitle from './components/HoverTitle';
import NavHome from './components/NavHome';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="App">
      <NavHome />
      {/* <HoverTitle /> */}
      {/* <AboutMe /> */}
      <Skills />
      {/* <Works /> */}
      {/* <Achievements /> */}
    </div>
  );
}

export default App;

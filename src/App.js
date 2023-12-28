
import './App.css';
import React from "react";
import About from "./Components/About";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Samples from './Components/Samples';
import MyNav from './Components/MyNav';

function App() {
  return (
    <main className='text-white-400 bg-gray-900 body-font bg-dark'>
      <MyNav/>
      <About/>
      <Projects/>
      <Samples/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;

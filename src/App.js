import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');  // Weather dark mode is enable or not.
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#051f39";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
    <TextForm heading="Enter a text to analyze below" mode={mode}/>
    {/* <About /> */}
    </>
  );
}

export default App;

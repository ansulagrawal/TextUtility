import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');  // Weather dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#051f39";
      showAlert("Darkmode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled","success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm heading="Enter a text to analyze below" showAlert={showAlert} mode={mode}/>
    {/* <About /> */}
    </>
  );
}

export default App;

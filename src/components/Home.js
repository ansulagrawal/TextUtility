import React, {useState} from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import { BrowserRouter as Router, Route, Switch, /*NavLink, Link*/ } from 'react-router-dom';



export default function Home() {
    const [mode, setMode] = useState('light');  // Weather dark mode is enable or not.
    const [colr, setcolr] = useState('light');
    
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

    const toggleMode = (cls) => {
        if(cls === "green"){
            setMode("success");
            document.body.style.backgroundColor = "#19261b";
            showAlert("Green mode has been enabled", "success");
            setcolr("white")
            
        } else if(cls === "red"){
            setMode("danger");
            document.body.style.backgroundColor = "#6e2128";
            showAlert("Red mode has been enabled", "success");
            
        } else if(cls === "yellow"){
            setMode("warning");
            document.body.style.backgroundColor = "#453d26";
            showAlert("Yellow mode has been enabled", "success");
            
        } else if(cls === "blue"){
            setMode("info");
            document.body.style.backgroundColor = "#051f39";
            showAlert("Blue mode has been enabled", "success");
            
        } else if(cls === "light"){
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Lightmode has been enabled","success");
            
        } else if(cls === 'dark'){
            setMode("dark");
            document.body.style.backgroundColor = "#494848";
            showAlert("Lightmode has been enabled","success");
        }
    }   
    return (
        <>
            <Router>
                <Navbar title="Text Editor" about="About" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Switch>
                    <Route exact path="/about">
                        <About mode={mode} colr={colr} />
                    </Route>
                    <Route exact path="/">
                        <TextForm heading="Try Text Editor, word counter, character counter, remove extra spaces ..." showAlert={showAlert} mode={mode} colr={colr} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

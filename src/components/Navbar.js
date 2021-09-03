import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid" >
          <Link className="navbar-brand" style={{color: props.mode ==="light"? "" : "white"}} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link " style={{color: props.mode ==="light"? "" : "white"}} aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={{color: props.mode ==="light"? "" : "white"}} to="/about">{props.about}</Link>
              </li>
            </ul>

            <div className={`form-check form-check-inline mx-2 text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={() => {props.toggleMode("green")}} />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Green
              </label>
            </div>
            <div className={`form-check mx-2 text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={() => {props.toggleMode("red")}} />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Red
              </label>
            </div>
            <div className={`form-check mx-2 text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" onClick={() => {props.toggleMode("yellow")}} />
              <label className="form-check-label" htmlFor="exampleRadios3">
                Yellow
              </label>
            </div>
            <div className={`form-check mx-2 text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" onClick={() => {props.toggleMode("blue")}} />
              <label className="form-check-label" htmlFor="exampleRadios4">
                Blue
              </label>
            </div>
            <div className={`form-check mx-2 text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5" onClick={() => {props.toggleMode("light")}} />
              <label className="form-check-label" htmlFor="exampleRadios5">
                Light
              </label>
            </div>

            <div className={`form-check mx-2 text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="option6" onClick={() => {props.toggleMode("dark")}} />
              <label className="form-check-label" htmlFor="exampleRadios6">
                Dark
              </label>
            </div>

            {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" :"light"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "Enable" : "Disable"}`} Darkmode</label>
            </div> */}
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps ={
    title: 'Set title Here',
    about: 'Set about text here'
}
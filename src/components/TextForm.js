import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick =() => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick =() => {
        // console.log("Uppercase was clicked");
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleCewClick =() =>{
        let wor = text.split(" ");
        for (var i = 0; i< wor.length; i++){
            wor[i] = wor[i].charAt(0).toUpperCase() + wor[i].slice(1);
        }

        let str1 = wor.join(" ");
        setText(str1)
    }
    
    const handleClearClick =() => {
        setText("")
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    
    return (
        <>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" rows="10" placeholder="Enter text here" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</div>
            <div className="btn btn-success mx-3" onClick={handleLowClick}>Convert to Lowercase</div>
            <div className="btn btn-danger mx-3" onClick={handleCewClick}>Capitalize each word</div>
            <div className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text</div>
        </div>
        <div className="container my-3">
            <h3>Your text summary:</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{text.split(" ").length * 0.008}min read</p>
            <h3>Previw:</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes={heading: PropTypes.string.isRequired,}
TextForm.defaultProps ={heading: 'Enter text'}

import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState("")

    // Uppercase function
    const handleUpClick =() => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    // Lowercase function
    const handleLowClick =() => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    // Capitalize each word function
    const handleCewClick =() =>{
        let wor = text.split(" ");
        for (var i = 0; i< wor.length; i++){
            wor[i] = wor[i].charAt(0).toUpperCase() + wor[i].slice(1);
        }
        let str1 = wor.join(" ");
        setText(str1);
        props.showAlert("Capitalize each word!","success");
    }

    // Copy to Clipboard function
    const handleCopy =() => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to Clipboard!","success");
    }
    // Cleared all text function
    const handleClearClick =() => {
        setText("");
        props.showAlert("Cleared all text!", "success")
    }

    //Remove extra spaces function
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed the extra Spaces!","success");
    }

    // On Change function
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
        <div className="container mb-3 " style={{color:props.mode ==="dark"? "rgb(252 240 240)" :"#212529"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label "></label>
                <textarea className="form-control " id="myBox" rows="10" placeholder="Enter text here" style={{backgroundColor: props.mode ==="light"? "white" :"#051f39", color:props.mode ==="dark"? "rgb(252 240 240)" :"black"}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="btn btn-info" onClick={handleUpClick}>Convert to Uppercase</div>
            <div className="btn btn-info mx-3" onClick={handleLowClick}>Convert to Lowercase</div>
            <div className="btn btn-info mx-3" onClick={handleCewClick}>Capitalize each word</div>
            <div className="btn btn-info mx-3" onClick={handleCopy}>Copy Text</div>
            <div className="btn btn-info mx-3" onClick={handleClearClick}>Clear Text</div>
            <div className="btn btn-info mx-3" onClick={handleExtraSpaces}>Remove Extra Space</div>
        </div>
        <div className="container my-3 " style={{color:props.mode ==="dark"? "rgb(252 240 240)" :"#212529"}}>
            <h3>Your text summary:</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{text.split(" ").length * 0.008} min read</p>
            <h3>Preview:</h3>
            <p>{text.length > 0 ? text : "Enter something in the above box to preview here!"}</p>
        </div>
        </>
    )
}

TextForm.propTypes={heading: PropTypes.string.isRequired,}
TextForm.defaultProps ={heading: 'Enter text'}

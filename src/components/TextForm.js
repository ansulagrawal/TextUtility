import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState("")

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

    const handleCopy =() => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick =() => {
        setText("")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("on change");
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
            {/* <div className="btn btn-dark mx-3" onClick={handlePaste}>Paste Text</div> */}

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

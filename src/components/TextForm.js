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
        document.getSelection().removeAllRanges();
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

    //Remove all spaces function
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("Removed all Spaces!","success");
    }

    // On Change function
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
        <div className="container " style={{color:props.mode ==="light"? "#212529" :"rgb(252 240 240)"}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="m-1">
                {/* <textarea className="form-control " id="myBox" rows="10" placeholder="Enter text here" style={{backgroundColor: props.mode ==="light"? "white" :"#051f39", color:props.mode ==="dark"? "rgb(252 240 240)" :"black"}} value={text} onChange={handleOnChange}></textarea> */}
                <textarea className="form-control " id="myBox" rows="10" placeholder="Enter text here" style={{backgroundColor: "#ffffff24" , color: props.mode ==="light"? "black" : "white"}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleCewClick}>Capitalize each word</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? "primary" : props.mode} mx-1 my-1`} onClick={handleSpaces}>Remove all Space</button>
        </div>
        <div className="container my-3 " style={{color:props.mode ==="light"? "#212529" :"rgb(252 240 240)"}}>
            <h3>Your text summary:</h3>
            <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters.</p>
            <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length * 0.008} min read</p>
            <h3>Preview:</h3>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
        </>
    )
}

TextForm.propTypes={heading: PropTypes.string.isRequired,}
TextForm.defaultProps ={heading: 'Enter text'}

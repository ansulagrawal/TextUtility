import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick =() => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here")
    
    return (
        <>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</div>
        </div>
        </>
    )
}

TextForm.propTypes={heading: PropTypes.string.isRequired,}
TextForm.defaultProps ={heading: 'Enter text'}

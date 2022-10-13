import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

export default function TextForm(props) {
   const [text,setText] = useState('Enter text Here');
   const handleUpperCaseClick = () => {
    let upperText = text;
    upperText = upperText.toUpperCase();
    setText(upperText)
  }
  const clickOnChange = (event) =>
  {
    setText(event.target.value)
  }
  const handleLowerCaseClick = () => {
    let lowerText = text.toLowerCase()
    setText(lowerText)
  }
  const clearText = () => {
    setText("")
  }
  return (
    <>
    <div className = "container">
    <h1>{props.heading}</h1>
    <div className='mb-3'>
    <textarea className="form-control"  value={text} onChange ={clickOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick= {handleUpperCaseClick} >Convert to Upper-Case</button>
    <button className="btn btn-primary mx-2" onClick= {handleLowerCaseClick} >Convert to Lower-Case</button>
    <button className="btn btn-primary mx-2" onClick = {clearText}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words & {text.length} Characters</p>
      <p>Your need {text.split(" ").length*0.008} minutes to read the above sentence </p>
    </div>
    </>
  )
}

TextForm.prototypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Please Enter"
}
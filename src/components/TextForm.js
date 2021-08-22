import React, { useState } from 'react'
const TextForm = (props) => {
  const handleupClick = () => {
    let newtext = text.toUpperCase()
    settext(newtext)
    props.showAlert('Converted to Uppercase', 'success')
  }
  const handlelowClick = () => {
    let newtext = text.toLowerCase()
    settext(newtext)
    props.showAlert('Converted to Lowercase', 'success')
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text has been copid', 'success')
  }
  const handleonChange = (event) => {
    settext(event.target.value)
  }
  const [text, settext] = useState('')

  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === 'light' ? 'Black' : 'white' }}
      >
        <h3>{props.heading}</h3>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            }}
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleupClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-danger mx-2' onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-success mx-2' onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className='container my-3'
        style={{ color: props.mode === 'light' ? 'Black' : 'white' }}
      >
        <h4>Your Text Summary</h4>
        <p>
          {text.split(' ').length} words,{text.length}characters
        </p>
        <p>{0.008 * text.split(' ').length}Minutes read</p>
        <h5>Preview </h5>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm

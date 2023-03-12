import React, { useState } from 'react'

function InputComponent() {
    const [inputText, setText] = useState(" ");
    function handleChange(e) {
        setText(e.target.value)
    }
  return (
    <div>
      <input type="text" className='input' value={inputText} onChange={handleChange}/>
      <p>You typed: {inputText}</p>
      <button onClick={() => setText(" ")}>Reset</button>
    </div>
  )
}

export default InputComponent
 
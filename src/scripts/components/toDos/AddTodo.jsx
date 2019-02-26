import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({add}) => {
  const [text, setText] = useState('')
  const inputRef = useRef()
  return (
    <>
      <input ref={inputRef} type="text" value={text} onChange={ e => setText(e.target.value) } />
      <button onClick={() => {add(text); setText(""); inputRef.current.focus()}}>Add</button>
    </>
  )
}

AddTodo.propTypes = {
  add: PropTypes.func
}

export default AddTodo

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({add}) => {
  const [text, setText] = useState('')
  const inputRef = useRef()
  const onSubmit = (e) => e && e.preventDefault && e.preventDefault()

  return (
    <form onSubmit={onSubmit}>
      <input autoFocus ref={inputRef} type="text" value={text} onChange={ e => setText(e.target.value) } />
      <button onClick={() => {add(text); setText(""); inputRef.current.focus()}}>Add</button>
    </form>
  )
}

AddTodo.propTypes = {
  add: PropTypes.func
}

export default AddTodo

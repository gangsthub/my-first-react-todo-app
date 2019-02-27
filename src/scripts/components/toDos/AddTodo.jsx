import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({add}) => {
  const [text, setText] = useState('')
  const inputRef = useRef()
  const onSubmit = (e) => e && e.preventDefault && e.preventDefault()

  const handleSubmit = () => {
    add(text)
    setText('')
    inputRef.current.focus()
  }

  const handleInputChange = e => setText(e.target.value)

  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <button
        className="c-p"
        disabled={text === ''}
        onClick={handleSubmit}
      >Add</button>
    </form>
  )
}

AddTodo.propTypes = {
  add: PropTypes.func
}

export default AddTodo

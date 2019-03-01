// @ts-check

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import './AddTodo.scss'

const AddTodo = ({add}) => {
  const [text, setText] = useState('')
  const inputRef = useRef()
  /**
   * @param {{ preventDefault: () => void; }} e
   */
  const onSubmit = (e) => e && e.preventDefault && e.preventDefault()

  const handleSubmit = () => {
    add(text)
    setText('')
    /** @type {any} */
    const currentInputRef = inputRef && inputRef.current
    currentInputRef && currentInputRef.focus()
  }
  /**
   * @param {{ target: { value: React.SetStateAction<string>; }; }} e
   */
  const handleInputChange = e => setText(e.target.value)

  return (
    <form onSubmit={onSubmit} className="mt-4 mb-0 mb-0 flex pr-3 todo__input">
      <input
        autoFocus
        ref={inputRef}
        type="text"
        value={text}
        placeholder="To Do..."
        className="flex-1"
        onChange={handleInputChange}
      />
      <button
        className="c-p ml-4"
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

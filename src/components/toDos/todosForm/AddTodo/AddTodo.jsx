// @ts-check

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import './AddTodo.scss'

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')
  const inputRef = useRef()

  /**
   * @param {{ preventDefault: () => void; }} e
   */
  const onSubmit = e => e && e.preventDefault && e.preventDefault()

  const handleSubmit = () => {
    onAdd(text)
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
    <form onSubmit={onSubmit} className="my-4 flex pr-3 todo__input">
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
      >
        Add
      </button>
    </form>
  )
}

AddTodo.propTypes = {
  onAdd: PropTypes.func
}

export default AddTodo

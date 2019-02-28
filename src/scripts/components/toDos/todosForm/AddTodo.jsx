// @ts-check

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

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
    <form onSubmit={onSubmit} className="mt-auto mb-0">
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

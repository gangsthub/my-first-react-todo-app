// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import './TodoItem.scss'

const TodoItem = ({ todo, i, onRemove, onToggle }) => {
  const customId = 'checked' + todo.id

  return (
    <div className="mb-4 px-4 py-3 mr-3 flex justify-content-between align-items-center todo__item bg-light">
      <label htmlFor={customId} className="flex align-items-center c-p">
        <span className="mr-4">{i}.-</span>
        <input
          type="checkbox"
          className="c-p"
          id={customId}
          checked={todo.checked}
          onChange={onToggle}
        />
        <span
          className={
            'oh px-3 user-select-none ' +
            (todo.checked ? 'strike-trough translucency ' : undefined)
          }
        >
          {todo.text}
        </span>
      </label>
      <button onClick={onRemove} className="ml-auto mr-0 c-p">
        Remove
      </button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  i: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoItem

// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import './TodoItem.scss'

const TodoItem = ({todo, remove, toggleCheck}) => {

  const customId = 'checked' + todo.id

  return (
    <div className="w100p mb-4 pr-5 flex justify-content-between todo__item">
      <label htmlFor={customId} className="flex align-items-center c-p">
        <input
          type="checkbox"
          id={customId}
          checked={todo.checked}
          onChange={toggleCheck}
        />
        <span
          className={
            'oh px-3 user-select-none ' + (todo.checked ? 'strike-trough translucency ': undefined)
          }
        >{todo.text}</span>
      </label>
      <button onClick={remove} className="c-p">Remove</button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  remove: PropTypes.func.isRequired,
  toggleCheck: PropTypes.func.isRequired,
}

export default TodoItem
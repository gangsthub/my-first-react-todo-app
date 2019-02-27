import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo, remove, toggleCheck}) => {

  const customId = 'checked' + todo.id

  return (
    <div className="w100p">
      <label htmlFor={customId} className="c-p">
        <input
          type="checkbox"
          id={customId}
          checked={todo.checked}
          onChange={toggleCheck}
        />
        <span
          className={'user-select-none ' + (todo.checked ? 'strike-trough translucency ': undefined)}
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
import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo, remove}) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  remove: PropTypes.func.isRequired,
}

export default TodoItem
import React from 'react'
import PropTypes from 'prop-types'
import { sum } from '../../../utils/sum'

const TodosHeader = ({ todos }) => {
  const checkedTodos = todos =>
    todos
      .filter(todo => todo.checked)
      .reduce(accumulated => sum(accumulated)(1), 0)

  return (
    <header className="flex align-items-center mb-3">
      <h2 className="sm:order-0 mb-0">To Do List</h2>
      <span className="ml-3">
        {' '}
        ({checkedTodos(todos)}/{todos.length})
      </span>
    </header>
  )
}

TodosHeader.propTypes = {
  todos: PropTypes.array
}

export default TodosHeader

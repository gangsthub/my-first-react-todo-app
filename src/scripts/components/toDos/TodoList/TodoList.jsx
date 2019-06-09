import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../todosForm/TodoItem/TodoItem'

const TodoList = ({ todos, onRemove, onToggle }) => {
  let el

  useEffect(() => {
    setTimeout(() => {
      el.scrollTop = el.scrollHeight
    })
  })

  return (
    <div
      className="scroll-y mb-auto sm:order-1"
      ref={element => {
        el = element
      }}
    >
      {todos.length ? (
        todos.map((todo, i) => (
          <TodoItem
            key={i}
            i={i}
            todo={todo}
            onRemove={() => onRemove(todo.id)}
            onToggle={() => onToggle(todo.id)}
          />
        ))
      ) : (
        <span className="user-select-none translucency">Add your ToDos...</span>
      )}
      <div className="scroller" />
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList

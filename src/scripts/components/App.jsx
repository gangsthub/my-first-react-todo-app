import React, { useReducer } from 'react'

import initialState from './toDos/todos.state'
import {
  todosReducer,
  ADD_TODO,
  REMOVE_TODO
} from './toDos/todos.reducer'

import AddTodo from './toDos/AddTodo'
import TodoItem from './toDos/TodoItem'

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState)
  return (
    <>
      <div className="App ">
        <h1>Todo App</h1>
        {
          state.todos.map((todo, i) => (
            <TodoItem
              key={i}
              todo={todo}
              remove={() => dispatch({type: REMOVE_TODO, id: todo.id})}
            />
          ))
        }
        <AddTodo
          add={ text => dispatch({type: ADD_TODO, text}) }
        />
      </div>
    </>
  )
}

export default App

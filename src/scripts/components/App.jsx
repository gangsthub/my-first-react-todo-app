import React, { useReducer, useEffect } from 'react'

import { todosLSKey,  initialState } from './toDos/todos.state'
import {
  todosReducer,
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO
} from './toDos/todos.reducer'

import AddTodo from './toDos/AddTodo'
import TodoItem from './toDos/TodoItem'

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  // eslint-disable-next-line no-console
  console.log(state)

  useEffect(
    () => {
      window.localStorage.setItem(todosLSKey, JSON.stringify(state))
    },
    [state]
  )

  // try to avoid arrow functions (and bind) in render
  const addTodo = text =>  dispatch({type: ADD_TODO, text})

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
              toggleCheck={() => dispatch({type: CHECK_TODO, id: todo.id})}
            />
          ))
        }
        <AddTodo
          add={addTodo}
        />
      </div>
    </>
  )
}

export default App

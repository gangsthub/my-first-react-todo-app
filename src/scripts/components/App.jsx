import React, { useReducer } from 'react'

import initialState from '../store/todos.state'
import {
  reducer,
  ADD_TODO
} from '../store/reducer'

import AddTodo from './AddTodo'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        {
          state.todos.map((todo, i) => (
            <div key={i}>{todo.text}</div>
          ))
        }
        <AddTodo
          add={text => dispatch({type: ADD_TODO, text})}
        />
      </div>
    </>
  )
}

export default App

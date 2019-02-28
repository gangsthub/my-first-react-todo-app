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
import Header from './layout/Header'
import Footer from './layout/Footer'

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
  const addTodo = text => dispatch({type: ADD_TODO, text})

  return (
    <>
      <div className="App">
        <Header headerTitle="ToDo App"/>
        <main className="sm:flex justify-content-between">
          <section>
            {
              state.todos.length
                ?
                state.todos.map((todo, i) => (
                  <TodoItem
                    key={i}
                    todo={todo}
                    remove={() => dispatch({type: REMOVE_TODO, id: todo.id})}
                    toggleCheck={() => dispatch({type: CHECK_TODO, id: todo.id})}
                  />
                ))
                :
                'Add your ToDos...'
            }
            <AddTodo
              add={addTodo}
            />
          </section>
          <aside>
            <h2>Logging</h2>
          </aside>
        </main>
        <Footer footerText="Exercise"/>
      </div>
    </>
  )
}

export default App

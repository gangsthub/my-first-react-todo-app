// @ts-check

import React, { useReducer, useEffect } from 'react'

import { todosLSKey,  initialState } from './toDos/todos.state'
import {
  todosReducer,
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO
} from './toDos/todos.reducer'

import AddTodo from './toDos/todosForm/AddTodo'
import TodoItem from './toDos/todosForm/TodoItem/TodoItem'
import History from './toDos/Logging/History'
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
      <div
        className="app flex column justify-content-between w100p sm:w60p ma-auto"
      >
        <Header headerTitle="ToDo App"/>
        <main className="sm:flex justify-content-between flex-1">
          <section className="pb-4 w80p flex column">
            <h2>To Do List</h2>
            <div className="scroll-y">

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
            </div>
            <AddTodo
              add={addTodo}
            />
          </section>
          <aside className="w20p scroll-y">
            <h2>Logging</h2>
            <History todos={state.toDosHistory} />
          </aside>
        </main>
        <Footer footerText="Exercise"/>
      </div>
    </>
  )
}

export default App

// @ts-check

import React, { useReducer, useEffect } from 'react'

import { todosLSKey,  initialState } from './toDos/todos.state'
import {
  todosReducer,
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO
} from './toDos/todos.reducer'

import AddTodo from './toDos/todosForm/AddTodo/AddTodo'
import TodoItem from './toDos/todosForm/TodoItem/TodoItem'
import HistoryLogging from './toDos/logging/HistoryLogging'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  // eslint-disable-next-line no-console
  // console.log(state)

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
        className="app flex column justify-content-between w90p sm:w60p ma-auto "
      >
        <Header headerTitle="ToDo App"/>
        <main className="sm:flex justify-content-between flex-1">
          <section className="pb-4 sm:w70p md:w80p xl:w80p flex column justify-content-between">
            <h2 className="sm:order-0">To Do List</h2>
            <div className="scroll-y mb-auto sm:order-1">
              {
                state.todos.length
                  ?
                  state.todos.map((todo, i) => (
                    <TodoItem
                      key={i}
                      i={i}
                      todo={todo}
                      remove={() => dispatch({type: REMOVE_TODO, id: todo.id})}
                      toggleCheck={() => dispatch({type: CHECK_TODO, id: todo.id})}
                    />
                  ))
                  :
                  'Add your ToDos...'
              }
            </div>
            <div
              className="sm:order-0"
            >
              <AddTodo
                add={addTodo}
              />
            </div>
          </section>
          <aside className="sm:w30p md:w20p xl:w20p scroll-y flex column justify-content-between">
            <h2>Logging</h2>
            <HistoryLogging todos={state.toDosHistory} />
          </aside>
        </main>
        <Footer footerText="Exercise"/>
      </div>
    </>
  )
}

export default App

// @ts-check

import React, { useReducer, useEffect } from 'react'

import { todosLSKey, initialState } from './toDos/todos.state'
import {
  todosReducer,
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO
} from './toDos/todos.reducer'

import AddTodo from './toDos/todosForm/AddTodo/AddTodo'
import TodoList from './toDos/TodoList/TodoList'
import HistoryLogging from './toDos/logging/HistoryLogging'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  useEffect(() => {
    window.localStorage.setItem(todosLSKey, JSON.stringify(state))
  }, [state])

  /**
   * @param {String} text
   */
  const addTodo = text => dispatch({ type: ADD_TODO, text })

  /**
   * @param {Number} id
   */

  const onRemove = id => dispatch({ type: REMOVE_TODO, id })
  /**
   * @param {Number} id
   */
  const onToggle = id => dispatch({ type: CHECK_TODO, id })

  return (
    <>
      <div className="app flex column justify-content-between w90p sm:w60p ma-auto ">
        <Header headerTitle="ToDo App" />
        <main className="sm:flex justify-content-between flex-1 scroll-y">
          <section className="pb-4 sm:w70p md:w80p xl:w80p flex column justify-content-between">
            <h2 className="sm:order-0">To Do List</h2>
            <TodoList
              todos={state.todos}
              onRemove={onRemove}
              onToggle={onToggle}
            />
            <div className="sm:order-0">
              <AddTodo onAdd={addTodo} />
            </div>
          </section>
          <aside className="sm:w30p md:w20p xl:w20p scroll-y flex column justify-content-between">
            <h2>Logging</h2>
            <HistoryLogging todos={state.toDosHistory} />
          </aside>
        </main>
        <Footer footerText="Footer" />
      </div>
    </>
  )
}

export default App

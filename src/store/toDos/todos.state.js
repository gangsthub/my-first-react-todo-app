// @ts-check

import toDoFactory from '../../core/todoGenerator'

const todosLSKey = 'toDos'
const initialState = JSON.parse(window.localStorage.getItem(todosLSKey)) || {
  todos: [
    {
      ...toDoFactory({ text: 'To Do 1' })
    },
    {
      ...toDoFactory({ text: 'To Do 2' })
    }
  ]
}

initialState.toDosHistory = [...initialState.todos]

export { todosLSKey, toDoFactory, initialState }

// @ts-check

import {toDoFactory} from './todos.state'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHECK_TODO = 'CHECK_TODO'

export const todosReducer = (state, action) => {
  switch (action.type) {
  case ADD_TODO:
    if (action.text) {
      const newTodo = toDoFactory({ text: action.text})
      return {
        ...state,
        todos: [
          ...state.todos,
          newTodo
        ],
        toDosHistory: [
          ...state.toDosHistory,
          newTodo
        ],
      }
    }
    return state
  case REMOVE_TODO:
    if (action.id) {
      const todoFound = {...state.todos.find(todo => todo.id === action.id)}
      const newSetOfToDos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: newSetOfToDos,
        toDosHistory: [
          ...state.toDosHistory,
          todoFound && Object.assign(todoFound, { lastAction: REMOVE_TODO })
        ],
      }
    }
    return state
  case CHECK_TODO:
    if (action.id) {
      const todoFound = {...state.todos.find(todo => todo.id === action.id)}
      const newSetOfToDos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.checked = !todo.checked
          todo.lastAction = todo.checked
        }
        return todo
      })
      return {
        ...state,
        todos: newSetOfToDos,
        toDosHistory: [
          ...state.toDosHistory,
          todoFound && Object.assign(todoFound, { lastAction: CHECK_TODO, checked: !todoFound.checked })
        ],
      }
    }
    return state
  default:
    throw new Error('no action type matching')
  }
}

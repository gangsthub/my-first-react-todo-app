import {toDoFactory} from './todos.state'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHECK_TODO = 'CHECK_TODO'

export const todosReducer = (state, action) => {
  switch (action.type) {
  case ADD_TODO:
    if (action.text) {
      return {
        ...state,
        todos: [
          ...state.todos,
          toDoFactory({ text: action.text})
        ]
      }
    }
    return state
  case REMOVE_TODO:
    if (action.id) {
      const newSetOfToDos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: newSetOfToDos
      }
    }
    return state
  case CHECK_TODO:
    if (action.id) {
      const newSetOfToDos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.checked = !todo.checked
        }
        return todo
      })
      return {
        ...state,
        todos: newSetOfToDos
      }
    }
    return state
  default:
    throw new Error('no action type matching')
  }
}

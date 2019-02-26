import newUuid from '../utils/uuid'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHECK_TODO = 'CHECK_TODO'

export const reducer = (state, action) => {
  switch (action.type) {
  case ADD_TODO:
    if (action.text) {
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.text, id: newUuid() }
        ]
      }
    }
    return state
  default:
    throw new Error()
  }
}

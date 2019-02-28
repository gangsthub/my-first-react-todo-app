import newUuid from '../../utils/uuid'
import { ADD_TODO } from './todos.reducer'

/**
 * Helper function to generate ToDos
 */
const toDoFactory = ({
  text
} = {}) => ({
  id: newUuid(),
  text,
  lastAction: ADD_TODO,
  checked: false,
  date: new Date(),
})

const todosLSKey = 'toDos'
const initialState = JSON.parse(window.localStorage.getItem(todosLSKey)) || {
  todos: [
    {
      ...toDoFactory({text: 'To Do 1'})
    },
    {
      ...toDoFactory({text: 'To Do 2'})
    },
  ],
}

initialState.toDosHistory = [...initialState.todos]


export {todosLSKey, toDoFactory, initialState}

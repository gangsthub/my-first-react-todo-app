// @ts-check

import newUuid from '../utils/uuid'

import { ADD_TODO } from '../store/toDos/todos.reducer'

/**
 * Helper function to generate ToDos
 */
const toDoFactory = ({
  /** @type {srting} */
  text = ''
} = {}) => ({
  id: newUuid(),
  text,
  lastAction: ADD_TODO,
  checked: false,
  date: new Date()
})

export default toDoFactory

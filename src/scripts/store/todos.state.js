import newUuid from '../utils/uuid'
import { ADD_TODO } from './reducer'

const toDoFactory = ({
  text = 'ToDo',
  id = newUuid(),
  lastAction = ADD_TODO,
  date = new Date()
} = {}) => ({
  text,
  id,
  lastAction,
  date,
})

const initialState = {
  counter: 2,
  todos: [
    {
      ...toDoFactory('To Do 1')
    },
    {
      ...toDoFactory('To Do 2')
    },
  ]
}

export default initialState

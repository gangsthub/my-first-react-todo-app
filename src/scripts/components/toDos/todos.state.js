import newUuid from '../../utils/uuid'
import { ADD_TODO } from './todos.reducer'

const toDoFactory = ({
  text = '<ToDo>',
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
  todos: [
    {
      ...toDoFactory({text: 'To Do 1'})
    },
    {
      ...toDoFactory({text: 'To Do 2'})
    },
  ]
}

export default initialState

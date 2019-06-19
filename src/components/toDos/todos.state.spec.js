// @ts-check
import { toDoFactory, initialState } from './todos.state'

jest
  // @ts-ignore
  .spyOn(global.Date, 'constructor')
  .mockImplementationOnce(() => new Date('2019-06-19T00:07:19.309Z'))

jest.mock('../../utils/uuid', () => jest.fn().mockReturnValue(1))

describe('toDo Factory function', () => {
  it('returns expected shape', () => {
    const actual = toDoFactory({ text: 'first test' })
    const expected = {
      id: 1,
      text: 'first test',
      lastAction: 'ADD_TODO',
      checked: false,
      date: new Date()
    }
    expect(actual).toEqual(expected)
  })
})

describe('initialState', () => {
  const todos = initialState.todos
  it('has initial state with 2 todos', () => {
    expect(todos.length).toBe(2)
  })
  it('maps the names correctly', () => {
    const actual = todos.map(todo => todo.text)
    const expected = ['To Do 1', 'To Do 2']
    expect(actual).toEqual(expected)
  })
})

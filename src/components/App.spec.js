import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'

const renderer = new ShallowRenderer()

jest.mock('./toDos/todos.state', () => ({
  todosLSKey: 'a',
  initialState: []
}))

describe('App smoke test', () => {
  it('matched expected output', () => {
    renderer.render(<App />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
})

import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import HistoryLogging from './HistoryLogging'
import { toDoFactory } from '../todos.state'

const shallowRenderer = new ShallowRenderer()

describe('History', () => {
  let todos
  const text = 'hey'
  beforeEach(() => {
    todos = [toDoFactory({ text }), toDoFactory({ text })].map(todo => ({
      text: todo.text
    }))
  })
  it('prints a list', () => {
    shallowRenderer.render(<HistoryLogging todos={todos} />)
    const output = shallowRenderer.getRenderOutput()
    expect(output).toMatchSnapshot()
    expect(output.props.children.length).toBe(2)
  })
})

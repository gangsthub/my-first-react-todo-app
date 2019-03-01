// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './../todos.reducer'

import TodoDate from './TodoDate'

const HistoryItem = ({todo}) => {

  const subString = todo.text ?
    ('' + todo.text).length > 10 ?
      ('' + todo.text).substring(0, 10) + '...' :
      todo.text :
    ''
  let emoji = '➕'
  switch (todo.lastAction) {
  case ADD_TODO:
    emoji = todo.checked ? '✅' : '➕'
    break
  case REMOVE_TODO:
    emoji = '👋🏾'
    break
  case CHECK_TODO:
    emoji = todo.checked ? '✅' : '🔙'
    break
  default:
    break
  }

  return (
    <div className="mb-5">
      <div className="mb-2">
        <TodoDate date={todo.date} />
      </div>
      <span className="mr-3">{emoji}</span>
      <span className="oh" title={todo.text}>{subString}</span>
    </div>
  )
}

HistoryItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default HistoryItem
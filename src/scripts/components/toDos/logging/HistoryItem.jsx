// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './../todos.reducer'


const HistoryItem = ({todo}) => {

  const subString = todo.text ? ('' + todo.text).substring(0, 10) + '...' : ''
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
    <div>
      {
        emoji
      }
      <span className="oh" title={todo.text}>{subString}</span>
    </div>
  )
}

HistoryItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default HistoryItem
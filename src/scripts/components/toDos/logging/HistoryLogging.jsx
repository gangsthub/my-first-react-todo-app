// @ts-check

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'

const HistoryLogging = ({ todos }) => {
  let el
  useEffect(() => {
    el.scrollTop = el.scrollHeight
  })

  return (
    <div
      className="pa-3 bg-light flex-1 scroll-y mt-3"
      ref={element => {
        el = element
      }}
    >
      {todos.map((todo, i) => (
        <HistoryItem key={i} todo={todo} />
      ))}
    </div>
  )
}

HistoryLogging.propTypes = {
  todos: PropTypes.array
}

export default HistoryLogging

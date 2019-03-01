// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'

const HistoryLogging = ({todos}) => {
  return (
    <div className="pa-3 bg-light flex-1">
      {
        todos.map((todo, i) => <HistoryItem key={i} todo={todo} />)
      }
    </div>
  )
}

HistoryLogging.propTypes = {
  todos: PropTypes.array,
}

export default HistoryLogging

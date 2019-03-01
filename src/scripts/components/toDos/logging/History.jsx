// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'

const History = ({todos}) => {
  return (
    <div className="pa-3">
      {
        todos.map((todo, i) => <HistoryItem key={i} todo={todo} />)
      }
    </div>
  )
}

History.propTypes = {
  todos: PropTypes.array,
}

export default History

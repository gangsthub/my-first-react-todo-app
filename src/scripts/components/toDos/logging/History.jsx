// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'

const History = ({todos}) => {
  return (
    <>
    {
      todos.map((todo, i) => <HistoryItem key={i} todo={todo} />)
    }
    </>
  )
}

History.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default History
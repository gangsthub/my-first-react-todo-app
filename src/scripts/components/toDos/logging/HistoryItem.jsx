// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

const HistoryItem = ({todo}) => {

  return (
    <div>
      <span>{todo.text}</span>
    </div>
  )
}

HistoryItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default HistoryItem
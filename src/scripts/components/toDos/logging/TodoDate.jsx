// @ts-check

import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
// https://github.com/iamkun/dayjs

const TodoDate = ({date}) => {
  const formattedDate = dayjs(new Date(date).toString()).format('DD-MM-YYYY HH:mm:ss')
  return <span className="fsz-small">{formattedDate}</span>
}

TodoDate.propTypes = {
  date: PropTypes.string
}

export default TodoDate

import React from 'react'
import PropTypes from 'prop-types'

Header.propTypes = {
  headerTitle: PropTypes.string,
}

export default function Header({headerTitle}) {
  return (
    <header>
      <h1>{headerTitle}</h1>
    </header>
  )
}

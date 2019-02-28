import React from 'react'
import PropTypes from 'prop-types'

Footer.propTypes = {
  footerText: PropTypes.string,
}

export default function Footer({footerText}) {
  return (
    <footer className="tac pa-5">
      <h3>{footerText}</h3>
    </footer>
  )
}

import React from 'react'
import PropTypes from 'prop-types'

Footer.propTypes = {
  footerText: PropTypes.string,
}

export default function Footer({footerText}) {
  return (
    <footer>
      <h3>{footerText}</h3>
    </footer>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'

import typography from './utils/typography'
typography.injectStyles()

import App from './components/App'

const rootElement = document.getElementById('app')
ReactDOM.render(<App />, rootElement)

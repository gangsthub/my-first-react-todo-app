// @ts-check

import React/* , {useRef} */ from 'react'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'

const History = ({todos}) => {
  // const scrollToBottomEl = useRef()
  // const currentInstanceEl = scrollToBottomEl && scrollToBottomEl.current
  // if (currentInstanceEl) currentInstanceEl.scrollTop = currentInstanceEl.scrollHeight

  return (
    <div className="pa-3" /* ref={scrollToBottomEl} */>
      {
        todos.map((todo, i) => <HistoryItem key={i} todo={todo} />)
      }
    </div>
  )
}

History.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default History
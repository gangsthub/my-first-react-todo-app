import React, {useState} from 'react'

const AddTodo = ({add}) => {
  const [text, setText] = useState('')
  return (
    <>
      <input type="text" value={text} onChange={ e => setText(e.target.value) } />
      <button onClick={() => {add(text); setText("")}}>Add</button>
    </>
  )
}

AddTodo.prototype.propTypes = { add: Function }

export default AddTodo
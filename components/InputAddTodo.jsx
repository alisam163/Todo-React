import { useState } from 'react'
import styles from './InputAddTodo.module.css'
import { nanoid } from 'nanoid'
import { IoIosAddCircleOutline } from 'react-icons/io'

export const InputAddTodo = (props) => {
  const { addTodo } = props
  const [text, setText] = useState('')

  const changeInputText = (event) => {
    setText(event.target.value)
  }

  const submitAddTodo = (event) => {
    const newTodo = {
      title: text,
      important: false,
      id: nanoid(),
    }
    addTodo(newTodo)
    setText('')
  }

  return (
    <div className={styles.inputAddTodo}>
      <input type="text" value={text} onChange={changeInputText} />
      <button type="submit" onClick={submitAddTodo}>
        Добавить
        <div className={styles.button_add}>
          <IoIosAddCircleOutline />
        </div>
      </button>
    </div>
  )
}

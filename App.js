import './App.css'
import { TitleHeader } from './components/TitleHeader'
import { TodoList } from './components/TodoList'
import { InputAddTodo } from './components/InputAddTodo'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const handlerAddTodo = (text) => {
    setTodos([...todos, text])
  }

  const handlerDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id))
    console.log(id)
  }

  const handlerToggleImportant = (item) => {
    const newArray = todos.map((i) => {
      if (i === item) {
        const newItem = {
          ...item,
          important: !item.important,
        }
        return newItem
      }
      return i
    })
    setTodos(newArray)
  }

  return (
    <div className="App">
      <TitleHeader />
      <TodoList
        todos={todos}
        deleteTodo={handlerDeleteTodo}
        toggleImportant={handlerToggleImportant}
      />
      <InputAddTodo addTodo={handlerAddTodo} />
    </div>
  )
}

export default App

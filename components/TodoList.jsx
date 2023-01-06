import { TodoItem } from './TodoItem'
import styles from './TodoList.module.css'

export const TodoList = ({ todos, deleteTodo, toggleImportant }) => {
  return (
    <ul className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            toggleImportant={toggleImportant}
          >
            {item.title}
          </TodoItem>
        ))
      ) : (
        <h3>Список задач пуст</h3>
      )}
    </ul>
  )
}

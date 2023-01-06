import styles from './TodoItem.module.css'
import { BiAlarmExclamation } from 'react-icons/bi'
import { BsFillTrash2Fill } from 'react-icons/bs'

export const TodoItem = (props) => {
  const { item, deleteTodo, toggleImportant } = props
  return (
    <div className={styles.item}>
      <div
        className={item.important ? styles.title_important : styles.title}
        onClick={() => console.log('click')}
      >
        {props.children}
      </div>
      <div className={styles.button}>
        <div className={styles.button_item} onClick={() => deleteTodo(item.id)}>
          <BsFillTrash2Fill />
        </div>
        <div
          className={styles.button_item}
          onClick={() => toggleImportant(item)}
        >
          <BiAlarmExclamation />
        </div>
      </div>
    </div>
  )
}

import React from "react";
import { Todo } from "../../types/models";
import { useAppDispatch } from "../../store/utils/hooks";
import { deleteTodo, toggleCompletedTodo } from "../../store/slices/todoSlices";
import styles from './TodoItem.module.scss';
import { Text } from "../../ui-kit/Text/Text";
import { Button } from "../../ui-kit/Button/Button";
import deleteIcon from "../../assets/delete-icon.svg"

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleCompletedTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.checkboxInput}
        />
        <span className={styles.checkmark}></span>
      </label>
      <Text
        variant="body"
        className={`${styles.todoText} ${todo.completed ? styles.completedText : ''}`}
      >
        {todo.text}
      </Text>
      <Button
        text=""
        type="button"
        onClick={handleDelete}
        className={styles.deleteButton}
        aria-label="Delete todo"
        icon={<img src={deleteIcon} alt="Удалить" />}
        iconPosition="left"
      />
    </div>
  );
};
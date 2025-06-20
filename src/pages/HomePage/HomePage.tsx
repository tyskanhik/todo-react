import React from "react";
import { useAppSelector } from "../../store/utils/hooks";
import { Text } from "../../ui-kit/Text/Text";
import styles from './HomePage.module.scss';
import { TodoItem } from "../TodoItem/TodoItem";
import { Button } from "../../ui-kit/Button/Button";
import addIcon from "../../assets/add-icon.svg";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const todos = useAppSelector(store => store.todos);
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <Text variant="h1" className={styles.title}>Todo</Text>

      <Button 
        text=''
        type="button"
        icon={<img src={addIcon} alt="Добавить" />}
        iconPosition="left"
        className={styles.addButton}
        style={{padding: '0 40px'}}
        onClick={() => navigate('/add')}
      />
      
      {todos.todos.length === 0 ? (
        <div className={styles.emptyState}>
          <Text variant="body" color="secondary" className={styles.emptyText}>
            Вы пока не добавляли записи
          </Text>
        </div>
      ) : (
        <div className={styles.todoContainer}>
          <Text variant="h2" className={styles.subtitle}>Список задач</Text>
          <div className={styles.todoList}>
            {todos.todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
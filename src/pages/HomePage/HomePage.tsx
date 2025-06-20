import React from "react";
import { useAppSelector } from "../../store/utils/hooks";
import { Text } from "../../ui-kit/Text/Text";
import styles from './HomePage.module.scss';
import { TodoItem } from "../TodoItem/TodoItem";
import { Button } from "../../ui-kit/Button/Button";
import addIcon from "../../assets/add-icon.svg";
import { useNavigate } from "react-router-dom";
import { TodoFilter } from "../TodoFilter/TodoFilter";

export const HomePage: React.FC = () => {
  const { todos, filter } = useAppSelector(store => store.todos);
  const navigate = useNavigate();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const getEmptyStateText = () => {
    switch (filter) {
      case 'active': return 'Нет активных задач';
      case 'completed': return 'Нет выполненных задач';
      default: return 'Вы пока не добавляли записи';
    }
  };

  return (
    <div className={styles.homePage}>
      <Text variant="h1" className={styles.title}>Todo</Text>

      <div className={styles.actions}>
        <Button 
          text=''
          type="button"
          icon={<img src={addIcon} alt="Добавить" />}
          iconPosition="left"
          onClick={() => navigate('/add')}
          style={{width: '200px'}}
        />
        <TodoFilter />
      </div>
      
      {filteredTodos.length === 0 ? (
        <div className={styles.emptyState}>
          <Text variant="body" color="secondary">
            {getEmptyStateText()}
          </Text>
        </div>
      ) : (
        <div className={styles.todoList}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};
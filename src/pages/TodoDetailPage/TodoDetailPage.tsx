import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/utils/hooks";
import { updateTodo } from "../../store/slices/todoSlices";
import { Button } from "../../ui-kit/Button/Button";
import { Text } from "../../ui-kit/Text/Text";
import styles from './TodoDetailPage.module.scss';

export const TodoDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const todo = useAppSelector(store => 
    store.todos.todos.find(t => t.id === id)
  );

  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todo) {
      setText(todo.text);
      setDescription(todo.description);
      setCompleted(todo.completed);
    } else {
      navigate('/');
    }
  }, [todo, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo && text.trim()) {
      dispatch(updateTodo({
        ...todo,
        text,
        description,
        completed
      }));
      navigate('/');
    }
  };

  const isSubmitDisabled = !text.trim();

  return (
    <div className={styles.detailPage}>
      <Text variant="h1" className={styles.title}>
        {todo?.text || 'Задача'}
      </Text>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="text" className={styles.label}>
            Название задачи <span className={styles.required}>*</span>
          </label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Описание
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${styles.input} ${styles.textarea}`}
            rows={6}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className={styles.checkboxInput}
          />
          <label htmlFor="completed" className={styles.checkboxLabel}>
            Задача выполнена
          </label>
        </div>

        <div className={styles.buttons}>
          <Button
            type="submit"
            text="Сохранить"
            disabled={isSubmitDisabled}
            className={styles.submitButton}
          />
          <Button
            type="reset"
            text="Отмена"
            onClick={() => navigate('/')}
            className={styles.cancelButton}
          />
        </div>
      </form>
    </div>
  );
};
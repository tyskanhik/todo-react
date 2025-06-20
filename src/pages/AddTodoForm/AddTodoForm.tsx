import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/utils/hooks";
import { addTodo } from "../../store/slices/todoSlices"
import { Button } from "../../ui-kit/Button/Button";
import { Text } from "../../ui-kit/Text/Text";
import styles from './AddTodoForm.module.scss';

export const AddTodoPage: React.FC = () => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        text,
        description,
        completed: false
      };
      dispatch(addTodo(newTodo));
      navigate('/');
    }
  };

  const isSubmitDisabled = !text.trim();

  return (
    <div className={styles.addTodoPage}>
      <Text variant="h1" className={styles.title}>Добавить новую задачу</Text>
      
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
            placeholder="Введите название задачи"
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
            placeholder="Введите описание (необязательно)"
            rows={4}
          />
        </div>

        <div className={styles.buttons}>
          <Button
            text="Создать"
            type="submit"
            disabled={isSubmitDisabled}
            className={styles.submitButton}
          />
          <Button
            text="Отмена"
            type="reset"
            onClick={() => navigate('/')}
            className={styles.cancelButton}
          />
        </div>
      </form>
    </div>
  );
};
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/utils/hooks";
import { setFilter } from "../../store/slices/todoSlices";
import { Text } from "../../ui-kit/Text/Text";
import styles from './TodoFilter.module.scss';

export const TodoFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(store => store.todos.filter);
  const [isOpen, setIsOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'Все задачи' },
    { id: 'active', label: 'Только активные' },
    { id: 'completed', label: 'Только выполненные' }
  ];

  const currentFilterLabel = filters.find(f => f.id === currentFilter)?.label || 'Фильтр';

  const handleFilterSelect = (filterId: 'all' | 'active' | 'completed') => {
    dispatch(setFilter(filterId));
    setIsOpen(false);
  };

  return (
    <div className={styles.filterDropdown}>
      <button 
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Text variant="body">{currentFilterLabel}</Text>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {filters.map(filter => (
            <li key={filter.id} className={styles.menuItem}>
              <button
                onClick={() => handleFilterSelect(filter.id as 'all' | 'active' | 'completed')}
                className={`${styles.menuButton} ${currentFilter === filter.id ? styles.active : ''}`}
              >
                <Text variant="body">{filter.label}</Text>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
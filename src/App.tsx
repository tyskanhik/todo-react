import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AddTodoPage } from './pages/AddTodoForm/AddTodoForm';
import { TodoDetailPage } from './pages/TodoDetailPage/TodoDetailPage';
import { ThemeProvider } from './pages/ThemeContext/ThemeContext';
import { ThemeToggle } from './pages/ThemeToggle/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="/add" element={<AddTodoPage />} />
          <Route path="/todo/:id" element={<TodoDetailPage />} />
        </Routes>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;

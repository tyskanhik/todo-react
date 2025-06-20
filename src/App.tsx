import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AddTodoPage } from './pages/AddTodoForm/AddTodoForm';
import { TodoDetailPage } from './pages/TodoDetailPage/TodoDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/add" element={<AddTodoPage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

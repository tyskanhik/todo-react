import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AddTodoPage } from './pages/AddTodoForm/AddTodoForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/add" element={<AddTodoPage />} />
      </Routes>
    </div>
  );
}

export default App;

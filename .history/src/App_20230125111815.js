import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

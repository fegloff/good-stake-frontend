import { Route, Routes } from 'react-router-dom';
import Login from './routes/login/login.component';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

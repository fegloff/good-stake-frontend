import { Route, Routes } from 'react-router-dom';
import Login from './routes/login/login.component';

import './App.scss';
import Private from './routes/private/private.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Login />} />
        
        {/* Private routes */}
        <Route path="stake/" element={<Private />}>
          <Route index element={<Home />} />
        </Route>
      
      </Routes>
    </div>
  );
}

export default App;

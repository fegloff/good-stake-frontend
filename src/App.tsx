import { Route, Routes } from 'react-router-dom';
import Login from './routes/login/login.component';

import './App.scss';
import Institutions from './routes/institutions/intitutions.component';
import InstitutionsHome from './routes/instituions-home/institutions-home.component';
import Humans from './routes/humans/humans.components';
import HumansHome from './routes/humans-home/humans-home.component';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Login />} />
        {/* Private routes */}
        <Route path="good/" element={<Humans />}>
          <Route index element={<HumansHome />} />
        </Route>
        <Route path="stake/" element={<Institutions />}>
          <Route index element={<InstitutionsHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

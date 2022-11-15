import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';

function App() {
  return (
    <div>
   
      <Routes>
     
        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<DashboardHome />} />

          {/* <Route path='tests' element={<Tests />}>
            <Route path='Personal' element={<Personaldetails/>} />
            <Route path='currentIshue' element={<CurrentIshue/>} />
          </Route> */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;

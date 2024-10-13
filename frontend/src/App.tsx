import { Routes, Route } from 'react-router-dom';
import './App.css';
//components
import HomePage from '../pages/home/HomePage';
import RegisterPage from '../pages/register/RegisterPage';
import LoginPage from '../pages/login/LoginPage';
import InventoryPage from '../pages/inventory/InventoryPage';
import NewPage from '../pages/new/NewPage';
import UsedPage from '../pages/used/UsedPage';
import TeamPage from '../pages/team/TeamPage';
import ProfilePage from '../pages/profile/ProfilePage';
import SoldPage from '../pages/sold/SoldPage';
import VehiclePage from '../pages/vehicle/VehiclePage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/inventory' element={<InventoryPage />} />
      <Route path='/new' element={<NewPage />} />
      <Route path='/used' element={<UsedPage />} />
      <Route path='/sold' element={<SoldPage />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/vehicle' element={<VehiclePage />} />
    </Routes>
  )
}

export default App;

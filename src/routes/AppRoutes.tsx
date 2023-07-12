import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Notes from '../pages/ErrandsPage';
import SingUp from '../pages/RegisterPage';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SingUp />} />
        <Route path="/recados" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

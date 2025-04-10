import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/Login' />
        <Route element={<Register />} path='/Register' />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

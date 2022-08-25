import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MyRoutes />
        <ToastContainer />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

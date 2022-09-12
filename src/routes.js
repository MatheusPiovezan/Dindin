import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getItem } from './utils/storage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Main/Home';
import ErrorPage from './pages/ErrorPage';

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MyRoutes() {
    return (
        <Routes>
            <Route path='/'>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signin' element={<Login />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route element={<ProtectedRoutes redirectTo={'/'} />}>
                <Route path='/home' element={<Home />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}

export default MyRoutes;
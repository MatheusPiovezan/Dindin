import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Main/Home';
import { getItem } from './utils/storage';

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = getItem('token');
    console.log('teste:' + redirectTo)
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<ProtectedRoutes redirectTo={'/'} />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    );
}

export default MyRoutes;
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Main/Home';

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    );
}

export default MyRoutes;
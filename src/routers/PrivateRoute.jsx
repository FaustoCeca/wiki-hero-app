import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../auth/AuthContext'


export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', pathname + search);
    
    return user.logged ? children : <Navigate to='/login' />
}
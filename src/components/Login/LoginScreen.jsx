import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom'
import { types } from '../../types/types';
import { useContext } from 'react/cjs/react.development';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Fausto' }   //No hay que mandar el logged, de eso se encarga el reducer
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    
    navigate(lastPath, { replace: true });
  }

  return (
    <div className='container mt-5'>
        <h1>Login Screen</h1>
        <hr />

        <button 
        className='btn btn-primary'
        onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  )
}

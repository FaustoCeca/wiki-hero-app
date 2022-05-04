import { types } from '../types/types';

// const state = {
    // name: 'Fausto',
    // logged: true
// }

export const authReducer = ( state = {}, action ) => {
    
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,      //Se podria hacer name: action.payload.name, pero el spreed es mas avanzado
                logged: true
            }
            
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state; 
    }
}
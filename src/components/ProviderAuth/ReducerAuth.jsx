export const INITIAL_STATE = {}

export const reducerAuth = ( state, action ) => {
    switch(action.type){
        case ('ADD_DATA'):
            return action.payload
          case 'DELETE_DATA':
            return []; // Restablece el estado a un array vacío
          default:
            return state; 
    }
}
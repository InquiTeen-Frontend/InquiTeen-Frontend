export const INITIAL_STATE = {}

export const reducerAuth = ( state, action ) => {
    switch(action.type){
        case ('ADD_DATA'):
            return action.payload
          case 'DELETE_DATA':
            return [];
          default:
            return state; 
    }
}
import { ADD_TODO } from '../actions'

export default function(state=[], action){ 
    switch (action.type) {
        case ADD_TODO:         
            return [action.payload, ...state]
        default:
            return state;
    }
    
}
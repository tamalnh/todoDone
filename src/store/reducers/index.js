import { combineReducers } from 'redux';
import reducer_add from './reducer_todo'


const rootReducer = combineReducers({
    todo: reducer_add
})

export default rootReducer;
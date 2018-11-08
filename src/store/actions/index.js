export const ADD_TODO = 'ADD_TODO';

export function addTodo (data) { 
    return {
        type: ADD_TODO,
        payload: data
    }
}


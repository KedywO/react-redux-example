import { createStore } from 'redux';
import uuid from 'react-uuid';

const initialState = {
    todos: [
        {
            id: uuid(),
            name: 'Zrób pranie',
            completed: false
        },
        {
            id: uuid(),
            name: 'Umyj naczynia',
            completed: false
        }
    ]
};

// REDUCER
const reducer = (state, {type, payload}) => {
    switch (type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => (todo.id !== payload))
            };
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === payload){
                        return {...todo, completed: !todo.completed}
                    }else return todo;
                })
            }
        default:
            return state;
    }
}

// ACTIONS

export const addTodoAction = todo => ({
    type: 'ADD_TODO',
    payload: todo
})

export const deleteTodoAction = todoId => ({
    type:'DELETE_TODO',
    payload: todoId
})

export const completeTodoAction = todoId => ({
    type:'COMPLETE_TODO',
    payload: todoId
})


// STORE
export const state = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


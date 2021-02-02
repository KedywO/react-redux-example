import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteTodoAction, completeTodoAction} from "../../todoStore";
import './TodoList.css';

const TodoList = () => {
    const todosState = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId));
    const toggleTodo = todoId => dispatch(completeTodoAction(todoId));
    console.log(todosState);
    return (
        <ul className='todolistMain'>
            {todosState.map(todo => (
                <li className='list-item' key={todo.id}>
                    <input type='checkbox'
                           checked={todo.completed}
                           onChange={toggleTodo.bind(null, todo.id)}
                    />
                    <h3 className={todo.completed ? 'completed' : null}>{todo.name}</h3>
                    <span onClick={deleteTodo.bind(null, todo.id)}>X</span>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
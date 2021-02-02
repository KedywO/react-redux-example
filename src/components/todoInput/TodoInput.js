import React, { useState } from "react";
import './TodoInput.css';
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../todoStore";
import uuid from 'react-uuid';

const TodoInput = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addTodo = todo => dispatch(addTodoAction(todo));

    const onSubmit = e => {
        e.preventDefault();
        if (todo.trim() === '') return;
        addTodo({
            id:uuid(),
            name: todo,
            completed: false
        });
        setTodo('');
    }

    const onChange = e => {
        setTodo(e.target.value);
    }

    return (
        <div className='todoInputMain'>
            <form onSubmit={onSubmit}>
                <input type='text'
                       onChange={onChange}
                       placeholder='Dodaj coś do zrobienia!'
                       value={todo}
                />
                <button type='submit'>Dodaj!</button>
            </form>
        </div>
    )
}

export default TodoInput;
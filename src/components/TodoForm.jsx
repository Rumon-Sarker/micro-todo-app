import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [todoName, setTodoName] = useState('');
    function handleSubmit(ev) {
        ev.preventDefault();
        addTodo(todoName);
        setTodoName('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={todoName}
                    onChange={ev => setTodoName(ev.target.value)}
                    placeholder="Enter Your Todo Text.." />
                <button>AddTodo</button>
            </form>

        </>
    );
};

export default TodoForm;
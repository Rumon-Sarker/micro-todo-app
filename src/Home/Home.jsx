
import React, { useEffect, useState } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';


const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (todos.length > 0) return;
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem('todos'));
        setTodos(todo || []);
    }, []);


    const addTask = (name) => {
        setTodos(prev => {
            return [...prev, { name: name, done: false }];
        });
    }

    const removeTask = (indexToRemove) => {
        setTodos(prev => {
            return prev.filter((taskObject, index) => index !== indexToRemove);
        });
    }

    const updateTaskDone = (todoIndex, newDone) => {
        setTodos(prev => {
            const newTodos = [...prev];
            newTodos[todoIndex].done = newDone;
            return newTodos;
        });
    }


    return (
        <main>
            <h1>Micro Todo-App</h1>

            <TodoForm addTodo={addTask} />
            {todos.map((todo, index) => (
                <Todo {...todo}
                    key={index}
                    onTrash={() => removeTask(index)}
                    onToggle={done => updateTaskDone(index, done)} />

            ))}
        </main>
    );
};

export default Home;
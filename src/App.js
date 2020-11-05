import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {

    const [todoId, setTodoId] = useState(6);

    const [todos, setTodos] = useState( [
        { id: 1, done: true, text: 'Add new todo with form' },
        { id: 2, done: true, text: 'Create Components : TodoForm, TodoList, TodoItem ...' },
        { id: 3, done: true, text: 'Mark done an item' },
        { id: 4, done: true, text: 'Remove an item' },
        { id: 5, done: true, text: 'Keep todos when refresh page'}
    ]);

    useEffect(() => {
        if (localStorage.getItem('todos') && localStorage.getItem('todoId')) {
            setTodos(JSON.parse(localStorage.getItem('todos')));
            setTodoId(JSON.parse(localStorage.getItem('todoId')));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('todoId', JSON.stringify(todoId));
    }, [todos]);

    const handleTodoFormSubmit = text => {
        console.log("handleTodoFormSubmit");

        const updatedTodos = [...todos];
        updatedTodos.push({
            id: todoId,
            done: false,
            text: text
        });

        setTodos(updatedTodos);
        setTodoId(todoId + 1);

    };

    const handleTodoDone = id => {
        const updatedTodos = [...todos];
        const currentTodo = updatedTodos.find(todos => todos.id === id);

        if(currentTodo.done) {
            currentTodo.done = false;
        }
        else {
            currentTodo.done = true;
        }

        setTodos(updatedTodos);
    }

    const deleteTodoItem = id => {
        const updatedTodos = [...todos];
        const index = updatedTodos.findIndex(todos => todos.id === id);

        updatedTodos.splice(index, 1);

        setTodos(updatedTodos);
    };

    return (
        <div className="App">
            <h1>My Todo List</h1>
            <div className="wrapper">
                <TodoForm onSubmit={handleTodoFormSubmit} />
                <TodoList todos={todos} deleteTodoItem={deleteTodoItem} todoDone={handleTodoDone} />
            </div>
        </div>
    );
}

export default App;

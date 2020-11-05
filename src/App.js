import React, { useState } from 'react';

import './App.css';
import TodoItem from "./TodoItem";

function App() {
    const [todos] = useState([
        { id: 1, done: false, text: 'Add new todo with form' },
        { id: 2, done: false, text: 'Create Components : TodoForm, TodoList, TodoItem ...' },
        { id: 3, done: false, text: 'Mark done an item' },
        { id: 4, done: false, text: 'Remove an item' }
    ]);

    return (
        <div className="App">
            <div className="wrapper">
                <form>
                    <input
                        type="text"
                        placeholder="Add a new todo"
                    />
                    <button type="submit">Add</button>
                </form>

                <ul>
                    {
                        todos.map((item, index) => (
                            <TodoItem id={item.id} done={item.done} text={item.text}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;

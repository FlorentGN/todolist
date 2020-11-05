import React, { useState } from 'react';

function TodoForm({onSubmit}) {

    const [todoText, setTodoText] = useState("");

    const handleInputChange = e => {
        setTodoText(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        onSubmit(todoText);
        setTodoText("");
    };

    return (
        <form>
            <input
                type="text"
                name="todo_text"
                placeholder="Add a new todo"
                onChange={handleInputChange}
                value={todoText}
            />
            <button type="submit" onClick={handleOnSubmit} className="todo-form-add-btn btn btn-success">Add</button>
        </form>
    );

}

export default TodoForm;
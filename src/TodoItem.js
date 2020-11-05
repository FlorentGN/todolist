import React, { useState } from 'react';

function TodoItem({id, done, text, deleteTodoItem, todoDone}) {

    const handleDoneOnClick = e => {
        todoDone(id);
    }

    const handleRemoveOnClick = e => {
        deleteTodoItem(id);
    }

    return (
        <li key={id}>
            <span className={done ? 'done' : 'undone'} onClick={handleDoneOnClick}>&#9675;</span>
            {text}
            <span className="remove" onClick={handleRemoveOnClick} className="todo-item-delete btn btn-danger">X</span>
        </li>
    );

}

export default TodoItem;